const express = require('express');
var mongoose = require("mongoose");
const config = require('../app/config/config.json');
const jwt = require('jsonwebtoken');
var User = require("../models/user.js");
var bodyParser = require("body-parser");
const router = new express.Router();

	router.get('/dashboard', (req, res) => {
	  res.status(200).json({
	    message: "You're authorized to see this secret message."
	  });
	});

	router.post('/friendsInfo', (req, res) => {

		const friendsId = req.body.id 
	

	    	User.findById(friendsId)
				.exec(function(error, doc){
					console.log(doc);

				      if (error) {
				          res.send(error);
				      }
				      // Or send the doc to the browser
				      else {
						  res.status(200).json({
						    name: doc.name,
						    email:doc.email
						  }); 

				      }

				});;

	});

	router.get('/connections', function(req, res){
		
		const token = req.headers.authorization.split(' ')[1];

	  	jwt.verify(token, config.jwtSecret, (err, decoded) => {
	    // the 401 code is for unauthorized status
	    	if (err) { res.status(401).end(); }

	    	const userId = decoded.sub;
	    // 			res.status(200).json({
					//     loggedUser: userId
					// }); 

	    	// check if a user exists
	    	User.findById(userId)
	    		.populate("connections")
				.exec(function(error, doc){

				      if (error) {
				          res.send(error);
				      }
				      // Or send the doc to the browser
				      else {
						  res.status(200).json({
						    connections: doc.connections
						  }); 

				      }

				});;
	  	});
	});


module.exports = router;