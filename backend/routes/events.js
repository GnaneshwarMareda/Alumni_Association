const express = require("express");
const router = express.Router();

const {
  getEvents,
  addEvent,
  editEvent,
  deleteEvent,
  getUpcomingEvents,
  getConferences,
  getTechReunions,
} = require("../controllers/events");

router.get("/", getEvents);
router.post("/", addEvent);
router.put("/:id", editEvent);
router.delete("/:id", deleteEvent);
router.get("/upcoming-events", getUpcomingEvents);
router.get("/conferences", getConferences);
router.get("/tech-reunions", getTechReunions);
module.exports = router;
