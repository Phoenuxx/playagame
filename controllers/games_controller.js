var express = require('express');
var game = require('../models/game.JS');


var router = express.Router();

router.get("/", function(req,res){
    game.selectAll(function(data) {
        var hbObject = {
            game: data
        }
        // console.log(hbObject);
        res.render("index", hbObject);
    });
});

router.post("/api/games", function(req, res) {
    console.log("+_________+");
    console.log(req.body.game_name);
    game.insertOne([
        "game_name", "played"
    ], [
        "'" + req.body.game_name + "'", req.body.played
    ], function(result){
        res.json({ id: result.insertId });
    })
})

router.put("api/games/:id", function(req,res) {
    var value = "id = " + req.params.id;
    
})

// Export routes for server.js to use
module.exports = router;
