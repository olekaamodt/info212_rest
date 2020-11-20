'use strict';

var crawler = require("../crawler/crawler")
const cheerio = require('cheerio');

function returnData(data) {
  
  crawler(data.image).then((res) => {
    const html = res.data;
    const $ = cheerio.load(html);
    const imageUrl = "hybel.no" +  $('.listing-detail').children()[0].children[0].next.attribs.href;
    console.log(imageUrl)
    var address = {
      address: data.address ,
      city: data.city,
      description: data.description,
      image: imageUrl,
      coordinates: data.coordinates
    }
    
    var new_address = new Address(address);
    new_address.save(function(err, address) {
      if (err)
        res.send(err);
      //res.json(address);
    })

  });
  
}

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

    var address = returnData(req.body)
    console.log(address)
    
  
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