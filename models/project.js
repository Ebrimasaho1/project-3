const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  name: { type: String, required: true },
  lessonPlans: [
    {
      type: Schema.Types.ObjectId,
      ref: "LessonPlan"
    }
  ],
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
