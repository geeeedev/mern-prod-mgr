const port = 8000;
const dbName = "dbPrdMgr";
const express = require("express");
const cors = require("cors");

//db connection
require("./config/mongoose.config")(dbName);

//server
const app = express();
app.use(express.json()); //for req.body
app.use(cors()); //for Cross-origin resource sharing (CORS)

//routes
require("./routes/prdmgr.routes")(app);

//listen
const server = app.listen(port, () => {
  console.log(`Listening for request on port ${port} to respond to.`);
});


//SOCKET IO STUFF
const io = require("socket.io")(server);
let ttlConnected = 0;

const messages = []; //issue with the msg OBJ = where should I have it?

io.on("connection", (socket) => {
  ttlConnected++;
  // const messages = [];  //don't think this should be HERE! it's wiping out my msg[] here whenever I have a new connection!
  console.log(`${ttlConnected} connected.`);
  console.log(`messages[]: ${messages.length}`);
  console.log(`Nice to meet you, ${socket.id} (Shake-Hand!)`);

  // socket.emit("welcome", `Welcome to port ${port}!!`);
  socket.emit("newMsgFrServer", messages); //should it be io.emit?  but shouldn't matter at this point?

  socket.on("newMsgObj", (newMsgObj) => {
    messages.push(newMsgObj); // do I need this?  if not, what do I do here?
    console.log(messages);
    io.emit("newMsgFrServer", newMsgObj); //just sends right out to all?
  });

  socket.on("disconnect", () => {
    ttlConnected--;
    console.log(
      `Bye! ${socket.id} Disconnected. ${ttlConnected} remain connected.`
    );
  });
});

// socket.on("listening for client event on this socket/sender", (data) => {process-data});
// socket.broadcast.emit("to ALL OTHER clients except sender", objToSend);
// socket.emit("only respond back to this socket/sender", objToSend);
// io.emit("send to ALL connected clients", objToSend);
