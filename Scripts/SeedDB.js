const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/revolve"
);


db.LessonPlan.create([{ title: 'Test Lesson Plan' }])
  .then(([lessonPlans]) => {
    Promise.all([
      db.User.create([{ email: 'laurabermudezg@gmail.com', fullName: 'Laura Bermudez', lessonPlans: lessonPlans }]),
      db.Project.create([{ name: 'Webelos Den', lessonPlans: lessonPlans }])
    ]).then(([projects, users]) => {
      db.Organization.create([{ name: 'Cub Scouts Pack', projects: projects }]).then(([organizations])=>{
        db.Project.updateOne(projects[0], {organization: organizations[0]}).then(()=>{
          return db.LessonPlan.updateOne(lessonPlans[0], {user:users[0], project:projects[0]})
        });
      });
    })
  });


