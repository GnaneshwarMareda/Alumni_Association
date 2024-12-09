const mongoose = require("mongoose");

const successStorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  story: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: true, // URL to the image of the person or their achievement
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

successStorySchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

const SuccessStories = mongoose.model("SuccessStory", successStorySchema);

module.exports = SuccessStories;
