const Events = require("../models/events");

// Retrieve all events
const getEvents = async (req, res) => {
  try {
    const events = await Events.find({}).sort({ dateOfEvent: 1 });
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
    console.log(req.body);
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

const getUpcomingEvents = async (req, res) => {
  try {
    const currentDate = new Date();

    // Query to fetch events where the event date is in the future
    const upcomingEvents = await Events.find({
      dateOfEvent: { $gte: currentDate },
    })
      .sort({ dateOfEvent: 1 }) // Sort events by date (ascending)
      .limit(10); // Limit the number of events to 10 (optional)

    // Check if events are found
    if (!upcomingEvents || upcomingEvents.length === 0) {
      return res.status(404).json({ message: "No upcoming events found." });
    }

    // Send the events as a response
    res.status(200).json({
      success: true,
      message: "Upcoming events fetched successfully.",
      events: upcomingEvents,
    });
  } catch (error) {
    console.error("Error fetching upcoming events:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch upcoming events.",
      error: error.message,
    });
  }
};

const getConferences = async (req, res) => {
  try {
    const today = new Date().toISOString().split("T")[0];

    const upcomingData = await Events.find({
      eventType: "Conference",
      dateOfEvent: { $gte: today },
    });

    const pastData = await Events.find({
      eventType: "Conference",
      dateOfEvent: { $lt: today },
    });

    return res.status(200).json({
      message: "Data Retrieved Successfully",
      upcomingData,
      pastData,
    });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const getTechReunions = async (req, res) => {
  try {
    const today = new Date().toISOString().split("T")[0];

    const upcomingData = await Events.find({
      eventType: "TechReunion",
      dateOfEvent: { $gte: today },
    });

    const pastData = await Events.find({
      eventType: "TechReunion",
      dateOfEvent: { $lt: today },
    });

    return res.status(200).json({
      message: "Data Retrieved Successfully",
      upcomingData,
      pastData,
    });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getEvents,
  addEvent,
  editEvent,
  deleteEvent,
  getUpcomingEvents,
  getConferences,
  getTechReunions,
};
