import axios from "axios";

export default {
  // Gets all posts
  getRepos: function() {
    return axios.get('https://api.github.com/users/Fomiller/repos');
  },
};