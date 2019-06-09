connection = require('./connection');


var orm = {
    selectAll: function(table, cb) {
        var query = "SELECT * FROM " + table + ";";
        connection.query(query, function(err, res) {
            if (err) {
                throw err;
                };
            cb(res);
        });
    },
    insertOne: function(table, columns, values, cb) {
        var query = "INSERT INTO " + table + "(" + columns + ") VALUES" + "(" + values + ");";
        console.log(query);
        console.log(columns);
        console.log(values);
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