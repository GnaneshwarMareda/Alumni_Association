const express = require("express");
const router = express.Router();

const { verifyAlumniAdminStudent } = require("../middlewares/verifyToken");

const {
  sendRequest,
  acceptRequest,
  rejectRequest,
  getConnectionStatus,
} = require("../controllers/networkHub");

//Send Request
router.post(
  "/connect/connect/:fromId/:toId",
  verifyAlumniAdminStudent,
  sendRequest
);
//Accept Request
router.post(
  "/connect/accept/:toId/:fromId",
  verifyAlumniAdminStudent,
  acceptRequest
);
//Reject Request
router.post(
  "/connect/reject/:toId/:fromId",
  verifyAlumniAdminStudent,
  rejectRequest
);
//Get status
router.get(
  "/connect/status/:userId/:targetId",
  verifyAlumniAdminStudent,
  getConnectionStatus
);

module.exports = router;
