const express = require('express');
router = express.Router();
const Developer = require('../models/developer');


router.get('/', async (req, res) => {
    
    try{
        const developers = await Developer.find();
        if (!developers) return res.json({message: "no developers found", status: false});
        res.json({developers: developers, status: true});  
    } catch (err){
        res.json({message: err.message, status: false});
    }
});


module.exports = router;
