const mongoose = require('mongoose');

const moviesSchema = new mongoose.Schema({

});

module.exports = mongoose.model("Movies", moviesSchema);