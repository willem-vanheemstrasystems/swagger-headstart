'use strict';

var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();
var mongoose = require('mongoose');
module.exports = app; // for testing

var config = {
  appRoot: __dirname // required config
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);
  mongoose.connect('mongodb://localhost/movies-db');
  
  mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
  mongoose.connection.once('open', function() {
	// app.user(jsonErrorHandler);
	var port = process.env.PORT || 8081;  
	app.listen(port, function() {
      console.log('App is listening on port ' + port);
	});
  });
});
