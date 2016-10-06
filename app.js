var express = require('express');
var app = express();
var mongoose = require('mongoose');
var multer = require('multer');
var upload = multer({dest:'public/uploads'})
var session = require('express-session');
var bodyParser = require('body-parser');
var session = require('express-session');
var port = 5000;

//mongoose.connect('mongodb://localhost/users');

app.use(express.static('./public'));
app.use(bodyParser.json());

app.use(session({ 
  secret: 'mySession',
  saveUninitialized: false, 
  resave: false,
  cookie: { maxAge: 10*360000 }
}));

app.use(function(req,res,next){
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "origin, content-type, accept");
	next()
});

app.get('/favicon.ico', function(req, res) {
    res.send(200);
});

var indexEndpoint = require("./routes/indexEndpoint");
app.use("/", indexEndpoint);

var registerEndpoint = require("./routes/registerEndpoint");
app.use("/registration",registerEndpoint);

var loginEndpoint = require("./routes/loginEndpoint");
app.use("/login",loginEndpoint);

var logoutEndpoint = require("./routes/logoutEndpoint");
app.use("/logout",logoutEndpoint);

var accountEndpoint = require("./routes/accountEndpoint");
app.use("/account",accountEndpoint);

var productEndpoint = require("./routes/productEndpoint");
app.use("/product",productEndpoint);

var uploadEndpoint = require("./routes/uploadEndpoint");
app.use("/upload",uploadEndpoint);



app.listen(process.env.PORT || port);
console.log('server working');