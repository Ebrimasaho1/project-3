const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/revolve"
);

db.LessonPlan.create([{ title: 'Test Lesson Plan' }])
  .then(([lessonPlans]) => {
    Promise.all([
      db.User.create([{ email: "guest@gmail.com", fullName: "John Doe", lessonPlans: lessonPlans[0] }]),
      db.Project.create([{ name: 'Webelos Den', lessonPlans: lessonPlans[0] }])
    ]).then(([projects]) => {
      return db.Organization.create([{ name: 'Cub Scouts Pack', projects: projects[0] }]);
    })
  });


