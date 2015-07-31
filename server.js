var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');

var server = express();

// Middleware
server.use(bodyParser.json());
server.use(cors());

// local mondodb database
var db_url = 'mongodb://localhost:27017/my-stay';

mongoose.connect(db_url, function(err, conn) {
    if(err) {
        console.log('Error while connecting to Mongoose : ' + err);
    }
});

server.get('/', function(req, res){
    res.status(200).send("Server Working Fine :D");
});

var port = Number(process.env.PORT || 8000)

server.listen(port);
console.log('Server started ...');
