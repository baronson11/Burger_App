// Dependencies ---------------------------------------
const express = require("express");
const burger = require("../models/burger.js");

// Router ---------------------------------------------
const router = express.Router();

// Routes ---------------------------------------------
router.get("/", (req, res) => {
  burger.select((data) => {
    let newBurger = {
      burger: data
    }
    console.log(newBurger);
    res.render("index", newBurger);
  });
});

router.post("/api/burgers", (req, res) => {
  let { burger_name } = req.body;
  let { devoured } = req.body;
  console.log(burger_name, devoured);
  burger.create( burgerName, devoured, (result) => {
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", (req, res) => {
  let { id } = req.params;
  let { devoured } = req.body;
  console.log(devoured);
  console.log(id);
  burger.update( "devoured", devoured,
    (result) => {
      if (result.changedRows === 0) {
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

module.exports = router;
