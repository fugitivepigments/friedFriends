// HTML Routes
// =============================================================
var path = require('path');

module.exports = function(app) {
  //Displays homepage
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
  // Displays survey page
  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
  });
};
