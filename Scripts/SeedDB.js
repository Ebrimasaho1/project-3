const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/revolve"
);


Promise.all([
  User.create([{ email: "laurabermudezg@gmail.com" }]),
  Organization.create([{ name: 'Cub Scouts Pack' }]),
  Project.create([{ name: 'Webelos Den' }]),

]).then(([users, projects]) => {
  const lessonPlans = [
      { title: 'Test Lesson Plan', user: users[0], projects: projects[0] }
  ];    
  return LessonPlan.create(lessonPlans);
})