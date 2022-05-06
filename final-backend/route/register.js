const express = require("express");

const app = express();

const Joi = require("joi");

const mongoose = require("mongoose");

const fs = require("fs");

const { admin } = require("./super");

const multer = require("multer");

var nodemailer = require("nodemailer");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const path = require("path");
const { date } = require("joi");
const StudentModel = require("../models/student.model");

const ParentsModel = require("../models/parent.model");

const studentRegister = require("../middlewares/register-student");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "CambridgeEth@gmail.com",
    pass: "cambridge@12345",
  },
});

app.use(express.json());

const studentSchema = Joi.object({
  email: Joi.string().required(),
  firstName: Joi.string().required(),
  middleName: Joi.string().required(),
  lastName: Joi.string().required(),
  phone: Joi.string().required(),
  grade: Joi.string().required(),
  fatherFirstName: Joi.string().required(),
  fatherMiddleName: Joi.string().required(),
  fatherLastName: Joi.string().required(),
  fatherEmail: Joi.string().required(),
  fatherPhone: Joi.string().required(),
  motherFirstName: Joi.string().required(),
  motherMiddleName: Joi.string().required(),
  motherLastName: Joi.string().required(),
  motherEmail: Joi.string().required(),
  motherPhone: Joi.string().required(),
});

const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, path.join(__dirname, "..", "docs"));
  },
  filename: function (req, file, cb) {
    const now = new Date().toISOString();
    const date = now.replace(/:/g, "-");
    cb(null, date + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/register-student", async (req, res) => {
  console.log("here is req", req.body);
  let { error } = studentSchema.validate(req.body);
  let fullName = `${req.body.firstName}${req.body.lastName}`;

  let firstName = req.body.firstName;
  let lastName = req.body.lastName;

  if (error) {
    return res.send(error.details[0].message);
  }

  let foundStudent = false;
  let clientcheck = await StudentModel.find();
  clientcheck.forEach((student) => {
    if (student.email === req.body.email || student.phone === req.body.phone) {
      foundStudent = true;
      return;
    }
  });

  if (foundStudent)
    return res.status(500).send("Student Email or Phone Number taken");

  let salt = await bcrypt.genSalt(5);
  let password = `${fullName.replace(/\s+/g, "").toLowerCase()}@1234`;
  password = await bcrypt.hash(password, salt);

  const lastStudent = await StudentModel.find().limit(1).sort({ $natural: -1 });
  let id = getRandomInt(999);

  if (lastStudent.length) {
    let lastStudent = await StudentModel.find().limit(1).sort({ $natural: -1 });
  }
  const sec = ["A", " B", " C", " D"];
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const be = getRandomInt(3);

  const student = new StudentModel({
    email: req.body.email,
    password: password,
    firstName: req.body.firstName.toLowerCase(),
    middleName: req.body.middleName.toLowerCase(),
    lastName: req.body.lastName.toLowerCase(),
    phone: req.body.phone,
    id: `CAM${id}`,
    currentGrade: req.body.grade,
    section: sec[be],
    first: true,
  });

  var mailOptions = {
    from: "cambridgeeth@gmail.com",
    to: req.body.email,
    subject: "Account created",
    text: `Dear ${
      req.body.firstName + " " + req.body.lastName
    } Wellcome to Cambridge Academy Ethiopia your Student Id is CAM${id}  to activate your account please sign in using your email your default password is ${
      firstName + lastName.replace(/\s+/g, "").toLowerCase()
    }@1234`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  fatherFullName = req.body.fatherFirstName + req.body.fatherLastName;
  motherFullName = req.body.motherFirstName + req.body.motherLastName;

  let parentfound = false;
  let parentCheck = await ParentsModel.find();
  parentCheck.forEach((parents) => {
    if (
      parents.email === req.body.fatherEmail ||
      parents.email === req.body.motherEmail ||
      parents.phone === req.body.fatherPhone ||
      parents.phone === req.body.motherPhone
    ) {
      parentfound = true;
      return;
    }
  });

  if (parentfound) {
    return res.status(500).send("Parents Email or Phone Number taken");
  }
  if (
    req.body.fatherEmail === req.body.motherEmail ||
    req.body.fatherPhone === req.body.motherPhone
  ) {
    return res
      .status(500)
      .send("Parents Email and phone number can not be simmilar");
  }
  salt = await bcrypt.genSalt(5);
  let fatherPassword = `${fatherFullName
    .replace(/\s+/g, "")
    .toLowerCase()}@1234`;
  fatherPassword = await bcrypt.hash(password, salt);

  let motherPassword = `${motherFullName
    .replace(/\s+/g, "")
    .toLowerCase()}@1234`;
  motherPassword = await bcrypt.hash(password, salt);

  const mother = new ParentsModel({
    email: req.body.motherEmail,
    password: motherPassword,
    firstName: req.body.motherFirstName.toLowerCase(),
    middleName: req.body.motherMiddleName.toLowerCase(),
    lastName: req.body.motherLastName.toLowerCase(),
    phone: req.body.motherPhone,
    childId: `CAM${id}`,
  });

  var mailOptions = {
    from: "cambridgeeth@gmail.com",
    to: req.body.email,
    subject: "Account created",
    text: `Dear ${
      req.body.motherFirstName + " " + req.body.motherLastName
    } Wellcome to Cambridge Academy Ethiopia your Parent Account Has Been created Sucsessfully  to activate your account please sign in using your email your default password is ${fullName
      .replace(/\s+/g, "")
      .toLowerCase()}@1234`,
  };

  const father = new ParentsModel({
    email: req.body.fatherEmail,
    password: fatherPassword,
    firstName: req.body.fatherFirstName.toLowerCase(),
    middleName: req.body.fatherMiddleName.toLowerCase(),
    lastName: req.body.fatherLastName.toLowerCase(),
    phone: req.body.fatherPhone,
    childId: `CAM${id}`,
  });

  var mailOptions = {
    from: "cambridgeeth@gmail.com",
    to: req.body.email,
    subject: "Account created",
    text: `Dear ${
      req.body.fatherFirstName + " " + req.body.fatherLastName
    } Wellcome to Cambridge Academy Ethiopia your Parent Account Has Been created Sucsessfully  to activate your account please sign in using your email your default password is ${fullName
      .replace(/\s+/g, "")
      .toLowerCase()}@1234`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  const fatherResult = await father.save();
  const motherResult = await mother.save();

  const studentResult = await student.save();
  res.status(200).send({ studentResult, fatherResult, motherResult });
});

module.exports = app;
