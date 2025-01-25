const mongoose = require('mongoose');

const FeedSchema = new mongoose.Schema({
  imgurl: { type: String, required: true }, 
  caption: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, {
  timestamps: true, // Adds createdAt and updatedAt fields automatically
});

module.exports = mongoose.model('Feed', FeedSchema);
