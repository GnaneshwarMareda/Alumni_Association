const express = require("express");
const router = express.Router();

const {
  getSuccessStories,
  addSuccessStory,
  editSuccessStory,
  deleteSuccessStory,
} = require("../controllers/successStories");

router.get("/", getSuccessStories);
router.post("/", addSuccessStory);
router.put("/:id", editSuccessStory);
router.delete("/:id", deleteSuccessStory);

module.exports = router;
