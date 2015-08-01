var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var Hotel = require('./models/hotel');

var server = express();

var api_hits = 0;

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
    api_hits += 1;
    res.status(200).send("Server Working Fine :D");
});

server.get('/hotels/names', function(req, res) {
    api_hits += 1;
    Hotel.find().select('name').exec(function(err, hotels) {
        if(hotels) {
            res.send(hotels);
        } else {
            res.status(500).send("No hotels in the database");
        }
    })
});

server.get('/hotels/:id', function(req, res) {
    api_hits += 1;
    var hotel_id = req.params.id;

    Hotel.findOne({_id: hotel_id}).exec(function(err, hotel) {
        if(hotel) {
            res.send(hotel);
        } else {
            res.status(500).send("Something went wrong");
        }
    })
});

server.put('/hotels/:id', function(req, res) {
    api_hits += 1;
    var hotel_id = req.params.id;

    Hotel.findOne({_id: hotel_id}).exec(function(err, hotel) {
        if(hotel) {
            hotel.likes = hotel.likes + 1;

            Hotel.update({_id: req.body._id}, hotel, {upsert: true}, function(err, updated) {
                if(!err) {
                    console.log("Updated Successfully!");
                    res.send(updated)
                } else {
                    console.log(err);
                }
            });
            // hotel.save();
        } else {
            res.status(500).send("Something went wrong");
        }
    })
});

server.get('/apihits', function(req, res) {
    api_hits += 1;
    res.sendStatus("Hits : " + api_hits);
});

var port = Number(process.env.PORT || 8000)

server.listen(port);
console.log('Server started ...');
