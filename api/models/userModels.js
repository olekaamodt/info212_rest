'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  image: {
    type: String,
  },
  gender: {
    type:String,
  },
  age: {
    type:Number,
  },
  category: {
    type: String,
  },
  interests: {
    type:Array
  },
  description:{
      type:String,
  },
  friends:{
      type:Array,
  }
});

module.exports = mongoose.model('UserData', UserSchema);