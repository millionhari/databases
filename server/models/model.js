var db = require('../db/database');
var http = require('http');
var fs = require('fs');



module.exports = {
  messages: {
    GET: function (req, res) {
      db.sqlGetFromTable('messages');
    }, // a function which produces all the messages
    POST: function (username, message) {
      db.sqlInsertMessage(username, message);
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    GET: function () {},
    POST: function () {}
  }
};

// TODO:
// - Write out get and post for the messages and users to db
// - the modules pulls information from the db and also writes to it
