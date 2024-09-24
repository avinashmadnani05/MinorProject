const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userId: { 
    type: Number, 
    min: 0, // Ensures the value is non-negative (optional)
    max: 2147483647, // 32-bit signed integer limit
    required: true
  },
  interests: { type: String },
  pastExperience: { type: String },
  skills: { type: String }
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
