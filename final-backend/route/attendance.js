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
const { date } = require('joi');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'CambridgeEth@gmail.com',
    pass: 'cambridge@12345',
  },
});

app.use(express.json());
const Attendance = new mongoose.model(
  'Attendance',
  new mongoose.Schema({
    fullName: {
      type: String,
      required: true,
    },
    studId: {
      type: String,
    },
    grade: {
      type: Number,
      maxlength: 2,
      default: 0,
    },
    section: {
      type: String,
      maxlength: 3,
    },
    monday: {
      type: Number,
      default: 0,
    },
    tuesday: {
      type: Number,
      default: 0,
    },
    wednesday: {
      type: Number,
      default: 0,
    },
    thursday: {
      type: Number,
      default: 0,
    },
    friday: {
      type: Number,
      default: 0,
    },
    id: {
      type: String,
    },
  })
);

const attendanceSchema = Joi.object({
  fullName: Joi.string().required(),

  id: Joi.string().required(),
  studId: Joi.string().required(),
  grade: Joi.number().required(),
  section: Joi.string().required(),
});

app.post(
  '/insert-student-attendance',
  // admin,
  async (req, res) => {
    let { error } = attendanceSchema.validate(
      req.body
    );
    console.log(req.body);

    if (error) {
      res.send(error.details[0].message);
    }

    let found = false;
    const clientcheck = await Attendance.find();
    clientcheck.forEach((attendance) => {
      if (attendance.studId === req.body.studId) {
        found = true;
        return;
      }
    });

    if (found)
      return res
        .status(500)
        .send('student alredy in the database ');

    const attendance = new Attendance({
      fullName: req.body.fullName,
      grade: req.body.grade,
      id: req.body.id,
      studId: req.body.studId,
      section: req.body.section,
    });

    const result = await attendance.save();
    res.status(200).send(result);
  }
);

app.post('/get-attendance', async (req, res) => {
  const students = await Attendance.find({
    grade: req.body.grade,
    section: req.body.section,
  });
  console.log(students);

  if (!students) {
    return res
      .status(400)
      .send('No Result Found');
  }
  res.status(200).send(students);
});

app.post(
  '/get-student-attendance',
  async (req, res) => {
    const students = await Attendance.findOne({
      id: req.body.id,
    });

    console.log(students, 'pshhh');

    if (!students) {
      return res
        .status(400)
        .send('No Result Found');
    }
    res.status(200).send(students);
  }
);

module.exports = app;
