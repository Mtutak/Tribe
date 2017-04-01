// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");


// Helper functions for making API Calls
var helpers = {


  // This function hits our own server to retrieve the record of query results
  getUsersConnections: function() {
    return axios.get("/api/connections");
  },

  // This function posts new searches to our database.
  postHistory: function(location) {
    return axios.post("/api", { location: location });
  },
// This function posts new searches to our database.
  postProject: function(data) {
    console.log('Post Project Helper hit!');
    console.log(data);
    return axios.post("/projects/new", { data });

  },
  getAllProjects: function() {
    console.log('Hit Get All Projects Helper');
    return axios.get("/projects");
  },

  updateUserProfile: function(id, data) {
    console.log('Hit Update User Helper');
    console.log(data);
    return axios.post(`/user/${id}/update`, { data });
  }

};

// We export the API helper

export { helpers };

