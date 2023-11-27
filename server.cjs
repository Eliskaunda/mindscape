const express = require("express");

const app = express();

app.get("/chats", (req, res) => {
  res.status(200).send("Hello from the server");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
