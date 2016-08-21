'use strict';

module.exports = {
  index: function(req, res) {
    res.json[{
      movies: []
    }];
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