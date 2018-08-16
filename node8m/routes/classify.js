var express = require('express');//express是一个框架
var router = express.Router();//express提供的路由功能
var Testdemo = require('../models/classify.js');


/* GET home page. */
router.get('/', function(req, res, next) {
    Testdemo.findAll(function (err, testdemo) {
        var list = [];
        var destail = [];
        for (var i of testdemo) {
            if(i.type == "3"){
                list.push(i);
            }
            if (i.type == "4") {
                destail.push(i);
            }
        }
        res.render('classify',{list: list,destail: destail});
    });
});

module.exports = router;