const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const organizationSchema = new Schema({
  name: { type: String, required: true },
  projects: [
    {
      type: Schema.Types.ObjectId,
      ref: "Project"
    }
  ],
});

const Organization = mongoose.model("Organization", organizationSchema);

module.exports = Organization;
