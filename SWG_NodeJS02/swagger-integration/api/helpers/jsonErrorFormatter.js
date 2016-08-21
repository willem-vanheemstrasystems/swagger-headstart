var util = require('util');
var _ = require('lodash');
 
module.exports = function(err, req, res, next) {
  if(util.isError(err)) {
	Object.defineProperty(err, 'message', { enumerable: true }); // include message property in response
    res.json(err);
  } else {
	// odd cases - in case we get here in non-error handler conditions
    if(_.isFunction(next)) {
      next();  	
    } else if (_.isFunction(res)) {
      res();
    }
  }
};