import express from "express";
import http from "http";
import path from "path";
import cookieParse from "cookie-parser";
import index from "./routes/index.js"; 
import "dotenv/config";
// require("dotenv").config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParse());

app.use("/api", index);
const server = http.createServer(app);
const port = process.env.PORT || 3000;

server.listen(port);

server.on("listening", () => {
  const addr = server.address();
  console.log(`This server is on ${addr.port}`);
});
