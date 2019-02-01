var express = require("express");
var db = require("../models");

module.exports = function(app) {

  //   SELECT `Customer`.`id`, `Customer`.`name`, `Customer`.`createdAt`, `Customer`.`updatedAt`,
  //  `burgers`.`id` AS `burgers.id`, `burgers`.`burger_name` AS `burgers.burger_name`, `burgers`.`devoured` AS `burgers.devoured`,
  //   `burgers`.`createdAt` AS `burgers.createdAt`, `burgers`.`updatedAt` AS `burgers.updatedAt`, 
  //   `burgers`.`CustomerId` AS `burgers.CustomerId`
  //    FROM `Customers` AS `Customer` LEFT OUTER JOIN `burgers` AS `burgers` ON `Customer`.`id` = `burgers`.`CustomerId`;
app.get("/api/customers", function(req, res) {
  db.Customer.findAll({
    include: [db.burgers]
  }).then(function(dbCustomer) {
    // res.json(dbCustomer);
    res.render("log", {dbCustomer:dbCustomer});
  });
  });

  app.get("/api/customers/:id", function(req, res) {
    // Find one customer with the id in req.params.id and return them to the user with res.json
    db.Customer.findOne({
      include: [db.burgers],
      where: {
        id: req.params.id
      }
    }).then(function(dbCust) {
      res.json(dbCust);
    });
  });

  app.post("/api/customers", function(req, res) {
    // Create customer with the data available to us in req.body
   console.log("put this in db from cusomer")
    console.log(req.body);
  db.Customer.create({
    name: req.body.name,  
  })
    .then(function(dbCust) {   
      res.json({ id: dbCust.dataValues.id });
    });
  });


  app.delete("/api/customers/:id", function(req, res) {
    // Delete the customer with the id available to us in req.params.id
    db.Customer.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbCust) {
      res.json(dbCust);
    });
  });
}

