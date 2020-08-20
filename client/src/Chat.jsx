import React, { useEffect, useState } from "react";
import { Redirect, Router, Link, navigate } from "@reach/router";

const Chat = () => {
  const [chatName, setChatName] = useState("");

  const handleStartChat = (e) => {
    e.preventDefault();
    navigate("/chatconv/" + chatName);
  };

  return (
    <div>
      <h3>MERN Chat</h3>
      <div>
        <h4>Get Started Right Now!</h4>
        <label>I want to start chatting with the name ...</label>
        <div className="mt-2 mb-2">
          <input
            onChange={(e) => setChatName(e.target.value)}
            type="text"
          ></input>
          <button onClick={handleStartChat} className="ml-3">
            Start Chatting
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
