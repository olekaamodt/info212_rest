'use strict';


var mongoose = require('mongoose'),
  Address = mongoose.model('AddressData');

exports.list_all_addresses = function(req, res) {
  Address.find({}, function(err, address) {
    if (err)
      res.send(err);
    res.json(address);
  });
};




exports.create_a_address = function(req, res) {
  var new_address = new Address(req.body);
  console.log(req)
  new_address.save(function(err, address) {
    if (err)
      res.send(err);
    res.json(address);
  });
};


exports.read_a_address = function(req, res) {
  Address.findById(req.params.addressId, function(err, address) {
    if (err)
      res.send(err);
    res.json(address);
  });
};


exports.update_a_address = function(req, res) {
  Address.findOneAndUpdate({_id: req.params.addressId}, req.body, {new: true}, function(err, address) {
    if (err)
      res.send(err);
    res.json(address);
  });
};


exports.delete_a_address = function(req, res) {


  Address.remove({
    _id: req.params.addressId
  }, function(err, address) {
    if (err)
      res.send(err);
    res.json({ message: 'address successfully deleted' });
  });
};