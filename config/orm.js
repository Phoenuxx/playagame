connection = require('./connection');


var orm = {
    selectAll: function() {
        console.log('select all');
    },
    insertOne: function() {
        console.log('insert uno');
    },
    updateOne: function() {
        console.log("update ichi");
    }
}

module.exports = orm;