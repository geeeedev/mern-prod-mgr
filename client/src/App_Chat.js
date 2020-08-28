import React, { useEffect, useState } from "react";
import { Redirect, Router, Link, navigate } from "@reach/router";
import Chat from "./Chat";
import ChatConv from "./ChatConv";

function App() {
  return (
    <div className="App">
      <Router>
        <Redirect from="/" to="/chat" noThrow="true" />
        <Chat path="/chat" />
        <ChatConv path="/chatconv/:chatName" />
      </Router>
    </div>
  );
}

export default App;
