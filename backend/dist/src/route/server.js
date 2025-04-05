"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./world-posts/index"));
const index_2 = __importDefault(require("./world-posts/[id]/index"));
const index_3 = __importDefault(require("./user/index"));
const index_4 = __importDefault(require("./likes/index"));
const index_5 = __importDefault(require("./country-name/index"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
dotenv_1.default.config();
// const express = require("express");
console.log("サーバー起動中...");
const app = (0, express_1.default)();
const port = 3001;
app.use(express_1.default.json());
// app.get("/", (req: Request, res: Response) => res.send("Express on Vercel"));
// ルート設定
app.use("/api", index_1.default);
app.use("/api", index_2.default);
app.use("/api", index_3.default);
app.use("/api", index_4.default);
app.use("/api", index_5.default);
// サーバ起動
app.listen(port, () => {
    console.log(`サーバーがhttp://localhost:${port}で起動しました`);
});
exports.default = app;
