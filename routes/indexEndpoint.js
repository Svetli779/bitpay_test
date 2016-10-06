var express = require("express");
var router = express.Router();

router.get('/currentUser',function(req,res) {
	res.send(req.session.user);
});

module.exports = router;