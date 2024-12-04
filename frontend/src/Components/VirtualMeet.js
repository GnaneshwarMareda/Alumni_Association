import React from "react";
import Jitsi from "react-jitsi";

const VirtualMeet = () => {
  const [roomName, setRoomName] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [startMeeting, setStartMeeting] = React.useState(false);

  return (
    <div>
      {!startMeeting ? (
        <div>
          <h1>Join a Virtual Conference</h1>
          <input
            type="text"
            placeholder="Enter Room Name"
            value={roomName}
            onChange={(e) => setRoomName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Your Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={() => setStartMeeting(true)}>Start Meeting</button>
        </div>
      ) : (
        <Jitsi
          roomName={roomName}
          displayName={username}
          onMeetingEnd={() => setStartMeeting(false)}
          loadingComponent={<p>Loading ...</p>}
        />
      )}
    </div>
  );
};

export default VirtualMeet;
