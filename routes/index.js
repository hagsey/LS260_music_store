var path = require('path');
var fs = require('fs');
var file_path = path.resolve(path.dirname(__dirname), "data/albums.json");
var Albums = require(path.dirname(__dirname) + "/routes/albums_node");


module.exports = function(router) {
  router.get('/', function(req, res, next) {
    res.render('index', {
      albums: Albums.get()
    });
  });
};

