var express = require('express');
var router = express.Router();
var Testdemo = require('../models/details.js');

/* GET users listing. */
router.get('/:word',function(req,res,next){
    var i = decodeURI(decodeURI(req.params.word));
    Testdemo.findAll(function (err, testdemo) {
        console.log(testdemo);
        var words = [];
        for (var o of testdemo) {
            if(o.type == "1" && o.name == i){
                    words.push(o);
            }
        }
        console.log(words);
        res.render('details',{words: words});
    })
});

module.exports = router;