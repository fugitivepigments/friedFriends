// API Routes
// =============================================================
var friendData = require('../app/data/friends');
var path = require('path');
var body = require('body-parser');
var express = require('express');

module.exports = function() {
  var router = express.Router();
  //get request to display json of all possible friends
  router.get('/api/friends', function(req, res) {
    res.json(friendData);
  });

  //Creates newFriend objects
  router.post('/api/friends', function(req, res) {
    console.log(req.body);
    friendData.push(req.body);
    return res.json(true);
    //logic for comparing arrays, returning % match
    // for (var i = 0; i < friendsArray.length; i++) {
    //   var percentEqual = 0;
    //   if (friendsArray[i].scores == req.body) {
    //     return
    //   }
    // }
  });

  return router;
};
