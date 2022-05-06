const mongoose = require("mongoose");

const StudentModel = new mongoose.model(
  "Student",
  new mongoose.Schema({
    email: {
      type: String,
      required: true,
      unique: true,
      minlength: 5,
      maxlength: 50,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },

    firstName: {
      type: String,
      required: true,
    },
    middleName: {
      type: String,
      required: true,
    },
    first: {
      type: Boolean,
    },
    lastName: {
      type: String,
      required: true,
    },
    id: {
      type: String,
    },
    currentGrade: {
      type: Number,
      maxlength: 2,
      default: 0,
    },
    currentSection: {
      type: String,
      maxlength: 2,
      default: "",
    },
    phone: {
      type: String,
      required: true,
    },
    class: {
      type: String,
    },
    section: {
      type: String,
      maxlength: 2,
    },
    attendance: {
      type: Array,
    },
    markList: {
      type: Array,
    },
    gradeArchive: {
      type: Array,
    },
  })
);

module.exports = StudentModel;
