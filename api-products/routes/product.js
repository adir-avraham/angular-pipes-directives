//expoeres withe express
const express = require("express");
const router = express.Router();
const products = require("./../models/Product");
const verifyToken = require('../auth/verifyToken');


const jwt = require("jsonwebtoken");


router.use('/', (req, res, next) =>{
    console.log(req.headers)
    try {
        const { authorization } = req.headers;
        if (!authorization) return res.json({message: "Verification failed", status: false});
        jwt.verify(authorization, "abcd", (err, decoded) =>{
            if (err) return res.json({message: "Verification failed", status: false});
            req.decoded = decoded;
            next()
        });
    } catch {
        res.json({ error: "error from verification", status: false })
    }
  });

  
router.get("/", (req, res, next)=> {
    
    res.send(products);

})

router.get("/getProduct/:id", (req, res, next) => {
    var response = products.filter((item) => {
        return item.productId == req.params.id
    })
    res.send(response[0]);
})


router.post("/product", (req, res, next) => {
    let product;
 
    if (req.body) {
        product = req.body;
        product.productId = Math.floor(Math.random() * 1000) + 1
        products.push(product);
        res.send(product);
    } else {
        res.send("Error")
    }



})

//async

router.delete("/product/:id", (req, res, next) => {
    let product;

    for (var index = 0; index < products.length; index++) {
        if (products[index].productId == req.params.id) {
            products.splice(index, 1)
            res.send({ _index: index, result: true });
            return;
        }
    }
    res.send({ _index: -1, result: false });
})


module.exports = router;