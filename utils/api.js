// Require axios
const axios = require('axios');
// require api
const api = {
  async getUser(userResponses) {
    try { let response = await axios
        
        // Example: https://api.github.com/users/kkaltenheuser
        .get(`https://api.github.com/users/${userResponses.username}`);
        return response.data;

    } catch (error) {
        console.log(error);
    }
  }
};

// call in index.js - this file is an addition to change out the async function that originally existed in index.js
module.exports = api;