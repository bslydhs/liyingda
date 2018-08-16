var express = require('express');//express是一个框架
var router = express.Router();//express提供的路由功能
var Testdemo = require('../models/homepagemongo.js');


/* GET home page. */
router.get('/', function(req, res, next) {
    Testdemo.findAll(function (err, testdemo) {
        var sellgood = [];
        var sellad = [];
        for (var i of testdemo) {
            if(i.type == "1"){
                sellgood.push(i);
            }
            if (i.type == "2") {
                sellad.push(i);
            }
        }
        res.render('homePage',{sellgood: sellgood,sellad: sellad});
    });
});

router.post('/',function(req,res){
    if(global.isFlag != 1){
        global.isFlag = 1;
        Testdemo.findPage(req.body.skip,function(err,result){
            if(err) return result.json(err);
            global.isFlag = 0;
            return res.json(result);
        });
    }else{
        return res.json(null);
    }
});
module.exports = router;