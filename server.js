// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./routing/apiRoutes.js')(app);
require('./routing/htmlRoutes.js')(app);

// Start server listener
// =============================================================
app.listen(PORT, function() {
  console.log('Listening in on PORT ' + PORT);
});
