// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
// var logger = require("morgan");
// var mongoose = require("mongoose");

// Require History Schema
// var History = require("./models/History");

// Create Instance of Express
var app = express();

// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3000;
// Run Morgan for Logging
// app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
    type: "application/vnd.api+json"
}));
app.use(express.static("public"));

app.get("/", function(req, res) {
    res.sendFile(__dirname + '/public/index.html')
});

app.listen(8888, function() {
    console.log("App running on Port 3000");
});
// Solution 2: Customer Relations
// ===========================================
// Step 1: Created a Customer model in ./models/customer.js
// Step 2: Updated the Burger model to have a hasOne(models.Customer) relation
// Step 3: Updated the handlebars to display a customers name if there's a 'Customers' property on the Burger
// Step 4: Updated queries in burgerController for updating a burger to add the CustomerId
// Step 5: Updated findAll query  in burger_controller for burgers to "include" the customer
// Step 6: Updated findAll query in burger_controller to order returned burgers by burger_name.

// var methodOverride = require("method-override");
// // bring in the models
// var db = require("./models");
// var app = express();
// // Serve static content for the app from the "public" directory in the application directory.
// app.use(express.static(__dirname + "/public"));
// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({
//     extended: false
// }));
// // override with POST having ?_method=DELETE
// app.use(methodOverride("_method"));
// var exphbs = require("express-handlebars");
// app.engine("handlebars", exphbs({
//     defaultLayout: "main"
// }));
// app.set("view engine", "handlebars");
// var routes = require("./controllers/burgers_controller");
// app.use("/", routes);
// app.use("/update", routes);
// app.use("/create", routes);
// // listen on port 3000
// var port = process.env.PORT || 3000;
// db.sequelize.sync().then(function () {
//     app.listen(port);
// });