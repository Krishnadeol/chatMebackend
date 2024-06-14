const express = require("express");
const User = require("../models/User");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const userIdToExclude = req.query.id; // not including the current user.
    const users = await User.find({ _id: { $ne: userIdToExclude } }).select([
      "email",
      "name",
      "avatarImage",
      "_id",
    ]);
    return res.json(users);
  } catch (error) {
    console.log("error", error.message);
    res.status(500).json({ error: error.message });
  }
});
module.exports = router;
