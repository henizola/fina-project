const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
dotenv.config({ path: './config.env' });

const app = express();

const systemAdmin = require('./route/system-admin');
const student = require('./route/student');

const attendance = require('./route/attendance');
const teachers = require('./route/teachers');
const exams = require('./route/exams');
const principal = require('./route/principal');
const broadcast = require('./route/broadcast');
const register = require('./route/register');

app.use(cors());
app.use(cookieParser());

mongoose
  .connect('mongodb://localhost/cambridge-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() =>
    console.log('Connected to MongoDb ...')
  )
  .catch((error) =>
    console.log(
      'could not connect to database' + error
    )
  );

app.use(express.static('docs'));

app.use(express.json());

app.use('/api', systemAdmin);
app.use('/api', student);
app.use('/api', attendance);
app.use('/api', teachers);
app.use('/api', exams);
app.use('/api', principal);
app.use('/api', broadcast);
app.use('/api', register);

const port = process.env.PORT || 9000;
app.listen(port, () =>
  console.log(`listening to port ${port}`)
);
