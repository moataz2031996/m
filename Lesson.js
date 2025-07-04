const mongoose = require('mongoose');
const lessonSchema = new mongoose.Schema({
  title: String,
  url: String,
  code: String,
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Lesson', lessonSchema);
