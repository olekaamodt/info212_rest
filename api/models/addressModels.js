'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var AddressSchema = new Schema({
  address: {
    type: String,
    
  },
  city: {
    type: String,
  },
  description: {
    type: String,
  },
 coordinates: {
    latitude:{
        type:Number,

    },
    longitude:{
        type:Number
    }
    
  }
});

module.exports = mongoose.model('AddressData', AddressSchema);