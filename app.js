
//모듈
const express = require('express');
const app = express();

const PORT = 3000;
//라우팅
const routes = require("./routes");
// 앱 세팅
app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", routes); //use는 미들웨어를 등록해주는 메서드

module.exports = app;
