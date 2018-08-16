//引入数据库
var mongodb = require('./db');
//根据数据库的字段写匿名函数
function Testdemo(images) {
    this.type = images.type;
    this.name = images.name;
    this.images = images.images;
    this.details = images.details;
    this.price = images.price;
}
//test是一个对象，将外面的参数传过来

//将Testdemo公开
module.exports = Testdemo;

Testdemo.findAll = function (callback) {
    mongodb.open(function (err, db) {
        if (err) return callback(err);
        db.collection('images',function (err, collection) {
            if (err) {mongodb.close(); return callback(err);}
            collection.find({}).toArray(function (err, testdemo) {
                mongodb.close();
                if(err) return callback(err);
                return callback(null, testdemo);
            })
        })
    })
};
Testdemo.findPage = function (skip,callback) {
    mongodb.open(function (err, db) {
        if (err) return callback(err);
        db.collection('images',function (err, collection) {
            if (err) {mongodb.close(); return callback(err);}
            collection.find({type : "1"}).skip(parseInt(skip)).limit(4).toArray(function (err, testdemo) {
                mongodb.close();
                return callback(err,testdemo);
            })
        })
    })
};



