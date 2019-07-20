const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const lessonPlanSchema = new Schema({
  title: { type: String, required: true },
  objective: { type: String },
  overview: { type: String },
  preparation: { type: String },
  description: { type: String },
  agenda: { type: String },
  materials: [{ type: String }],
  tips: { type: String },
  links: [{type: String}],
  attachments: [{type: String}]
});

const LessonPlan = mongoose.model("LessonPlan", lessonPlanSchema);

module.exports = LessonPlan;
