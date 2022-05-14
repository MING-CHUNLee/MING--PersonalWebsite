import express from "express";
import http from "http";
import cookieParse from "cookie-parser";

import "dotenv/config";
// require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cookieParse());


const server = http.createServer(app);
const port = process.env.PORT || 3000;

server.listen(port);

server.on("listening", () => {
  const addr = server.address();
  console.log(`This server is on ${addr.port}`);
});
