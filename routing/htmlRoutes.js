// HTML Routes
// =============================================================
var path = require('path');
var express = require('express');

module.exports = function() {
  var router = express.Router();
  //Displays homepage
  router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });

  router.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });

  return router;
};
  //any URL other than, send to homepage
//   router.use( function(req, res) {
//     res.sendFile(path.join(__dirname, "/../public/home.html"));
//   });
// }
