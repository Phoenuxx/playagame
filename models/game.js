var orm = require('../config/orm');

var game = {
    selectAll: function (cb) {
        // pass into the orm.functionName, the Database table name, and then a function
        orm.selectAll("games", function (res) {
            cb(res);
        });
    },
    insertOne: function (someting, somethingElse, cb) {
        // pass into the orm.functionName, the Database table name, and then a function
        orm.InsertOne("games", something, somethingElse, function (res) {
            cb(res);
        });
    },
    updateOne: function (someting, somethingElse, cb) {
        // pass into the orm.functionName, the Database table name, and then a function
        orm.updateOne("games", something, somethingElse, function (res) {
            cb(res);
        });
    }
}

//Export for controller's use
module.exports = game;