var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */

router.get('/', function(req, res) {
  res.send(path.join(__dirname) + '../view/index.html');
  //res.sendFile(path.join(__dirname) + '../view/index.html');
});

module.exports = router;
