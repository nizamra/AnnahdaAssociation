const mongoose = require('mongoose');
const modelActivities = new mongoose.Schema({
    post: {
        type: String,
        required: [true, "post is required"],
        minlength: [4, "post must be at least 4 characters long"]
      },
      pic: {
        type: String,
    },
}, { timestamps: true });

module.exports.Activity = mongoose.model('Activity', modelActivities);