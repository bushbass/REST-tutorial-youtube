var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const User = require("../models/Users");

/* GET users listing. */
router.get("/", (req, res, next) => {
  User.find({}, (err, data) => {
    if (err) return console.log(err);
    res.json(data);
  });
});

// POST add a new user
router.post("/", (req, res) => {
  User.create(
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName
    },
    (err, data) => {
      if (err) return console.log(err);
      res.json(data);
    }
  );
});

module.exports = router;
