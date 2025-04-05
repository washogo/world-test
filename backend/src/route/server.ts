import worldPostApi from "./world-posts/index";
import worldPostListApi from "./world-posts/[id]/index";
import userApi from "./user/index";
import likeApi from "./likes/index";
import countryNameApi from "./country-name/index";
import dotenv from "dotenv";
import { Request, Response } from "express";
import express from "express";
dotenv.config();

// const express = require("express");

console.log("サーバー起動中...");

const app = express();
const port = 3001;

app.use(express.json());
// app.get("/", (req: Request, res: Response) => res.send("Express on Vercel"));

// ルート設定
app.use("/api", worldPostApi);
app.use("/api", worldPostListApi);
app.use("/api", userApi);
app.use("/api", likeApi);
app.use("/api", countryNameApi);

// サーバ起動
app.listen(port, () => {
  console.log(`サーバーがhttp://localhost:${port}で起動しました`);
});

module.exports = app;
