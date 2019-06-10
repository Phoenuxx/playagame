connection = require('./connection');

function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    }
}
    
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
     
        connection.query(query, function(err, res) {
            if (err) {
                throw err;
              };
            cb(res);
        });
        console.log('insert uno');
    },
    updateOne: function(table, column, condition, cb) {
        console.log("orm query, table, column, condition");
        console.log(query);
        console.log(table);
        console.log(column);
        console.log(condition);
        var query = "UPDATE " + table + "SET " + column + "WHERE " + condition;
        onnection.query(query, function(err, result) {
            if (err) {
              throw err;
            }
      
            cb(result);
          });
        console.log("update ichi");
    }
}
//Export for models use
module.exports = orm;