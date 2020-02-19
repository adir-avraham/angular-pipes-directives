const bcrypt = require('bcryptjs'); 
const express = require('express');
router = express.Router();
const User = require('../models/User');

//console.log(email, bcrypt.hashSync(password))


router.post('/', async (req, res) => {
    const { email, password } = req.body;
    //console.log(email, password)
    try{
        const foundUser = await User.findOne({email: email, password: password});
        //console.log(foundUser);
        if (!foundUser) return res.json({message: "Incorrect password/username", status: false});
        //const jwtToken = await getJwt(...foundUser);
        //console.log(jwtToken)
        res.json({message: "User logged in", user: foundUser, status: true});  
    } catch {
        res.json({error: "error from login", status: false});

    }

    
})


module.exports = router;


function getJwt(p) {
    return new Promise((resolve, reject) => {
        jwt.sign(p, { expiresIn: '3h' }, (err, token) => {
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