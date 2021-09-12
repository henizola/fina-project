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
const Principal = new mongoose.model(
  'Principal',
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
  })
);

const principalSchema = Joi.object({
  email: Joi.string().required(),
  firstName: Joi.string().required(),
  middleName: Joi.string().required(),
  lastName: Joi.string().required(),
  phone: Joi.string().required(),
});

app.post(
  '/create-principal',
  // admin,
  async (req, res) => {
    let { error } = principalSchema.validate(
      req.body
    );
    console.log(req);
    const fullName =
      req.body.firstName + req.body.lastName;

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;

    if (error) {
      res.send(error.details[0].message);
    }

    let found = false;
    const clientcheck = await Principal.find();
    clientcheck.forEach((principal) => {
      if (
        principal.email === req.body.email ||
        principal.phone === req.body.phone
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

    if (lastPrincipal.length) {
      const lastPrincipal = await Principal.find()
        .limit(1)
        .sort({ $natural: -1 });
      console.log(lastPrincipal.id);
    }

    const principal = new Principal({
      email: req.body.email,
      password: password,
      firstName: req.body.firstName.toLowerCase(),
      middleName:
        req.body.middleName.toLowerCase(),
      lastName: req.body.lastName.toLowerCase(),
      phone: req.body.phone,
    });

    var mailOptions = {
      from: 'cambridgeeth@gmail.com',
      to: req.body.email,
      subject: 'Account created',
      text: `Dear ${
        req.body.firstName +
        ' ' +
        req.body.lastName
      } Wellcome to Cambridge Academy Ethiopia  to activate your account please sign in using your email your default password is ${
        firstName +
        lastName.replace(/\s+/g, '').toLowerCase()
      }@1234`,
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

    const result = await principal.save();
    res.status(200).send(result);
  }
);

app.post(
  '/principal-sign-in',
  async (req, res) => {
    const user = await Principal.findOne({
      email: req.body.email,
    });

    if (!user) {
      return res
        .status(400)
        .send(
          'user name or password not correct'
        );
    }
    console.log(req.body);

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
        user: user,
      };
      res.send(resp);
    } else {
      res
        .status(500)
        .send(
          'user name or password not correct'
        );
    }
  }
);

app.post('/find-principal', async (req, res) => {
  const user = await Principal.find();

  if (!user) {
    return res
      .status(400)
      .send('No Principal Found');
  }
  res.status(200).send(user);
});

app.post(
  '/get-principals-grade',
  async (req, res) => {
    const user = await Principal.find({
      currentGrade: req.body.currentGrade,
      currentSection: req.body.currentSection,
    });

    if (!user) {
      return res
        .status(400)
        .send('No Principal Found');
    }
    res.status(200).send(user);
  }
);

module.exports = app;
