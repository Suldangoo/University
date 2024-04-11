// 모듈을 불러와 서버를 호스트

const express = require("express");
const app = express();

const hostname = '127.0.0.1';
const port = 3000;

const users = require("./routes/users.js"); // users 모듈 불러오기
const boards = require("./routes/boards.js"); // boards 모듈 불러오기

app.use('/users', users);
app.use('/boards', boards);

app.listen(port, () => {
    console.log(`Express is running on http://${hostname}:${port}/`);
  } );  