const SuccessStories = require("../models/successStories");

//Retrieve latest success stories
const getSuccessStories = async (req, res) => {
  try {
    const successStories = await SuccessStories.find({})
      .sort({ createdAt: -1 })
      .limit(3);
    res.status(200).json({
      message: "Success stories retrieved successfully!",
      data: successStories,
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

//Add success story
const addSuccessStory = async (req, res) => {
  try {
    const newStory = new SuccessStories(req.body);
    const savedStory = await newStory.save();
    res.status(201).json({
      message: "Success story added successfully!",
      data: savedStory,
    });
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ message: err.message });
  }
};

//Edit success story
const editSuccessStory = async (req, res) => {
  try {
    const updatedStory = await SuccessStories.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedStory)
      return res.status(404).json({ message: "Success story not found." });
    res.status(200).json({
      message: "Success story updated successfully!",
      data: updatedStory,
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

//Delete success story
const deleteSuccessStory = async (req, res) => {
  try {
    const deletedStory = await SuccessStories.findByIdAndDelete(req.params.id);
    if (!deletedStory)
      return res.status(404).json({ message: "Success story not found." });
    res.status(200).json({
      message: "Success story deleted successfully!",
      data: deletedStory,
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  getSuccessStories,
  addSuccessStory,
  editSuccessStory,
  deleteSuccessStory,
};
