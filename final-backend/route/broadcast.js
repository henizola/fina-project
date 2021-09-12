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
    date: {
      type: Date,
    },
    description: {
      type: String,
    },
  })
);

const broadCastSchema = Joi.object({
  type: Joi.string().required(),
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
  '/broadcast',
  upload.single('file'),
  // admin,
  async (req, res) => {
    let { error } = broadCastSchema.validate(
      req.body
    );
    if (!req.file) {
      return res.status(400).send('bad request');
    }

    const ad = new BroadCast({
      file: req.file.filename,
      type: req.body.type,
      date: req.body.date,
      description: req.body.description,
    });
    const result = await ad.save();
    res.send(result);
  }
);
app.post(
  '/get-school-calendar',
  async (req, res) => {
    const doc = await BroadCast.find({
      type: 'school Calendar',
    });

    if (!doc) {
      return res
        .status(400)
        .send('No Result Found');
    }
    res.status(200).send(doc);
  }
);

module.exports = app;
