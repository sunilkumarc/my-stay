var mongoose = require('mongoose');
var Schema = mongoose.Schema;

 var hotelSchema = new Schema({
     name: String,
     location: String,
     rating: Number,
     checkIn: {
        from: String,
        to: String
     },
     wifi: Boolean,
     cash: Boolean,
     creditCard: Boolean,
     likes: Number,
     description: String,
     deluxeRoom: Number,
     executiveRoom: Number,
     conservatoryRoom: Number,
     juniorSuiteSuiteDreams: Number,
     distanceFromAirport: Number,
     barTimings: {
         from: String,
         to: String
     }
     airConditioner: Boolean,
     gym: Boolean,
     pool: Boolean
 });

module.exports = mongoose.model('hotel', hotelSchema);
