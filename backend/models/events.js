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
  createDate: {
    type: Date,
    default: Date.now,
  },
  lastUpdateDate: {
    type: Date,
    default: Date.now,
  },
});

eventSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

const Events = mongoose.model("Event", eventSchema);

module.exports = Events;
