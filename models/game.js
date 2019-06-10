var orm = require('../config/orm');

var game = {
    selectAll: function (cb) {
        // pass into the orm.functionName, the Database table name, and then a function
        orm.selectAll("game", function (res) {
            cb(res);
        });
    },
    insertOne: function (columns, values, cb) {
        // pass into the orm.functionName, the Database table name, and then a function
        orm.insertOne("game", columns, values, function (res) {
            cb(res);
        });
    },
    updateOne: function (column, condition, cb) {
        // pass into the orm.functionName, the Database table name, and then a function
        orm.updateOne("game", column, condition, function (res) {
            cb(res);
            console.log("model column: vv");
            console.log(column);
            console.log("model condition: vv");
            console.log(condition);
            
        });
    }
}

//Export for controller's use
module.exports = game;