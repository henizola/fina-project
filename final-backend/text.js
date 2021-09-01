const express = require('express');

const app = express();

const Joi = require('joi');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('hello world');
});
app.get('/api/sign-in', (req, res) => {
  res.send(req.body);
});

app.post('/api/courses', (req, res) => {
  const course = {
    name: req.body.name,
    id: courses.length + 1,
  };

  const { error } = validator(req.body);

  if (error) {
    res.status(400).send(error);
  } else {
    courses.push(course);
    res.send(course);
  }
});

// app.get("/api/courses/:id", (req, res) => {});
const port = process.env.PORT || 3000;
app.listen(4000, () =>
  console.log(`listening to port ${port}`)
);

app.put('/api/courses/:id', (req, res) => {
  const index = courses.findIndex(
    (c) => c.id === parseInt(req.params.id)
  );

  const { error } = validator(req.body);
  if (error) {
    res.status(400).send(error);
  } else {
    courses[index].name = req.body.name;
    res.send(courses);
  }
});

app.delete('/api/courses/:id', (req, res) => {
  const found = courses.find(
    (c) => c.id === parseInt(req.params.id)
  );

  if (!found) {
    res
      .status(404)
      .send('no course found with the given id');
  } else {
    const index = courses.findIndex(
      (c) => c.id === parseInt(req.params.id)
    );
    courses.splice(index, 1);
    res.send(courses);
  }
});

const validator = (courseName) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
  });

  return schema.validate(courseName);
};
