var express = require('express');
var router = express.Router();
var firstdb = require('../models/firstdb.js');
// router.get('/',function(req,res){
//     res.render('login',{login:"my login"});
// });
module.exports  = router;
router.get('/',function(req,res,next){
        res.render('login',{});
});
router.post('/',function(req,res){
    firstdb.findOne({
        "username":req.body.username,
        "password":req.body.password
    },
        function (err,table) {
            if(table == undefined){
                //登陆成功
                req.flash('error','用户名或者密码不正确');
                return res.redirect('/login');
            } else{
                req.flash('info','登陆成功');
                return res.redirect('/homePage');
            }
        });
});


