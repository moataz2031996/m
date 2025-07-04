const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  phone: String,
  registeredAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('User', userSchema);
