
const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.LessonPlan
      .find()
      .sort({ name: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    console.log("called find by id");
    db.LessonPlan
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))

      .catch(err => res.status(422).json(err));
  },
  findByTitle: function (req, res) {
    db.LessonPlan
      .find({ title: { $regex: '.*' + req.params.words + '.*' } })
      .limit(5)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.LessonPlan
      .create(req.body)
      .then((dbLessonPlanModel) => {
        console.log("Lesson plan created:" + dbLessonPlanModel.user);
        Promise.all([
          db.User.findById(dbLessonPlanModel.user).then((userModel) => {


            console.log("User Model: " + JSON.stringify(userModel));
            userModel.lessonPlans.push(dbLessonPlanModel);
            db.User.updateOne({ _id: userModel._id }, { lessonPlans: userModel.lessonPlans })
              .then(userUpdated => {
                console.log("User updated: " + JSON.stringify(userUpdated));
              });
          }),
          db.Project.findById(dbLessonPlanModel.project).then((projectModel) => {
            console.log("Project Model: " + JSON.stringify(projectModel));
            projectModel.lessonPlans.push(dbLessonPlanModel);
            db.Project.updateOne({ _id: projectModel._id }, { lessonPlans: projectModel.lessonPlans }).then(projectUpdated => {
              console.log("Project updated: " + JSON.stringify(projectUpdated));
            });
          })
        ]).then((user, project) => {
          console.log("User and project updated");
        });
        return res.json(dbLessonPlanModel);
      })
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.LessonPlan
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.LessonPlan
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};