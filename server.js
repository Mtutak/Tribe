// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
// var logger = require("morgan");
// var mongoose = require("mongoose");

// Require History Schema
// var History = require("./models/History");

// // Create Instance of Express
// var app = express();

// // Sets an initial port. We'll use this later in our listener
// var PORT = process.env.PORT || 3000;
// // Run Morgan for Logging
// // app.use(logger("dev"));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//     extended: false
// }));
// app.use(bodyParser.text());
// app.use(bodyParser.json({
//     type: "application/vnd.api+json"
// }));
// app.use(express.static("public"));

// app.get("/", function(req, res) {
//     res.sendFile(__dirname + '/public/index.html')
// });

// app.listen(3000, function() {
//     console.log("App running on Port 3000");
// });


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

// var routes = require("./controllers/burgers_controller");
// app.use("/", routes);
// app.use("/update", routes);
// app.use("/create", routes);
// // listen on port 3000
// var port = process.env.PORT || 3000;
// db.sequelize.sync().then(function () {
//     app.listen(port);
// });

var express = require("express");
var bodyParser = require("body-parser");

// Create Instance of Express
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 8888;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

app.post('/posts', function(req, res) {
  setTimeout(function(){
    res.json({
      title: req.body.title,
      category: req.body.category
    });
  }, 1000);
});

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/app.html');
});

// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});