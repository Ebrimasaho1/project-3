const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/revolve"
);


db.LessonPlan.create([{ title: 'Test Lesson Plan' }])
  .then(([lessonPlans]) => {
    Promise.all([
      db.User.create([{ email: 'mark.allen.silva@gmail.com', fullName: 'Mark Silva', lessonPlans: lessonPlans }]),
      db.Project.create([{ name: 'Webelos Den', lessonPlans: lessonPlans }])
    ]).then(([users,projects ]) => {
      db.Organization.create([{ name: 'Cub Scouts Pack', projects: projects }]).then(([organizations])=>{
        console.log(JSON.stringify(organizations));
        return db.Project.updateOne(projects[0], {name:'Webelos2 Den', organization: organizations}).then(()=>{
          return db.LessonPlan.updateOne(lessonPlans[0], {user:users[0], project:projects[0]})
        });
      });
    })
  });


