var express = require('express');
var router = express.Router();

var raspicam = require('raspicam');

// Create a new raspicam instance
var camera = new raspicam();

camera.start()

var cameraOptions = {
    mode        : "video",
    output      : 'images/camera.h264'
};
ga
var camera = new require("raspicam")(cameraOptions);
camera.start();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
  res.sendFile(__dirname + '/images/camera.h264');
});

module.exports = router;
