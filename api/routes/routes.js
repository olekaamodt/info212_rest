'use strict';
module.exports = function(app) {
  var AddressList = require('../controllers/AddressController');

  // AddressList Routes
  app.route('/Addresses')
    .get(AddressList.list_all_addresses)
    .post(AddressList.create_a_address);


  app.route('/tasks/:taskId')
    .get(AddressList.read_a_address)
    .put(AddressList.update_a_address)
    .delete(AddressList.delete_a_address);
};