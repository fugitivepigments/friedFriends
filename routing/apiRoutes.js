// API Routes
// =============================================================
var path = require('path');
var body = require('body-parser');

module.exports = function(app) {
  //Creates newFriend objects
  app.post("../app/data/friends.js", function(req, res) {
    var newFriend = req.body;
    console.log(newFriend);
    allFriends.push(newFriend);
    res.json(newFriend);
  });
}
