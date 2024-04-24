const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  poster_path: { type: String },
  genre: { type: String, required: true },
  release_date: { type: Number, required: true },
  overview: {type: String, required: true}
});

module.exports = mongoose.model('Movie', movieSchema);
