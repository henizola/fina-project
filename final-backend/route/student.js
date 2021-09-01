const express = require('express');

const app = express();

const Joi = require('joi');

const mongoose = require('mongoose');

const fs = require('fs');

const { admin } = require('./super');

const multer = require('multer');

var nodemailer = require('nodemailer');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const path = require('path');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'CambridgeEth@gmail.com',
    pass: 'cambridge@12345',
  },
});

app.use(express.json());
const Student = new mongoose.model(
  'Student',
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
    id: {
      type: Number,
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
  })
);

const studentSchema = Joi.object({
  email: Joi.string().required(),
  firstName: Joi.string().required(),
  middleName: Joi.string().required(),
  lastName: Joi.string().required(),
  phone: Joi.string().required(),
});

const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, path.join(__dirname, '..', 'docs'));
  },
  filename: function (req, file, cb) {
    const now = new Date().toISOString();
    const date = now.replace(/:/g, '-');
    cb(null, date + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post(
  '/create-student',
  // admin,
  async (req, res) => {
    let { error } = studentSchema.validate(
      req.body
    );
    const fullName =
      req.body.firstName + req.body.lastName;

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;

    if (error) {
      res.send(error.details[0].message);
    }

    let found = false;
    const clientcheck = await Student.find();
    clientcheck.forEach((student) => {
      if (
        student.email === req.body.email ||
        student.phone === req.body.phone
      ) {
        found = true;
        return;
      }
    });

    if (found)
      return res
        .status(500)
        .send('Email or Phone Number taken');

    const salt = await bcrypt.genSalt(5);
    let password = `${
      firstName +
      lastName.replace(/\s+/g, '').toLowerCase()
    }@1234`;
    password = await bcrypt.hash(password, salt);

    const lastStudent = await Student.find()
      .limit(1)
      .sort({ $natural: -1 });
    let id = 4231;

    if (lastStudent.length) {
      const lastStudent = await Student.find()
        .limit(1)
        .sort({ $natural: -1 });
      console.log(lastStudent.id);
    }

    const student = new Student({
      email: req.body.email,
      password: password,
      firstName: req.body.firstName,
      middleName: req.body.middleName,
      lastName: req.body.lastName,
      phone: req.body.phone,
      id: id,
    });

    var mailOptions = {
      from: 'cambridgeeth@gmail.com',
      to: req.body.email,
      subject: 'Account created',
      text: `Dear ${
        req.body.firstName +
        ' ' +
        req.body.lastName
      } Wellcome to Cambridge Academy Ethiopia your Student Id is CAM${id}  to activate your account please sign in using your email your default password is ${fullName
        .replace(/\s+/g, '')
        .toLowerCase()}@1234}`,
    };

    transporter.sendMail(
      mailOptions,
      function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log(
            'Email sent: ' + info.response
          );
        }
      }
    );

    const result = await student.save();
    res.status(200).send(result);
  }
);

app.post('/staff-sign-in', async (req, res) => {
  const user = await Student.findOne({
    email: req.body.email,
  });

  if (!user) {
    return res
      .status(400)
      .send('user name or password not correct');
  }

  const validPassword = await bcrypt.compare(
    req.body.password,
    user.password
  );
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
      role: user.role,
      id: user._id,
      userName: user.userName,
    };
    res.send(resp);
  } else {
    res
      .status(500)
      .send('user name or password not correct');
  }
});

module.exports = app;
