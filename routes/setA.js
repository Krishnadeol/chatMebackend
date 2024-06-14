// Backend code
const express = require("express");
const User = require("../models/User");
const router = express.Router();

router.post("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const im = req.body.image;

    const userData = await User.findByIdAndUpdate(id, {
      isAvatarSet: true,
      avatarImage: im,
    });

    return res.json({
      isSet: userData.isAvatarSet,
      image: userData.avatarImage,
    });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
