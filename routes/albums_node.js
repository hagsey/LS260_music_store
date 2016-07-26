var path = require('path');
var fs = require('fs');
var file_path = path.resolve(path.dirname(__dirname), "data/albums.json");


function getAlbums() {
  return JSON.parse(fs.readFileSync(file_path, "utf-8")).data;
}

function nextID() {
  return JSON.parse(fs.readFileSync(file_path, "utf-8")).last_id + 1;
}

function writeAlbums(data) {
  fs.writeFileSync(file_path, JSON.stringify(data), "utf-8");
}

var Albums = {
  get: function() {
    getAlbums();
  },
  set: function() {
    nextID();
    writeAlbums();
  },
  getLastID: function() {
    return JSON.parse(fs.readFileSync(file_path, "utf-8")).last_id;
  }
};

module.exports = Albums;