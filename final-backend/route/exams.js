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
    exam: 'CambridgeEth@gmail.com',
    pass: 'cambridge@12345',
  },
});

app.use(express.json());
const Exams = new mongoose.model(
  'Exams',
  new mongoose.Schema({
    type: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },

    chapters: {
      type: String,
    },
    grade: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
  })
);

const examsSchema = Joi.object({
  type: Joi.string().required(),
  date: Joi.date().required(),
  chapters: Joi.string(),
  grade: Joi.string().required(),
  subject: Joi.string().required(),
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
  '/post-exam',
  // admin,
  async (req, res) => {
    let { error } = examsSchema.validate(
      req.body
    );
    if (error) {
      console.log(error);
    }
    const exam = new Exams({
      type: req.body.type,
      date: req.body.date,
      chapters: req.body.chapters,
      grade: req.body.grade,
      subject: req.body.subject,
    });

    const result = await exam.save();
    res.status(200).send(result);
  }
);
app.post(
  '/get-teacher-exams',
  async (req, res) => {
    const exam = await Exams.find({
      grade: req.body.grade,
      subject: req.body.subject,
    });

    if (!exam) {
      return res
        .status(400)
        .send('No Teacher Available');
    }
    res.status(200).send(exam);
  }
);
app.post('/get-exams', async (req, res) => {
  const exam = await Exams.find({
    grade: req.body.grade,
  });

  if (!exam) {
    return res
      .status(400)
      .send('No Exam Available');
  }
  res.status(200).send(exam);
});
module.exports = app;
