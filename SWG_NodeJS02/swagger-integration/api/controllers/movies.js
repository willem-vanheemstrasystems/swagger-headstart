'use strict';

var Movie = require('../models/movie');

module.exports = {
  index: function(req, res) {
	Movie.find({}, function(err, movies) {
	  if(err) {
		res.status(500).json(err).end();
		return;
	  }
	  res.json({
		movies: movies
	  }).end();
    });
  },
  
  create: function(req, res) {
	var movie = new Movie(req.swagger.params.movie.value.movie);
	movie.save(function(err) {
	  if(err) {
		res.status(500).json(err).end();
		return;
	  }
	  res.json({
		movie: movie
	  }).end();
	});
  }
}