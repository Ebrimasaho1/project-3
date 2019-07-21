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
  organization: { type: Schema.Types.ObjectId, ref: 'Organization' }
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
