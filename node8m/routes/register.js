var express = require('express');
var router = express.Router();
var user = require('../models/user');
var pro = require('../models/pro');

/* GET home page. */

router.get('/',function (req,res) {
    res.render("register");
});

router.post('/',function (req, res) {
    if(req.body != null){
        user.register({
            username: req.body.username,
            phone: req.body.phone,
            password: req.body.password,
            password1: req.body.password1
        },function (result) {
            if(result != null && result != undefined){
                if(result.info != null && result.info != undefined && result.isSuccess == 1){
                    // pro.find(function (info) {
                        res.redirect('/homepage');
                    // });
                }else{
                    if(result.error != null ){
                        req.flash("error",result.error);
                    }else {
                        req.flash("error","注册用户失败，稍后请重试");
                    }
                    res.redirect('/register');
                }
            }else {
                req.flash("error","用户注册失败，稍后请重试!");
                res.redirect('/register');
            }
        })
    }
});


module.exports = router;
