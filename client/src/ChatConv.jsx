import React, { useEffect, useState } from "react";
import { Redirect, Router, Link, navigate } from "@reach/router";
import io from "socket.io-client";
import Chat from "./Chat";

const ChatConv = (props) => {
  const { chatName } = props;
  const [socket] = useState(() => io(":8000"));
  const [welcome, setWelcome] = useState("");
  const [messages, setMessages] = useState([]);
  const [newMsg, setNewMsg] = useState("");

  useEffect(() => {
    socket.on("welcome", (data) => {
      console.log(data);
      console.log(`React Msg length: ${messages.length}`);
      setWelcome(data);
    });

    socket.on("newMsgFrServer", (msg) => {
      setMessages((messages) => {
        //what is prevMessages - comes with setState?
        return [msg, ...messages];
      });
    });

    return () => socket.disconnect(true);
  }, []);

  const handleSend = (e) => {
    e.preventDefault();
    const newMsgObj = {
      msg: newMsg,
      by: chatName,
      id: socket.id,
      // date: new Date(),
    };
    socket.emit("newMsgObj", newMsgObj);
  };

  if (messages === null) {
    return "Loading...";
  }

  return (
    <div>
      <h4>
        {welcome} {chatName} has joined the chat.
      </h4>
      <h6>
        {messages.length > 1
          ? messages.map((msg, idx) => {
              return (
                <>
                  <p>Message: {msg.msg}</p>
                  <p>By: {msg.by}</p>
                </>
              );
            })
          : ""}
      </h6>
      <div className="mt-2 mb-2">
        <input
          onChange={(e) => {
            setNewMsg(e.target.value);
          }}
          type="text"
        ></input>
        <button onClick={handleSend} className="ml-3">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatConv;
