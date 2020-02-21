const express = require('express');
router = express.Router();
const Task = require('../models/task');
 


router.post("/", async (req, res) => {
    const { name, task } = req.body;
    
    const Task = new Task({
      developer: name,
      task: task
    });
  
    try {
      const savedTask = await Task.save();
      res.json({savedTask: savedTask, status: true});
    } catch (message) {
      res.json({ error: message, status: false });
    }
  });


module.exports = router;