var express = require('express');

/* GET home page. */

router.get('/',function (req,res) {
    res.render("register");
});

module.exports = router;
