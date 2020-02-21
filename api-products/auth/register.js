const express = require('express');
router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs'); 

const salt = "$2a$10$qCXcfmmtBfILBCp7Ly0EHe";

router.post("/", async (req, res) => {
    const { email, password } = req.body;
    
    const user = new User({
      email: email,
      password: bcrypt.hashSync(password, salt)
    });
  
    try {
      const savedUser = await user.save();
      res.json({savedUser: savedUser, status: true});
    } catch (message) {
      res.json({ error: message, status: false });
    }
  });


module.exports = router;