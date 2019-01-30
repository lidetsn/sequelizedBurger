/* 
 Inside the `burgers_controller.js` file, import the following:

   * Express
   * `burger.js`

4. Create the `router` for the app, and export the `router` at the end of your file.
*/

var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var db = require("../models");

// Create all our routes and set up logic within those routes where required.
// var sequelizeConnection = db.sequelize;

// // Sync the tables
// sequelizeConnection.sync();

  router.get("/", function(req, res) {
  db.burgers.findAll({})
      .then(function(burgers) {
        res.render("index", {burgers:burgers});
       // res.json(dbPost);
      }); 
});

router.post("/api/burgers", function(req, res) {
  // burger.insertOne([
  //   "burger_name"
  // ], [
  //   req.body.burger_name
  // ], function(result) {
    
  //   res.json({ id: result.insertId });
  // });
  console.log(req.body);
  db.burgers.create({
    burger_name: req.body.burger_name,
    
  })
    .then(function(dbPost) {
      res.json({ id: dbPost.insertId });
    });
});

router.put("/api/burgers/:id", function(req, res) {
  // var condition = "id = " + req.params.id;

  // console.log("condition", condition);

  // burger.updateOne({
  //   devoured: req.body.devoured
  // }, condition, function(result) {
  //   if (result.changedRows == 0) {
  //     // If no rows were changed, then the ID must not exist, so 404
  //     return res.status(404).end();
  //   } else {
  //     res.status(200).end();
  //   }
  // });
  db.burgers.update(
    {
      devoured: true
     },
     {
      where: {
        id:  req.params.id
      }
    })
    .then(function(burgers) {
      res.render("index", {burgers:burgers});
    });
});

router.delete("/api/burgers/:id", function(req, res) {
  // var condition = "id = " + req.params.id;

  // burger.delete(condition, function(result) {
  //   if (result.affectedRows == 0) {
  //     // If no rows were changed, then the ID must not exist, so 404
  //     return res.status(404).end();
  //   } else {
  //     res.status(200).end();
  //   }
  // });
  db.burgers.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(function(dbPost) {
      res.json(dbPost);
    });
});

// Export routes for server.js to use.
module.exports = router;
