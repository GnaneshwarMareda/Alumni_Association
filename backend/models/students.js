const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  Id: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, default: "student", required: true },
  name: { type: String, required: true },
  personalEmail: { type: String, required: true },
  universityEmail: { type: String, required: true },
  mobile: { type: String, required: true },
  graduationYear: { type: String, required: true },
  fieldOfStudy: { type: String, required: true },

  address: { type: String, required: false },
  interests: { type: Array, required: false },
});

const Student = mongoose.model("student", studentSchema);

module.exports = Student;
