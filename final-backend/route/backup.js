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
const Parents = new mongoose.model(
  'Parents',
  new mongoose.Schema({
    father: {
      email: {
        type: String,
        required: true,
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

      phone: {
        type: String,
        required: true,
      },
    },
    childId: {
      type: String,
    },
    mother: {
      email: {
        type: String,
        required: true,
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

      phone: {
        type: String,
        required: true,
      },
    },
  })
);

app.post(
  '/create-parents',
  // admin,
  async (req, res) => {
    console.log(req.body);

    const combinedName = `${req.body.father.firstName} ${req.body.father.firstName}`;

    const salt = await bcrypt.genSalt(5);
    let password = `${combinedName
      .replace(/\s+/g, '')
      .toLowerCase()}@1234`;
    password = await bcrypt.hash(password, salt);

    const parents = new Parents({
      father: { ...req.body.father, password },
      mother: { ...req.body.mother, password },
      childId: req.body.childId,
    });

    var mailOptions = {
      from: 'cambridgeeth@gmail.com',
      to: req.body.father.email,
      subject: 'Account created',
      text: `Dear Wellcome to Cambridge Academy Ethiopia your Parent Account Has Been created Sucsessfully  to activate your account please sign in using your email your default password is ${combinedName
        .replace(/\s+/g, '')
        .toLowerCase()}@1234`,
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

    const result = await parents.save();
    res.status(200).send(result);
  }
);

app.post('/parents-sign-in', async (req, res) => {
  const user = await Parents.findOne({
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
      user: user,
    };
    res.send(resp);
  } else {
    res
      .status(500)
      .send('user name or password not correct');
  }
});

app.post('/find-parents', async (req, res) => {
  const user = await Parents.find();

  if (!user) {
    return res
      .status(400)
      .send('No Parents Found');
  }
  res.status(200).send(user);
});

app.post(
  '/get-parentss-grade',
  async (req, res) => {
    const user = await Parents.find({
      currentGrade: req.body.currentGrade,
      currentSection: req.body.currentSection,
    });

    if (!user) {
      return res
        .status(400)
        .send('No Parents Found');
    }
    res.status(200).send(user);
  }
);

module.exports = app;
