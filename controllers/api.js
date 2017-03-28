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
						    email:doc.email
						  }); 

				      }

				});;

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
						    email:doc.email
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
		var availableConnections;

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
				      		availableConnections = doc.connections;
				      		availableConnections.push(userId);

							User.find({
							    '_id': { $nin: availableConnections}
							}, function(err, docs){
								  res.status(200).json({
								    connectionsAvailable: docs
								  }); 
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
							console.log(doc._id);
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