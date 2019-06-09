connection = require('./connection');


var orm = {
    selectAll: function(tableInput, cb) {
        var query = "SELECT * FROM " + tableInput + ";";
        connection.query(query, function(err, res) {
            if (err) {
                throw err;
                };
            cb(res);
        });
    },
    insertOne: function(tableInput, game_name, played, cb) {
        var query = "INSERT INTO " + tableInput + "(game_name, played) VALUES" + [game_name,played];
        connection.query(query, function(err, res) {
            if (err) {
                throw err;
              };
            cb(res);
        });
        console.log('insert uno');
    },
    updateOne: function() {
        var query = "SELECT * FROM game" ;
        connection.query(query, function(err, res) {
            res.json(res);
        });
        console.log("update ichi");
    }
}
//Export for models use
module.exports = orm;