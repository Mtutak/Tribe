const express = require('express');
var mongoose = require("mongoose");
const config = require('../app/config/config.json');
const jwt = require('jsonwebtoken');
var User = require("../models/user.js");
var bodyParser = require("body-parser");
const router = new express.Router();
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'tribedevelopmentteam@gmail.com',
        pass: 'tribedevelopment'
    }
});



	router.get('/dashboard', (req, res) => {
	  res.status(200).json({
	    message: "You're authorized to see this secret message."
	  });
	});

	router.post('/friendsInfo', (req, res) => {

		const friendsId = req.body.id; 
	

	    	User.findById(friendsId)
				.exec(function(error, doc){

				      if (error) {
				          res.send(error);
				      }
				      // Or send the doc to the browser
				      else {
						  res.status(200).json({
						    name: doc.name,
						    email: doc.email,
				            profileimg: doc.profileimg,
				            bio: doc.bio,
				            detail: doc.detail,
				            title: doc.title,
				            location: doc.location
						  }); 

				      }

				});;

	});

	router.post('/addToTribe', (req, res) => {

		const friendsId = req.body.id; 

		const token = req.headers.authorization.split(' ')[1];

	  	jwt.verify(token, config.jwtSecret, (err, decoded) => {
	    // the 401 code is for unauthorized status
	    	if (err) { res.status(401).end(); }

	    	const userId = decoded.sub;


		    	User.findOneAndUpdate({_id: userId}, { $pull: { "pendingConnections": friendsId }, $push: { "connections": friendsId } }, { new: true }, function(err, newdoc) {
				        // Send any errors to the browser
				        if (err) {
				          res.send(err);
				        }
				        // Or send the newdoc to the browser
				        else {

					       	User.findOneAndUpdate({_id: friendsId}, { $pull: { "pendingConnections": userId }, $push: { "connections": userId } }, { new: true }, function(err, newdoc) {
					        	// Send any errors to the browser
						        if (err) {
						          res.send(err);
						        }
						        // Or send the newdoc to the browser
						        else {
								    res.json({
								      friendAdded: true 
								    }); 	 

						        }
					    	})

				        }
				});


	  	});

	});

	router.post('/friendRequest', (req, res) => {

		const friendsId = req.body.id; 

		const token = req.headers.authorization.split(' ')[1];

	  	jwt.verify(token, config.jwtSecret, (err, decoded) => {
	    // the 401 code is for unauthorized status
	    	if (err) { res.status(401).end(); }

	    	const userId = decoded.sub;
	    	var userEmail;
	    	var friendEmail;

	    	User.findById(userId)
				.exec(function(error, doc){

					if(doc.pendingConnections.indexOf(friendsId) === -1){
				    	User.findOneAndUpdate({_id: userId}, { $push: { "pendingConnections": friendsId } }, { new: true }, function(err, newdoc) {
						        // Send any errors to the browser
						        if (err) {
						          res.send(err);
						        }
						        // Or send the newdoc to the browser
						        else {

							    	User.findById(userId)
										.exec(function(error, doc){
											userEmail=doc.email;
										});

							       	User.findOneAndUpdate({_id: friendsId}, { $push: { "pendingConnections": userId } }, { new: true }, function(err, newdoc) {
							        	// Send any errors to the browser
								        if (err) {
								          res.send(err);
								        }
								        // Or send the newdoc to the browser
								        else {
									    	User.findById(userId)
												.exec(function(error, doc){
													friendEmail = doc.email;
													var emailList = userEmail + ', ' + friendEmail;

													let mailOptions = {
													    from: '"TRIBE 👻"', // sender address
													    to: emailList, // list of receivers
													    subject: 'Hi! Nice to Meet\'ya!', // Subject line
													    text: 'Schedule a time and place to meet.  Always meet in public!  Safety is #1.' // plain text body
													};

													transporter.sendMail(mailOptions, (error, info) => {
													    if (error) {
													        return error;
													    }

													});

												});
											 res.status(200);

								        }
							    	})

						        }
						});						
					} else {
						res.status(200);
					}


				});


	  	});

	});

	router.get('/myInfo', function(req, res){
		
		const token = req.headers.authorization.split(' ')[1];

	  	jwt.verify(token, config.jwtSecret, (err, decoded) => {
	    // the 401 code is for unauthorized status
	    	if (err) { res.status(401).end(); }

	    	const userId = decoded.sub;

	    	// check if a user exists
	    	User.findById(userId)
				.exec(function(error, doc){

				      if (error) {
				          res.send(error);
				      }
				      // Or send the doc to the browser
				      else {
						  res.status(200).json({
						    name: doc.name,
						    email:doc.email,
						    id:doc.id
						  }); 

				      }

				});;
	  	});
	});

	router.get('/connections/made', function(req, res){
		
		const token = req.headers.authorization.split(' ')[1];

	  	jwt.verify(token, config.jwtSecret, (err, decoded) => {
	    // the 401 code is for unauthorized status
	    	if (err) { res.status(401).end(); }

	    	const userId = decoded.sub;

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
						    connectionsMade: doc.connections
						  }); 

				      }

				});
	  	});
	});

	router.get('/connections/available', function(req, res){
		
		const token = req.headers.authorization.split(' ')[1];
		var unavailableConnections;

	  	jwt.verify(token, config.jwtSecret, (err, decoded) => {
	    // the 401 code is for unauthorized status
	    	if (err) { res.status(401).end(); }

	    	const userId = decoded.sub;

	    	// check if a user exists
	    	User.findById(userId)
				.exec(function(error, doc){
				      if (error) {
				          res.send(error);
				      }
				      // Or send the doc to the browser
				      else {

				      		unavailableConnections = doc.connections;

				      		doc.pendingConnections.forEach(function(element, index, array){
				      			unavailableConnections.push(element);
				      		});

				      		unavailableConnections.push(userId);


							User.find({
							    '_id': { $nin: unavailableConnections}
							}, function(err, docs){
								  res.status(200).json({
								    connectionsAvailable: docs
								  }); 
							});
				      }
				});


	  	});
	});

	router.get('/connections/pending', function(req, res){
		
		const token = req.headers.authorization.split(' ')[1];

	  	jwt.verify(token, config.jwtSecret, (err, decoded) => {
	    // the 401 code is for unauthorized status
	    	if (err) { res.status(401).end(); }

	    	const userId = decoded.sub;

	    	// check if a user exists
	    	User.findById(userId)
	    		.populate("pendingConnections")
				.exec(function(error, doc){

				      if (error) {
				          res.send(error);
				      }
				      // Or send the doc to the browser
				      else {
						  res.status(200).json({
						    pendingConnections: doc.pendingConnections
						  }); 

				      }

				});
	  	});
	});

router.get('/projects/user', function(req, res){
		
		const token = req.headers.authorization.split(' ')[1];

	  	jwt.verify(token, config.jwtSecret, (err, decoded) => {
	    // the 401 code is for unauthorized status
	    	if (err) { res.status(401).end(); }

	    	const userId = decoded.sub;

	    	// query user
	    	User.findById(userId)
				.exec(function(error, doc){

				      if (error) {
				          res.send(error);
				      }
				      // Or send the doc to the browser
				      else {
						  res.status(200).json({
						    currentid: doc._id
						  }); 

				      }

				});
	  	});
	});
	
	// This route is like /myInfo but getting entire user profile to use for ProfileButton -> Profile Form components
	router.get('/userprofile', function(req, res){
		
		const token = req.headers.authorization.split(' ')[1];

	  	jwt.verify(token, config.jwtSecret, (err, decoded) => {
	    // the 401 code is for unauthorized status
	    	if (err) { res.status(401).end(); }

	    	const userId = decoded.sub;

	    	// check if a user exists
	    	User.findById(userId)
				.exec(function(error, doc){

				      if (error) {
				          res.send(error);
				      }
				      // Or send the doc to the browser
				      else {
						  res.send(doc);

				      }

				});;
	  	});
	});

module.exports = router;