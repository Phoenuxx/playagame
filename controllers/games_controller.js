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
    var condition = "id = " + req.params.id;
    
    game.updateOne({
        played: req.body.played
    }, condition, function(res) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          } else {
            res.status(200).end();
          }
    })
});

// Export routes for server.js to use
module.exports = router;
