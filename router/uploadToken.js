const express = require('express');
const router = express.Router();
const qnconfig = require('./../config/qiniuToken.js')

router.get('/uploadToken', (req, res) => {
	res.status(200).send(qnconfig.uploadToken);
	// console.log(qnconfig.uploadToken);
})

module.exports = router;