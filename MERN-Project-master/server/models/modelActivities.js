const mongoose = require('mongoose');
const modelActivities = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    minlength: [4, "Title must be at least 4 characters long"]
  },
  post: {
    type: String,
    required: [true, "Description is required"],
    minlength: [4, "Alength must be at least 4 characters long"]
  },
  pic: {
    type: String,
  }
}, { timestamps: true });

module.exports.Activity = mongoose.model('Activity', modelActivities);