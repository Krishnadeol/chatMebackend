const mongoose = require("mongoose");
const { Schema } = mongoose;
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    min: 3,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
    min: 5,
  },

  isAvatarSet: {
    type: Boolean,
    dafault: false,
  },

  avatarImage: {
    type: String,
    default: "",
  },

  date: {
    type: Date,
    default: Date.now,
  },
});
// for reference of foreign key .
const User = mongoose.model("user", UserSchema);
module.exports = User;
