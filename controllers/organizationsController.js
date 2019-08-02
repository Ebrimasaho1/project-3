const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Organization
      .find(req.query)
      .sort({ name: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Organization
      .findById(req.params.id)
      .populate('projects')
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByName: function(req,res){
    console.log("find by organization name called");
    db.Organization
    .find({ name: { $regex: '.*' + req.params.words + '.*', '$options' : 'i' } })
      .populate({ path: 'projects', 
                  populate: { path: 'lessonPlans',  
                              populate: {path:'project', 
                                        populate: {path: 'organization'} }} })
      .limit(10)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Organization
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Organization
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Organization
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};