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
const MarkList = new mongoose.model(
  'MarkList',
  new mongoose.Schema({
    fullName: {
      type: String,
      required: true,
    },
    id: {
      type: String,
    },
    studId: {
      type: String,
    },
    grade: {
      type: Number,
      maxlength: 2,
      default: 0,
    },
    amharic: {
      first: { type: Number, default: 0 },
      second: { type: Number, default: 0 },
      third: { type: Number, default: 0 },
      final: { type: Number, default: 0 },
    },
    english: {
      first: { type: Number, default: 0 },
      second: { type: Number, default: 0 },
      third: { type: Number, default: 0 },
      final: { type: Number, default: 0 },
    },
    math: {
      first: { type: Number, default: 0 },
      second: { type: Number, default: 0 },
      third: { type: Number, default: 0 },
      final: { type: Number, default: 0 },
    },
    biology: {
      first: { type: Number, default: 0 },
      second: { type: Number, default: 0 },
      third: { type: Number, default: 0 },
      final: { type: Number, default: 0 },
    },
    chemistry: {
      first: { type: Number, default: 0 },
      second: { type: Number, default: 0 },
      third: { type: Number, default: 0 },
      final: { type: Number, default: 0 },
    },
  })
);

const markListSchema = Joi.object({
  fullName: Joi.string().required(),

  id: Joi.string().required(),
  grade: Joi.number().required(),
  studId: Joi.string(),
});

app.post(
  '/insert-student-grade',
  // admin,
  async (req, res) => {
    let { error } = markListSchema.validate(
      req.body
    );

    if (error) {
      res.send(error.details[0].message);
    }

    let found = false;
    const clientcheck = await MarkList.find();
    clientcheck.forEach((markList) => {
      if (markList.id === req.body.id) {
        found = true;
        return;
      }
    });

    if (found)
      return res
        .status(500)
        .send('student alredy in the database ');

    const markList = new MarkList({
      fullName: req.body.fullName,
      grade: req.body.grade,
      id: req.body.id,
      studId: req.body.studId,
    });

    const result = await markList.save();
    res.status(200).send(result);
  }
);

app.post('/get-markList', async (req, res) => {
  const students = await MarkList.find({
    grade: req.body.grade,
  });

  if (!students) {
    return res
      .status(400)
      .send('No Result Found');
  }
  res.status(200).send(students);
});

app.post('/update-markList', async (req, res) => {
  let oldStudent = await MarkList.updateOne(
    {
      id: req.body.id,
    },
    {
      $set: {
        [req.body.subject]: req.body.result,
      },
    }
  );
  if (oldStudent.nModified) {
    console.log('done');
    res.send('done');
  }
});

module.exports = app;
