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
     distanceFromAirport: String,
     barTimings: {
         from: String,
         to: String
     },
     airConditioner: Boolean,
     gym: Boolean,
     pool: Boolean,
     imgLink: String,
     manualLink: String,
 });

module.exports = mongoose.model('hotel', hotelSchema);
