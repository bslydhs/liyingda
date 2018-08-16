var mongodb = require('./db');
var result = require('./result');

function Pro(pro) {

}
module.exports = Pro;

Pro.find = function (callback) {
    mongodb.open(function (err, db) {
        if(err) return callback(result({err: err}));
        db.collection('pro', function (err, collection) {
            if(err){
                mongodb.close();
                return callback(result({err: err}))
            }
            collection.find().sort({priority: 1}).toArray(function (err, proInfo) {
                mongodb.close();
                return callback(result({
                    err: err,
                    info: proInfo,
                }));
            });
        })
    })
};