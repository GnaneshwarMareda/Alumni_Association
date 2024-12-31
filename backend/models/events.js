const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  dateOfEvent: {
    type: Date,
    required: true,
  },
  timeOfEvent: {
    type: String,
    required: true,
  },
  createDate: {
    type: Date,
    default: Date.now,
  },
  lastUpdateDate: {
    type: Date,
    default: Date.now,
  },
  image: {
    type: String,
    required: false,
  },
  link: {
    type: String,
    required: false,
    default: null,
  },
  eventType: {
    type: String,
    required: true,
  },
});

eventSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

const Events = mongoose.model("Event", eventSchema);

module.exports = Events;
