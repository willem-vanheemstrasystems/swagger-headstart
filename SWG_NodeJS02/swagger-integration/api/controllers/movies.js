'use strict';

var Movie = require('../models/movie');
var _ = require('lodash');

module.exports = {
  index: function(req, res) {
	Movie.find(_.omit({
	  genre: req.swagger.params.genre.value
	}, function(value) {	
	  return _.isNull(value) || _.isUndefined(value);
	}), function(err, movies) {
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
  },
  
  show: function(req, res) {
	Movie.findById(req.swagger.params.movieId.value, function(err, movie) {
	  if(err) {
		res.status(500).json(err).end();
		return;
	  }
	  res.json({
		movie: movie
	  }).end();
	})   
  },
  
  update: function(req, res) {
	Movie.findById(req.swagger.params.movieId.value, function(err, movie) {
      if(err) {
    	res.status(500).json(err).end();
    	return;
      }
      
      _.assign(movie, req.swagger.params.movie.value.movie);
      
      movie.save(function(err) {
    	if(err) {
    	  req.status(500).json(err).end();
    	  return;
    	}
    	res.json({
    	  movie: movie
    	}).end();
      });
	});
  },
  
  destroy: function(req, res) {
	Movie.findByIdAndRemove(req.swagger.params.movieId.value, function(err, movie) {
	  if(err) {
		res.status(500).json(err).end();
		return;
	  }
	  res.json({
	    movie: movie
	  }).end();
	})
  }
}