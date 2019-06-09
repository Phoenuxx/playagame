var orm = require('../config/orm');

var game = {
    selectAll: function (cb) {
        // pass into the orm.functionName, the Database table name, and then a function
        orm.selectAll("game", function (res) {
            cb(res);
        });
    },
    insertOne: function (game_name, played, cb) {
        // pass into the orm.functionName, the Database table name, and then a function
        orm.InsertOne("game", game_name, played, function (res) {
            cb(res);
        });
    },
    updateOne: function (someting, somethingElse, cb) {
        // pass into the orm.functionName, the Database table name, and then a function
        orm.updateOne("game", something, somethingElse, function (res) {
            cb(res);
        });
    }
}

//Export for controller's use
module.exports = game;