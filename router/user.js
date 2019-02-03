const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');

router.post('/register', (req, res) => {
    console.log(req.body);
    res.send(req.body);
})

module.exports = router;