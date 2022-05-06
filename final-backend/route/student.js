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

app.post("/student-sign-in", async (req, res) => {
  const user = await StudentModel.findOne({
    email: req.body.email,
  });

  if (!user) {
    return res.status(400).send("user name or password not correct");
  }

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (validPassword) {
    const token = jwt.sign(
      {
        id: user._id.toString(),
        role: user.role,
      },
      process.env.JWT_SECRET
    );
    const resp = {
      token: token,
      user: user,
    };
    res.send(resp);
  } else {
    res.status(500).send("user name or password not correct");
  }
});

app.post("/find-student", async (req, res) => {
  const user = await StudentModel.find();

  if (!user) {
    return res.status(400).send("No Student Found");
  }
  res.status(200).send(user);
});

app.post("/get-students-grade", async (req, res) => {
  const user = await StudentModel.find({
    currentGrade: req.body.currentGrade,
    currentSection: req.body.currentSection,
  });

  if (!user) {
    return res.status(400).send("No Student Found");
  }
  res.status(200).send(user);
});

app.post("/reset-student-password", async (req, res) => {
  const user = await StudentModel.find({
    _id: req.body.id,
  });

  const fullName = `${user.firstName} ${user.lastName} `;

  const salt = await bcrypt.genSalt(5);
  let password = `${fullName.replace(/\s+/g, "").toLowerCase()}@1234`;
  password = await bcrypt.hash(password, salt);

  let oldUser = await StudentModel.updateOne(
    {
      _id: req.body.id,
    },
    {
      $set: {
        password: password,
      },
    }
  );
  if (oldUser.nModified) {
    var mailOptions = {
      from: "cambridgeeth@gmail.com",
      to: user.email,
      subject: "Password Reset",
      text: `Dear ${
        user.firstName + " " + user.lastName
      } your Password Has been Reseted sucessfully if this is not you please report to school immediately`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
    res.send(oldUser);
  } else {
    res.status(500).send("pasword not changed");
  }
});

app.post("/change-student-password", async (req, res) => {
  const salt = await bcrypt.genSalt(5);

  password = await bcrypt.hash(req.body.password, salt);

  let oldUser = await StudentModel.updateOne(
    {
      _id: req.body.id,
    },
    {
      $set: {
        password: password,
        first: false,
      },
    }
  );
  if (oldUser.nModified) {
    res.send(oldUser);
  } else {
    res.status(500).send("pasword not changed");
  }
});

module.exports = app;
