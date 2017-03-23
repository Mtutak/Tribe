// var mongoose = require("mongoose");
// const config = require('../app/config/config.json');
// const jwt = require('jsonwebtoken');
// var User = require("../../models/user.js");
// var bodyParser = require("body-parser");
// // Snatches HTML from URLs
// // var request = require("request");
// // Scrapes our HTML
// // var cheerio = require("cheerio");
// // Example gets saved as a class, so we can create new Example objects
// // and send them as validated, formatted data to our mongoDB collection.
// // var CommentModel = require("../models/commentsModel.js");


// module.exports = function(app){

// 	app.get('/api/connections', function(req, res){
		
// 		const token = req.headers.authorization.split(' ')[1];
// 		console.log(req);

// 	  	jwt.verify(token, config.jwtSecret, (err, decoded) => {
// 	    // the 401 code is for unauthorized status
// 	    	if (err) { res.status(401).end(); }

// 	    	const userId = decoded.sub;

// 	    	// check if a user exists
// 	    	User.findById(userId)
// 	    		.populate("connections")
// 				.exec(function(error, doc){

// 				      if (error) {
// 				        res.send(error);
// 				      }
// 				      // Or send the doc to the browser
// 				      else {
// 						// var connectionsForThisUser = [];

// 						// 	for (var i = 0; i < doc[0].connections.length; i++) {
// 						// 		connectionsForThisUser.push({
// 						// 			email: doc[0].connections[i].email,
// 						// 			name: doc[0].connections[i].name
// 						// 			// selectedArticle: selectedArticle
// 						// 		});	
// 						// 	}

// 						// console.log("AYE"+connectionsForThisUser);
// 					  	// {
// 			     //            connections: connectionsForThisUser
// 			     //       	});
// 					  res.send(doc); 

// 				      }

// 				});;
// 	  	});

// 		// var selectedArticle = req.query.title;


// 		// ArticleModel.find({title:selectedArticle}, function(err, docs){
// 		// 		console.log(docs[0].comments);

// 		// 	if(docs[0].comments.length == 0){
// 		// 		res.render("noCommentsModal");
// 		// 	} else{

// 		// 		ArticleModel.find({title: selectedArticle})
// 		// 		.populate("comments")
// 		// 		.exec(function(error, doc){

// 		// 		      if (error) {
// 		// 		        res.send(error);
// 		// 		      }
// 		// 		      // Or send the doc to the browser
// 		// 		      else {
// 		// 				var commentsForThisArticle = [];

// 		// 					for (var i = 0; i < doc[0].comments.length; i++) {
// 		// 						commentsForThisArticle.push({
// 		// 							comment: doc[0].comments[i].comment,
// 		// 							selectedArticle: selectedArticle
// 		// 						});	
// 		// 					}
// 		// 				console.log(commentsForThisArticle);
// 		// 			  res.render("readCommentsModal", 
// 		// 			  	{
// 		// 	                comments: commentsForThisArticle
// 		// 	           	});

// 		// 		      }

// 		// 		});
// 		// 	}
// 		// });
// 	});

// };