const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("HOME");
});

app.listen(3000, () => {
    console.log("3000번 포트에서 실행중");
});