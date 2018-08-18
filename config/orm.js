// Dependencies ----------------------------------------------
const database = require("./connection.js");

// (ORM) Object Relational Mapper -------------------------
// ?? - table/column names
// ? - values

const orm = {
  selectAll: (table, callback) => {
    let sql = `SELECT * FROM ??`;
    database.query(sql, table, (err, results) => {
      if (err) throw err;
      console.log(results);
      callback(results);
    });
  },

  insertOne: (table, burgerName, devoured, callback) => {
    let sql = `INSERT INTO ?? (burger_name, devoured) VALUES (burger_name=?, devoured=?)`;
    database.query(sql, [table, burgerName, devoured], (err, results) => {
      if (err) throw err;
      console.log(results);
      callback(results);
    });
  },

  updateOne: (table, columnName, Value, callback) => {
    let sql = `UPDATE ?? SET ?? = ?`;
    database.query(sql, [table, columnName, Value], (err, results) => {
      if (err) throw err;
      console.log(results);
      callback(results);
    });
  }
}

module.exports = orm;
