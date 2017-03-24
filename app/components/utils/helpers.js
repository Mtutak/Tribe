// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");


// Helper functions for making API Calls
var helpers = {


// This function posts new searches to our database.
  postProject: function(data) {
    return axios.post("/projects/new", { data });
  }
};

// We export the API helper
export { helpers };
