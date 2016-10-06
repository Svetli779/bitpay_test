var express = require("express");
var router = express.Router();

router.get("/", function(req,res) {
  req.session.user = undefined;
      
  req.session.save(function(){
    return res.send();
  });
});

module.exports = router;