const express = require('express');
const app = express();

app.get( "/", (req, res) => { // 루트를 만나면 콜백 함수
    res.status(200);
    res.send("Hello Express!");
} );

app.listen( (req, res) => {
    console.log(`3000 포트에서 실행중`);
} );