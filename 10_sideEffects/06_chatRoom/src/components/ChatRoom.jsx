import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const ChatRoom = () => {
  const [roomId, setRoomId] = useState("general");

  const [serverUrl, setServerUrl] = useState("https://chat.example.com");

  useEffect(() => {
    console.log(`connecting to ${serverUrl} in room " ${roomId}" ...`);

    return () => {
      console.log(`❌ Disconnected from ${serverUrl} in room "${roomId}`);
    };
  });
  return (
    <div>
      <h2>Chat Room</h2>

      <p>
        Connected to: <strong>{serverUrl}</strong> <br />
        Room: <strong>{roomId}</strong>
      </p>

      <div style={{ marginTop: "10px" }}>
        <button onClick={() => setRoomId("general")}>Room: General</button>
        <button onClick={() => setRoomId("random")}>Room: Random</button>
      </div>

      <div>
        <button onClick={() => setServerUrl("https://chat.example.com")}>
          Server 1
        </button>
        <button onClick={() => setServerUrl("https://backup.chat.com")}>
          Server 2
        </button>
      </div>
    </div>
  );
};

export default ChatRoom;
