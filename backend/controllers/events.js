const Events = require("../models/events");

// Retrieve all events
const getEvents = async (req, res) => {
  try {
    const events = await Events.find({});
    res
      .status(200)
      .json({ message: "Events retrieved successfully!", events: events });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Post a new event
const addEvent = async (req, res) => {
  try {
    const newEvent = new Events(req.body);
    console.log(req.body);
    const savedEvent = await newEvent.save();
    res
      .status(201)
      .json({ message: "Event posted successfully!", data: savedEvent });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update an existing event
const editEvent = async (req, res) => {
  try {
    const updatedEvent = await Events.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedEvent)
      return res.status(404).json({ message: "Event not found." });
    res
      .status(200)
      .json({ message: "Event updated successfully!", data: updatedEvent });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete an existing event
const deleteEvent = async (req, res) => {
  try {
    const deletedEvent = await Events.findByIdAndDelete(req.params.id);
    if (!deletedEvent)
      return res.status(404).json({ message: "Event not found." });
    res
      .status(200)
      .json({ message: "Event deleted successfully!", data: deletedEvent });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { getEvents, addEvent, editEvent, deleteEvent };
