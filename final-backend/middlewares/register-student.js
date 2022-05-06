var express = require("express");

var registerStudent = function (req, res, next) {
  console.log("LOGGED");
  next();
};

module.exports = registerStudent;
