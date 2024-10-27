const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  studentId: { type: String, required: true },
  email: { type: email, required: true },
  mobile: { type: String, required: true },
  address: { type: String, required: false },
  interests: { type: Array, required: false },
});

const Student = mongoose.model("student", studentSchema);

module.exports = Student;
