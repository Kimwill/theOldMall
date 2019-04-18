const express = require('express');
const router = express.Router();

router.post('/uploadCb', (req, res) => {
	console.log('url ----  ',req.body.imageUrl)
	res.send('callback')
	// res.json({"key": req.key})
})

module.exports = router;