//引入数据库
var mongodb = require('./db');
//根据数据库的字段写匿名函数
function Testdemo(images) {
    this.name = images.name;
    this.type = images.type;
    this.img0 = images.img0;
    this.img1 = images.img1;
    this.img2 = images.img2;
    this.img3 = images.img3;
    this.img4 = images.img4;
    this.img5 = images.img5;
    this.img6 = images.img6;
    this.img7 = images.img7;
    this.p0 = images.p0;
    this.p1 = images.p1;
    this.p2 = images.p2;
    this.p3 = images.p3;
    this.p4 = images.p4;
    this.p5 = images.p5;
    this.p6 = images.p6;
    this.p7 = images.p7;
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