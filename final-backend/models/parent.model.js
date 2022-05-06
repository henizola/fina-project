const mongoose = require("mongoose");

const ParentsModel = new mongoose.model(
  "Parents",
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
    lastName: {
      type: String,
      required: true,
    },
    childId: {
      type: String,
    },
    phone: {
      type: String,
      required: true,
    },
  })
);

module.exports = ParentsModel;
