const mongoose = require("mongoose");

const studentModel = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    institution: {
      type: String,
      required: true,
    },
    course: {
      type: String,
      required: true,
    },
    married: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("students", studentModel);
