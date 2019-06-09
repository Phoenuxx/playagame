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
    game.create([
        "game_name", "played"
    ], [
        req.body.name, req.body.played
    ], function(result){
        res.json({ id: result.insertId });
    })
})

// Export routes for server.js to use
module.exports = router;