const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

//###[  Routers  ]###
const RenameMeRouter = require("./kubecreation/RenameMeRouter");

//###[  Server  ]###
const server = express();
server.use(helmet());
server.use(cors());
server.use(express.json());

//###[  Routes  ]###
server.use("/test", RenameMeRouter);

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

module.exports = server;
