/* eslint-disable no-undef */
const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
const app = express();

app.use(cors());

const server = http.createServer(app);

const PORT = 3000;

const io = new Server(server, {
  cors: {
    origin: `http://localhost:5173`,
    method: ["GET", "POST"],
  },
});

const CHAT_BOT = "ChatBot";
// LISTEN FOR WHEN THE CLIENT VIA SOCKET.IO-CLIENT
io.on("connection", (socket) => {
  console.log(`User connected ${socket.id}`);

  // ADD USER TO ROOM
  socket.on("join_room", (data) => {
    const { userName, room } = data;
    socket.join(room);

    let __createdtime__ = Date.now();

    // SEND MESSAGE TO ALL USERS IN THE ROOM EXCEPT THE ONE WHO HAS JOINED
    socket.to(room).emit("receive_message", {
      message: `${userName} has joined the chat room`,
      userName: CHAT_BOT,
      __createdtime__,
    });

    socket.emit("receive_message", {
      message: `welcome ${userName}`,
      userName: CHAT_BOT,
      __createdtime__,
    });
  });
});

app.get("/chats", (req, res) => {
  res.status(200).send("Hello from the server");
});
server.listen(PORT, () => "Server Running ");
