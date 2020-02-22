const express = require('express');
router = express.Router();
const Task = require('../models/task');
 


router.post("/", async (req, res) => {
    const { developer_id, task, createdAt, done } = req.body;
    console.log(req.body)
    
    t = new Task({
      developer: developer_id,
      task: task
    });
  
    try {
      const savedTask = await t.save();
      res.json({savedTask: savedTask, status: true});
    } catch (message) {
      res.json({ error: message, status: false });
    }
  });


module.exports = router;