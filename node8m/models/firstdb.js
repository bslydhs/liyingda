var mongodb = require('./db');
function Test(test){
    this.id = test.id;
    this.username = test.username;
    this.phone = test.phone;
    this.password = test.password;
}
module.exports = Test;

Test.findOne = function(test,callback){
    mongodb.open(function(err,db){
        if(err) callback(err);
        db.collection("table",function(err,connection){
            if(err){
                mongodb.close();
                return callback(err);
            }
            connection.findOne({
                username:test.username,
                password:test.password
            },function(err,table){
                mongodb.close();

                if(table){
                    callback(null,table);
                    return;
                }
                return callback(err)
            });
        })
    })
};