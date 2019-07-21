const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true },
  fullName: {type: String, required: true },
  lessonPlans: [
    {
      type: Schema.Types.ObjectId,
      ref: "LessonPlan"
    }
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
