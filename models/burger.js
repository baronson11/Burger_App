// Dependencies -----------------------------------
const orm = require("../config/orm.js");

// Also inside `burger.js`, create the code that will call the
// ORM functions using burger specific input for the ORM.
// Export at the end of the `burger.js` file.

const burger = {
  select: (callback) => {
    orm.selectAll("burgers", (res) => {
      callback(res);
    });
  },

  create: (burgerName, devoured, callback) => {
    orm.insertOne("burgers", burgerName, devoured, (res) => {
      callback(res);
    });
  },

  update: (col, val, callback) => {
    orm.updateOne("burgers", col, val, (res) => {
      callback(res);
    });
  }
};

module.exports = burger;
