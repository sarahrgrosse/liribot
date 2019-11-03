//This is calling the keys varibale from the keys.js file
var keys = require("./keys.js");

//This is allowing access to my keys information
var spotify = new spotify(keys.spotify);

console.log('this is loaded');

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
