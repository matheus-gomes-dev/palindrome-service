var express = require('express');
var router = express.Router();
var path = require('path');

//works only when there's no public/index.html
router.get('/', function(req, res, next) {
  	res.send("Home");
});


router.get('/test', function(req, res, next) {
  	res.send("Test");
});



module.exports = router;
