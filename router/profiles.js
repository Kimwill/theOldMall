const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const key = require('./../config/key');

router.get('/goods', (req, res) => {
    if(!req.headers.authorization) {
        res.status(401).send('未验证');
    } else {
        jwt.verify(req.headers.authorization, key.secretOrPrivateKey, (err, decoded) => {
            res.send(decoded);
        })
    }
})

module.exports = router;