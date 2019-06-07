const mongoose = require('mongoose');
var Schema = mongoose.Schema;


var driverSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name field is required"]
  },
  rating: {
    type: Number
  },
  available: {
    type: Boolean,
    default: false
  }
})

var Driver = mongoose.model('driver', driverSchema);
module.exports = Driver;
