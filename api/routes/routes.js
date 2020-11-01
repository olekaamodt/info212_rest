'use strict';
module.exports = function(app) {
  var AddressList = require('../controllers/AddressController');
  var UserList = require('../controllers/UserController');

  // AddressList Routes
  app.route('/Addresses')
    .get(AddressList.list_all_addresses)
    .post(AddressList.create_a_address);


  app.route('/address/:addressId')
    .get(AddressList.read_a_address)
    .put(AddressList.update_a_address)
    .delete(AddressList.delete_a_address);


  app.route("/Users")
    .get(UserList.list_all_users)
    .post(UserList.create_a_user);
    

  app.route('/user/:userId')
    .get(UserList.read_a_user)
    .put(UserList.update_a_user)
    .delete(UserList.delete_a_user);
};