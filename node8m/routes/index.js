var express = require('express');
var router = express.Router();
var test = require('../models/firstdb.js');
/* GET home page. */
router.get('/', function(req, res, next) {
    test.findAll(function (err, result) {
        console.log(result);
    });

  res.render('index', { title: 'Express' });
});


module.exports = router;
