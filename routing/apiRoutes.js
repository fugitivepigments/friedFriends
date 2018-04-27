// API Routes
// =============================================================
var friendData = require('../app/data/friends.js');
var path = require('path');
var body = require('body-parser');

module.exports = function(app) {
  //get request to display json of all possible friends
  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });

  //Creates newFriend objects
  app.post("/api/friends", function(req, res) {
    console.log(req.body);
    friendData.push(req.body);
    res.json(true);
  });
}
