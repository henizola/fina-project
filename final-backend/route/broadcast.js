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
const BroadCast = new mongoose.model(
  'BroadCast',
  new mongoose.Schema({
    type: {
      type: String,
      required: true,
    },
    file: {
      type: String,
      required: true,
    },
  })
);

const broadCastSchema = Joi.object({
  firstName: Joi.string().required(),
  middleName: Joi.string().required(),
  lastName: Joi.string().required(),
  id: Joi.number().required(),
  grade: Joi.number().required(),
  section: Joi.string().required(),
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
  '/insert-student',
  // admin,
  async (req, res) => {
    let { error } = broadCastSchema.validate(
      req.body
    );
    console.log(req.body);

    if (error) {
      res.send(error.details[0].message);
    }

    let found = false;
    const clientcheck = await BroadCast.find();
    clientcheck.forEach((broadCast) => {
      if (broadCast.id === req.body.id) {
        found = true;
        return;
      }
    });

    if (found)
      return res
        .status(500)
        .send('student alredy in the database ');

    const broadCast = new BroadCast({
      firstName: req.body.firstName,
      middleName: req.body.middleName,
      lastName: req.body.lastName,
      grade: req.body.grade,
      id: req.body.id,
      broadCast: [
        {
          date: new Date()
            .toString()
            .substring(0, 10),
          remark: 'A',
        },
      ],
      section: req.body.section,
    });

    const result = await broadCast.save();
    res.status(200).send(result);
  }
);

app.post('/get-broadCast', async (req, res) => {
  const students = await BroadCast.find({
    grade: req.body.grade,
    section: req.body.section,
  });

  if (!students) {
    return res
      .status(400)
      .send('No Result Found');
  }
  res.status(200).send(students);
});

module.exports = app;
