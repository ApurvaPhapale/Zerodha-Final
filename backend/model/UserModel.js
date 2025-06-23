const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// 👇 Explicitly use 'users' collection
const UserModel = mongoose.model("user", userSchema, "users");

module.exports = { UserModel };
