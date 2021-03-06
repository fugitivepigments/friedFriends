// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var apiRoutes = require('./routing/apiRoutes');
var htmlRoutes = require('./routing/htmlRoutes');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(apiRoutes());
app.use(htmlRoutes());

// Start server listener
// =============================================================
app.listen(PORT, function() {
  console.log('Listening in on PORT ' + PORT);
});
