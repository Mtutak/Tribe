
var express = require("express");
var bodyParser = require("body-parser");
const passport = require('passport');
const mongoose = require('mongoose');

// Create Instance of Express
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 8888;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

const config = require('./app/config/config.json');

require('./models').connect(config.dbUri);

const localSignupStrategy = require('./controllers/passport/localSignup');
const localLoginStrategy = require('./controllers/passport/localLogin');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

// pass the authenticaion checker middleware
const authCheckMiddleware = require('./controllers/middleware/authCheck');
app.use('/api', authCheckMiddleware);


const authRoutes = require('./controllers/auth');
app.use('/auth', authRoutes);

const apiRoutes = require('./controllers/api');
app.use('/api', apiRoutes);



// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});