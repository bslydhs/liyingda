var settings = require('../settings');
var Db = require('mongodb').Db;
var Service = require('mongodb').Server;
module.exports = new Db(settings.db, new Service(settings.host, "27017", {}));//数据库名称、id、端口
