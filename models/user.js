const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true },
  fullName: {type: String, required: true },
  plans: [
    {
      // Store ObjectIds in the array
      type: Schema.Types.ObjectId,
      // The ObjectIds will refer to the ids in the Note model
      ref: "lessonPlan"
    }
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
