const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.Project
      .find(req.query)
      .sort({ name: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Project
      .findById(req.params.id)
      .populate('lessonPlans')
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByName: function (req, res) {
    db.Project
      .find({ name: { $regex: req.params.words, '$options' : 'i' } })
      .populate({ path: 'lessonPlans',  populate: {path:'project', populate: {path: 'organization'} }})
      .populate({ path: 'organization' })
      .limit(10)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Project
      .create(req.body)
      .then((dbModelProject) => {
        db.Organization.findById(dbModelProject.organization).then((orgToUpdate) => {
          orgToUpdate.projects.push(dbModelProject._id);
          console.log("OrgToUpdate: " + orgToUpdate);
          db.Organization.updateOne({ _id: orgToUpdate._id }, { projects: orgToUpdate.projects }).then((updatedOrg) => {
            console.log("Organization updated: " + JSON.stringify(updatedOrg));
          });
        }).then(() => {
          console.log("Org updated: ");
          return res.json(dbModelProject);
        });
      }).catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Project
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Project
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};