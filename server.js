
var express = require("express");
var bodyParser = require("body-parser");
const passport = require('passport');

const mongoose = require('mongoose');
const Project = require('./models/Project');
const User = require('./models/user');


// Create Instance of Express
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 8080;

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


app.post('/projects/new', function(req, res){
	    	// create new project
	    	Project.create({
					creator: req.body.data.id,
					location: req.body.data.location,
					title: req.body.data.title,
					summary: req.body.data.category,
					detail: req.body.data.detail
				});

        res.status(200).json({
						    success: "successful new project"
						  }); 

	});

app.get('/projects', function(req, res){
			console.log('hit projects route!');

				Project.find({})
  				.sort({ createdAt: -1 })
				.exec(function(error, doc){
							console.log(doc);
				      if (error) {
				          res.send(error);
				      }
				      // Or send the doc to the browser
				      else {
						  res.send(doc); 

				      };
        });
	});

	app.get('/projects/user', function(req, res){
		var userID = req.body.data.id;
			console.log('hit projects route!');
				Project.find({userID})
				.exec(function(error, doc){
							console.log(doc);
				      if (error) {
				          res.send(error);
				      }
				      // Or send the doc to the browser
				      else {
						  res.status(200).json({
						    connections: doc.connections
						  }); 

				      }
        });
	});

	app.post('/user/:uid/update', function(req, res){
			console.log('hit update route!');
			console.log(req.body);
			var doc = req.body.data;
			console.log(doc);
				User.findByIdAndUpdate(doc.id, { $set: { 
					title: doc.title,
					bio: doc.bio,
					detail: doc.detail,
					profileimg: doc.profileimg }}, { new: true }, function (err, profile) {
  				if (err) return handleError(err);
  				res.send(profile);
				});
	});
// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});