// Dependencies ------------------------------------------
const mysql = require("mysql");

// Create connection to MySQL database -----------------
const database = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "burgers_db"
});

// Connect to database ---------------------------------
database.connect((err) => {
  if (err) {
    console.error(`Error connecting to database: ${err.stack}`);
    return;
  }
  console.log(`Connected to MySQL! ID is ${database.threadId}`);
});

// Export connection -----------------------------------
module.exports = database;
