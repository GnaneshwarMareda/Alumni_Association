const express = require("express");
const Alumni = require("../models/alumni");
const router = express.Router();

router.get("/", async (req, res) => {
  const data = await Alumni();
});
