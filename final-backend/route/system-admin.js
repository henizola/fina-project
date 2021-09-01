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
const SystemAdmin = new mongoose.model(
  'SystemAdmin',
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

    fullName: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
  })
);

const systemAdminSchema = Joi.object({
  email: Joi.string().required(),
  fullName: Joi.string().required(),
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
  '/create-system-admin',
  // admin,
  async (req, res) => {
    let { error } = systemAdminSchema.validate(
      req.body
    );
    const fullName = req.body.fullName;
    if (error) {
      res.send(error.details[0].message);
    }

    let found = false;
    const clientcheck = await SystemAdmin.find();
    clientcheck.forEach((ad) => {
      if (
        ad.email === req.body.email ||
        ad.userName === req.body.userName
      ) {
        found = true;
        return;
      }
    });

    if (found)
      return res
        .status(500)
        .send('email or username taken');

    const salt = await bcrypt.genSalt(5);
    let password = `${fullName
      .replace(/\s+/g, '')
      .toLowerCase()}@1234`;
    password = await bcrypt.hash(password, salt);

    const client = new SystemAdmin({
      email: req.body.email,
      password: password,
      fullName: fullName,
      phone: req.body.phone,
      role: 'system admin',
    });

    var mailOptions = {
      from: 'nodemailer.henok@gmail.com',
      to: req.body.email,
      subject: 'Account created',
      text: `Hello ${fullName} You are now System Admintrator in Cambridge Accadamey Ethiopia to activate your account please sign in using your email your default password is ${fullName
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

    const result = await client.save();
    res.status(200).send(result);
  }
);

app.post('/staff-sign-in', async (req, res) => {
  const user = await SystemAdmin.findOne({
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




// app.post('/get-clients', async (req, res) => {
//   const clients = await SystemAdmin.find({
//     role: 'client',
//   });

//   res.send(clients);
// });
// app.post('/get-user', async (req, res) => {
//   const clients = await SystemAdmin.findOne({
//     _id: req.body.id,
//   });

//   res.send(clients);
// });
// app.post('/sign-in', async (req, res) => {
//   const user = await SystemAdmin.findOne({
//     email: req.body.email,
//   });

//   if (!user) {
//     return res
//       .status(400)
//       .send('user name or password not correct');
//   }

//   const validPassword = await bcrypt.compare(
//     req.body.password,
//     user.password
//   );
//   if (validPassword) {
//     const token = jwt.sign(
//       {
//         id: user._id.toString(),
//         role: user.role,
//       },
//       process.env.JWT_SECRET
//     );
//     const resp = {
//       token: token,
//       role: user.role,
//       id: user._id,
//       userName: user.userName,
//     };
//     res.send(resp);
//   } else {
//     res
//       .status(500)
//       .send('user name or password not correct');
//   }
// });

// app.post('/get-docs', async (req, res) => {
//   const user = await SystemAdmin.findOne({
//     _id: req.body.id,
//   });

//   res.send(user.documents);
// });
// app.post(
//   '/submit-doc',
//   upload.single('doc'),
//   async (req, res) => {
//     if (!req.file) {
//       return res
//         .status(400)
//         .send('No file please Upload file');
//     }
//     let user = await SystemAdmin.findOne({
//       _id: req.body.id,
//     });

//     let docs = await SystemAdmin.updateOne(
//       {
//         _id: req.body.id,
//       },
//       {
//         $push: {
//           documents: {
//             doc: req.file.filename,
//             workDesierd: req.body.workDesierd,
//             docName: req.body.docName,
//             userName: req.body.userName,
//             pages: `document size = ${req.body.pages} pages`,
//           },
//         },
//       }
//     );

//     var mailOptions = {
//       from: 'nodemailer.henok@gmail.com',
//       to: 'z.w.henok@gmail.com',
//       subject: `user ${user.userName} subbmitted a document`,
//       text: `${user.userName} just subbmitted  ${req.body.pages} pages of document `,
//     };

//     transporter.sendMail(
//       mailOptions,
//       function (error, info) {
//         if (error) {
//           console.log(error);
//         } else {
//           console.log(
//             'Email sent: ' + info.response
//           );
//         }
//       }
//     );

//     res.send(docs);
//   }
// );

// app.post('/get-docs', async (req, res) => {
//   const result = await PortalDocs.findOne({
//     _id: req.body.id,
//   });

//   res.send(result.documents);
// });

// app.post(
//   '/change-status',
//   // admin,
//   async (req, res) => {
//     console.log(
//       req.body.vid_id,
//       'and',
//       req.body.user_id
//     );
//     let user = await SystemAdmin.findOne({
//       _id: req.body.user_id,
//     });

//     let oldStatus = await SystemAdmin.updateOne(
//       {
//         _id: req.body.user_id,
//         'documents._id': req.body.vid_id,
//       },
//       {
//         $set: {
//           'documents.$.status': req.body.status,
//         },
//       }
//     );
//     var mailOptions = {
//       from: 'nodemailer.henok@gmail.com',
//       to: user.email,
//       subject: `Document status update `,
//       text: `dear ${user.userName} your document  has progressed to status of ${req.body.status} `,
//     };

//     transporter.sendMail(
//       mailOptions,
//       function (error, info) {
//         if (error) {
//           console.log(error);
//         } else {
//           console.log(
//             'Email sent: ' + info.response
//           );
//         }
//       }
//     );
//   }
// );

module.exports = app;
