var express = require('express');
var router = express.Router();
var path = require('path');
var palindrome = require('../modules/palindrome')


router.get('/', function(req, res, next) {
	if(palindrome(req.query.sentence))
  		res.status(200).send("Sentence is a palindrome!");
  	else
  		res.status(400).send("Sentence is not a palindrome!");
});



module.exports = router;
