var express = require('express');
var router = express.Router();
var User = require('../models/user');
var bodyParser = require('body-parser');
var passwordHash = require('password-hash');
var session = require('express-session');


router.post('/',function(req,res){
  var username = req.body.username;
  var password = req.body.password;

  User.findOne({'username':username}).exec(function(err,user){
    if(!user){
      return res.status(401).send("invalide credentials 1");
    }

    if(passwordHash.verify(password, user.password)){
      req.session.user = user.username;
      
      req.session.save(function(){
        return res.send();
      });
    }
    else{
      return res.status(401).send("invalide credentials 2");
    }

  });


});

module.exports = router;