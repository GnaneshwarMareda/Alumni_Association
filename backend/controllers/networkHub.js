const Alumni = require("../models/alumni");
const Student = require("../models/students");

async function findUserById(id, role) {
  if (role === "alumni") return await Alumni.findOne({ Id: id });
  if (role === "student") return await Student.findOne({ Id: id });
  return null;
}

const sendRequest = async (req, res) => {
  const { fromId, toId } = req.params;
  const { fromRole, toRole } = req.query;

  const fromUser = await findUserById(fromId, fromRole);
  const toUser = await findUserById(toId, toRole);

  if (!fromUser || !toUser)
    return res.status(404).json({ error: "User not found" });

  fromUser.sentRequests.addToSet(toId);
  toUser.pendingRequests.addToSet(fromId);

  await fromUser.save();
  await toUser.save();

  res.json({ message: "Request sent" });
};

const acceptRequest = async (req, res) => {
  const { fromId, toId } = req.params;
  const { fromRole, toRole } = req.query;

  const fromUser = await findUserById(fromId, fromRole);
  const toUser = await findUserById(toId, toRole);

  if (!fromUser || !toUser)
    return res.status(404).json({ error: "User not found" });

  toUser.pendingRequests.pull(fromId);
  fromUser.sentRequests.pull(toId);

  fromUser.connections.addToSet(toId);
  toUser.connections.addToSet(fromId);

  await fromUser.save();
  await toUser.save();

  res.json({ message: "Connection accepted" });
};

const rejectRequest = async (req, res) => {
  const { fromId, toId } = req.params;
  const { fromRole, toRole } = req.query;

  const fromUser = await findUserById(fromId, fromRole);
  const toUser = await findUserById(toId, toRole);

  if (!fromUser || !toUser)
    return res.status(404).json({ error: "User not found" });

  toUser.pendingRequests.pull(fromId);
  fromUser.sentRequests.pull(toId);

  await fromUser.save();
  await fromUser.save();

  res.json({ message: "Connection rejected" });
};

const getConnectionStatus = async (req, res) => {
  const { userId, targetId } = req.params;
  const { fromRole, toRole } = req.query;

  const user = await findUserById(userId, fromRole);
  if (!user) return res.status(404).json({ error: "User not found" });

  const isConnected = user.connections.includes(targetId);
  const isPending = user.sentRequests.includes(targetId);
  const isRequested = user.pendingRequests.includes(targetId);

  res.json({ data: { isConnected, isPending, isRequested } });
};

module.exports = {
  sendRequest,
  acceptRequest,
  rejectRequest,
  getConnectionStatus,
};
