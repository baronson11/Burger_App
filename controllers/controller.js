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
  let { burgerName } = req.body;
  let { devoured } = req.body;
  burger.create(["burgerName", "devoured"], [{ burgerName }, { devoured }], (result) => {
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", (req, res) => {
  let { id } = req.params;
  let { burgerName } = req.body;
  let identity = `id = ${id}`
  console.log();
  burger.update(
    {
      burgerName: `${burgerName}`
    },
    identity,
    (result) => {
      if (result.changedRows === 0) {
        // throw 404 if id doesnt exist
        return res.status(404).end();
      }
      // throw okay if exists
      res.status(200).end();
    }
  );
});

// Export routes for server.js to use.
module.exports = router;
