const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
dotenv.config();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.listen(port, () => {
  console.log(
    `Server is running on port ${port} \nhttp://localhost:${process.env.PORT}`
  );
});
app.get("/", (req, res) => {
  res.send("Welcome to the Node.js server!");
});
