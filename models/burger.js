// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

//Model of burger to interact with database
var burger = {

  //function for all data in burger database
  //cb = call back
  selectAll: function(cb) {

    //connect to orm for selectAll function
    orm.selectAll("burgers", function(res) {

      //get result after query has returned
      cb(res);
    });

  },


  // The variables burger is an array.
  // Function to insert one burger's information into the table
  insertOne: function(col, cb) {

    orm.insertOne("burgers", ["burger_name", "devoured"], [col, false], function(res) {
      cb(res);
    });
  },

  
  //function to update the database for burger table
  updateOne: function(condition, cb) {

    //update devoured status of burger
    orm.updateOne("burgers", "id=" + condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
