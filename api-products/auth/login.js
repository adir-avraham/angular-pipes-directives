const bcrypt = require('bcryptjs'); 
const express = require('express');
router = express.Router();
const User = require('../models/User');

//console.log(email, bcrypt.hashSync(password))
const salt = "$2a$10$qCXcfmmtBfILBCp7Ly0EHe";
var jwt = require('jsonwebtoken');

router.post('/', async (req, res) => {
    const { email, password } = req.body;
    
    try{
        const foundUser = await User.findOne({email: email, password: bcrypt.hashSync(password, salt)});
        if (!foundUser) return res.json({message: "Incorrect password/username", status: false});
        const jwtToken = await getJwt({...foundUser});
        res.json({message: "User logged in", user: foundUser, token: jwtToken, status: true});  
    } catch (err){
        res.json({message: err.message, status: false});

    }

    
})


module.exports = router;


function getJwt(p) {
    console.log("p=>", p)
    return new Promise((resolve, reject) => {
        jwt.sign(p, "abcd" ,{ expiresIn: '3h' }, (err, token) => {
            if (err) reject("error");
            resolve(token);
        })
    });
};


// function getJwt(p) {
//     return new Promise((resolve, reject) => {
//         jwt.sign(p, process.env.SECRET, { expiresIn: '3h' }, (err, token) => {
//             if (err) reject("error");
//             resolve(token);
//         })
//     });
// };