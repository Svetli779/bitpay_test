var express = require("express");
var router = express.Router();
var User = require('../models/user');
var passwordHash = require('password-hash');

router.all('*',function(req,res,next){
	if(req.session.user){
		User.findOne({'username':req.session.user}).exec(function(err,user) {
			if(!user){
				return res.status(401).send("invalide credentials!");
			}
			req.user = user;
			return next();
		});
	} else{
		return res.status(401).send("invalide credentials!");
	}
});

router.get("/", function(req,res){
	res.send(req.user);
})

router.post('/',function(req,res){

	var username = req.body.username;
	var password = req.body.password;
	var hashedPassword = passwordHash.generate(password);

	req.user.username = username;
	req.user.password = hashedPassword;


	req.user.save(function(err,savedUser){
		if(err){
			return res.status(500).send();
		}
		return res.status(200).send();
	});

});

module.exports = router;