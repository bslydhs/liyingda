var mongodb = require('./db');
var result = require('./result');

function User(user) {
    this.id = user.id;
    this.username = user.username;
    this.phone = user.phone;
    this.password = user.password;
}

module.exports = User;

User.register = function (user, callback) {
    mongodb.open(function (err, db) {
        if(err) return callback(result({
            err: err,
            isSuccess: 0
        }));
        db.collection('table',function (err, collection) {
            if(err){
                mongodb.close();
                return callback(result({
                    err:err,
                    isSuccess: 0
                }));
            }
            collection.findOne({
                username: user.username
            },function (err, userResult) {
                if(userResult != null){
                    mongodb.close();
                    return callback(result({
                        error: "注册用户已经存在",
                        isSuccess: 0
                    }))
                }
                collection.insertOne({
                    username: user.username,
                    phone: user.phone,
                    password: user.password
                },function (err, info) {
                    mongodb.close();
                    return callback(result({
                        err: err,
                        info: info,
                        isSuccess: err == null && info.insertedCount == 1 ? 1 : 0
                    }));
                });
            });
        })
    })
};