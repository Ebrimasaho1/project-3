const db = require("../models");

module.exports = {
  // findAll: function(req, res) {
  //   db.User
  //     .find(req.query)
  //     .sort({ name: -1 })
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  getUser: function(req, res){
    db.User
      .find(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.User
      .findById(req.params.id)
      .populate({path: 'lessonPlans', populate: {path:'project', populate: {path:'organization'}}})    
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  //only create if it doesn't exist, but always return the user
  create: function(req, res) {
    db.User
    .find(req.body).then( (docs) => {
      if (!docs.length){
        console.log("user doesn't exist... creating");
        db.User.create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
      }else{
        console.log("User already exists, returning: " + docs);
        return res.json(docs);
      }
    }); 
  },
  update: function(req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // remove: function(req, res) {
  //   db.User
  //     .findById({ _id: req.params.id })
  //     .then(dbModel => dbModel.remove())
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // }
};