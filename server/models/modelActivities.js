const mongoose = require('mongoose');
const modelActivities = new mongoose.Schema({
    post: {
        type: String,
        required: [true, "Title is required"],
        minlength: [4, "Author's name must be at least 4 characters long"]
      },
      pic: {
        type: String,
    },
}, { timestamps: true });

module.exports.Activity = mongoose.model('Activity', modelActivities);