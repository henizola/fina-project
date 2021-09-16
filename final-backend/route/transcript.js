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
const Transcript = new mongoose.model(
  'Transcript',
  new mongoose.Schema({
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
      type: String,
    },
    schoolId: {
      type: String,
    },
    grade: {
      type: Number,
      maxlength: 2,
      default: 0,
    },
    section: {
      type: String,
      maxlength: 2,
      default: 0,
    },
    results: {
      type: Array,
    },
  })
);

const transcriptSchema = Joi.object({
  firstName: Joi.string().required(),
  middleName: Joi.string().required(),
  lastName: Joi.string().required(),
  id: Joi.string().required(),
  grade: Joi.number().required(),
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
  '/insert-transcript',
  // admin,
  async (req, res) => {
    let { error } = transcriptSchema.validate(
      req.body
    );

    if (error) {
      return res.send(error.details[0].message);
    }

    let found = false;
    const clientcheck = await Transcript.find();
    clientcheck.forEach((transcript) => {
      if (transcript.id === req.body.id) {
        found = true;
        return;
      }
    });

    if (found)
      return res
        .status(500)
        .send(
          'transcript alredy in the database '
        );

    const transcript = new Transcript({
      firstName: req.body.firstName,
      middleName: req.body.middleName,
      lastName: req.body.lastName,
      grade: req.body.grade,
      id: req.body.id,
    });

    const result = await transcript.save();
    res.status(200).send(result);
  }
);

app.post('/get-transcript', async (req, res) => {
  const transcripts = await Transcript.findOne({
    id: req.body.id,
  });

  if (!transcripts) {
    return res
      .status(400)
      .send('No Result Found');
  }
  res.status(200).send(transcripts);
});

app.post(
  '/get-all-transcript',
  async (req, res) => {
    const transcripts = await Transcript.find();

    if (!transcripts) {
      return res
        .status(400)
        .send('No Result Found');
    }
    res.status(200).send(transcripts);
  }
);

module.exports = app;
