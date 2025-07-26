const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  imageUrl: { type: String },
  author: { type: String, default: 'Admin' },
  date: { type: Date, default: Date.now },
  tags: { type: [String] },
  isFeatured: { type: Boolean, default: false }
});

module.exports = mongoose.model('News', newsSchema);
