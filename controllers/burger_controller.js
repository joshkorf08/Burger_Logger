const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();

router.get('/', (req, res) => {
    burger.all((data) => {
      const hbsObject = {
        burger: data,
      };
      console.log(hbsObject);
      res.render('index', hbsObject);
    });
  });
  
  router.post("/api/burgers", function(req, res) {
    burger.create([
      "burger_name", "devoured"
    ], [
      req.body.burger, req.body.devoured
    ], function(result) {
    
      res.json({ id: result.insertId });
    });
  });
  
  router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.update({
      devoured: req.body.devoured
    }, condition, function(result) {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  
  
  module.exports = router;
  