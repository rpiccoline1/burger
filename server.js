var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8080;

var methodOverride = require("method-override");

var app = express();

app.use(express.static("/assets"));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(methodOverride("_method"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main"}));

app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});