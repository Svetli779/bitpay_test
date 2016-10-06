var express = require('express');
var router = express.Router();
var User = require('../models/user');
var passwordHash = require('password-hash');

router.post('/',function(req,res){
  var username = req.body.username;
  var password = req.body.password;

  var newUser = new User();
  var hashedPassword = passwordHash.generate(password);

  newUser.username = username;
  newUser.password = hashedPassword;

  newUser.save(function(err,savedUser){
    if(err){
      return res.status(500).send();
    }
    return res.status(200).send();
  });


});

module.exports = router;