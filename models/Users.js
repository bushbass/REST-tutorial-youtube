const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const User = new Schema({
  firstName: String,
  lastName: String
});

module.exports = mongoose.model("Users", User);
