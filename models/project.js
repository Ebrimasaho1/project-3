const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  name: { type: String, required: true },
  lessonPlans: [
    {
      // Store ObjectIds in the array
      type: Schema.Types.ObjectId,
      // The ObjectIds will refer to the ids in the Note model
      ref: "lessonPlan"
    }
  ],
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
