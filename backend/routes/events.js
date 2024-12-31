const express = require("express");
const router = express.Router();

const {
  getEvents,
  addEvent,
  editEvent,
  deleteEvent,
  getUpcomingEvents,
} = require("../controllers/events");

router.get("/", getEvents);
router.post("/", addEvent);
router.put("/:id", editEvent);
router.delete("/:id", deleteEvent);
router.get("/upcoming-events", getUpcomingEvents);
module.exports = router;
