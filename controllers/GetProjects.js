const Project = require('../models/Project'),
	  ProjectDetail = require('../models/ProjectDetail'),
	  Connection = require('../models/Connection'),
	  Profile = require('../models/Profile');

exports.getProjects = function(req, res, next) {
	var user
	//creator is an array
	Project.findAll({ creator: req.user._id})
	.select('_id')
	.exec(function(err, projects){
		if (err) {
			res.send({ error: err});
			return next(err);
		}
		// console.log(projects);
		//go through each project id and populate detail
		// projects.forEach(function(project) {
		// 	ProjectDetail.find({'projectId': project._id})
		// 	.sort('-createdAt')
		// 	.populate({
		// 		path: 'user'
		// 	})
		// })
	})
}