// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

//Model of burger to interact with database
var burger = {

  //function for all data in burger database
  all: function(cb) {
    //connect to orm for selectAll function
    orm.all("burgers", function(res) {
      //get result after query has returned
      cb(res);
    });
  },


  // The variables burger is an array.
  // Function to insert one burger's information into the table
  create: function(name, cb) {
    orm.create("burgers", 
        ["burger_name", "devoured"],
        [name, false], cb);
  },

  
  //function to update the database for burger table
  update: function(id, cb) {
    var condition = "id=" + id;
    //update devoured status of burger
    orm.update("burgers", { devoured: true }, condition, cb);
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
