const express = require("express");
const router = express.Router();

const {
  getEvents,
  addEvent,
  editEvent,
  deleteEvent,
} = require("../controllers/events");

router.get("/", getEvents);
router.post("/:id", addEvent);
router.put("/:id", editEvent);
router.delete("/:id", deleteEvent);

module.exports = router;
