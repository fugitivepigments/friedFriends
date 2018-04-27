// HTML Routes
// =============================================================
var path = require('path');

module.exports = function(app) {
  //Displays homepage
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });
  // Displays survey page
  app.get("/friends", function(req, res) {
    res.sendFile(path.join(__dirname, "/../app/data/friends.js"));
  });
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });
  //any URL other than, send to homepage
  app.use( function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });
}
