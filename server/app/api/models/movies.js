const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  poster_path: { type: String },
  backdrop_path: { type: String },
  genre_ids: { type: [Number], default: [] }, 
  genre: { type: [String], default: [] }, 
  release_date: { type: String }, 
  overview: { type: String, required: true },
  created_at: { type: Date, required: true, default: Date.now }
});

module.exports = mongoose.model('Movie', movieSchema);


