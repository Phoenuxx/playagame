connection = require('./connection');


var orm = {
    selectAll: function(tableInput, cb) {
        var query = "SELECT * FROM " + tableInput + ";";
        connection.query(query, function(err, res) {
            if (err) {
                throw err;
                }
                cb(result);
        });
        console.log(tableInput);
    },
    insertOne: function() {
        var query = "INSERT INTO game VALUES" + req.body ;
        connection.query(query, function(err, res) {
            res.json(res);
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