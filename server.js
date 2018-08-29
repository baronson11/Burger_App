// Dependencies ------------------------------------------
const express = require("express");
const bodyParser = require("body-parser");
const handlebars = require("express-handlebars");

// PORT --------------------------------------------------
const PORT = process.env.PORT || 3000;

// Run Express --------------------------------------------
const app = express();

// Static content -----------------------------------------
app.use('/static', express.static('public/assets'));

// Parsers/Middleware -------------------------------------
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Setting up Handlebars ----------------------------------
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Main Router --------------------------------------------
const routes = require("./controllers/controller.js");

app.use(routes);

// Cross Origin Resource Sharing ----------------------------------------------
// Set up for API usage permissions -------------------------------------------
// NOTE: This must be set up in order for your API to be used by a web browser.
// ----------------------------------------------------------------------------
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, DELETE");
    return res.status(200).json({});
  }
  next();
});

// Error Handling -----------------------------------------
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  res.send(`Sorry! Something went wrong! ${err}`);
});

// Listening ----------------------------------------------
app.listen(PORT, () => {
  console.log(`server running on localhost:${PORT}`);
});
