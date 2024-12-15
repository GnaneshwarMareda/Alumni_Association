const mongoose = require("mongoose");

const successStorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true, // URL to the image of the person or their achievement
  },
  createDate: {
    type: Date,
    default: Date.now,
  },
  lastUpdateDate: {
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
