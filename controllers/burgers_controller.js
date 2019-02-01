var express = require("express");
var db = require("../models");

module.exports = function(app) {

  app.get("/", function(req, res) {
  db.burgers.findAll({})
      .then(function(burgers) {
        res.render("index", {burgers:burgers});
       
      }); 
});

app.post("/api/burgers", function(req, res) {
  console.log("put this in db from burger")
  console.log(req.body.order);
  
  db.burgers.bulkCreate(req.body.order)//it should be array of object [{}]
    .then(function(dbPost) {    
    res.json({ id: dbPost.insertId });
    });
});

app.put("/api/burgers/:id", function(req, res) {
 
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

app.delete("/api/burgers/:id", function(req, res) {
  db.burgers.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(function(dbPost) {
      res.json(dbPost);
    });
});
}

// Export routes for server.js to use.
//module.exports = router;
