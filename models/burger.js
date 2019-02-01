/* 



 * Inside `burger.js`, import `orm.js` into `burger.js`

    * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.

    * Export at the end of the `burger.js` file.
*/

// Import the ORM to create functions that will interact with the database.

// Import the ORM to create functions that will interact with the database.
// Import the ORM to create functions that will interact with the database.
// var orm = require("../config/orm.js");

// var burger = {
//   selectAll: function(cb) {
//     // orm.selectAll("burgers", function(res) {
//     //   cb(res);
//     // });
//   },
//   // The variables cols and vals are arrays.
//   insertOne: function(cols, vals, cb) {
//     // orm.insertOne("burgers", cols, vals, function(res) {
//     //   cb(res);
//     // });
//   },
//   updateOne: function(objColVals, condition, cb) {
//     // orm.updateOne("burgers", objColVals, condition, function(res) {
//     //   cb(res);
//     // });
//   },
//   delete: function(condition, cb) {
//     // orm.delete("burgers", condition, function(res) {
//     //   cb(res);
//     // });
//   }
// };

// // Export the database functions for the controller (catsController.js).
// module.exports = burger;

module.exports = function(sequelize, DataTypes) {
  var burgers = sequelize.define("burgers", {
    id:{
       type:DataTypes.INTEGER,
       autoIncrement: true,
        primaryKey: true

    },
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    
  });
  burgers.associate = function(models) {
    
    burgers.belongsTo(models.Customer, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return burgers;
};

