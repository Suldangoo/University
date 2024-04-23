const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("Hello World");
});

// 해당 라우트의 파람스 입력하면 반영
app.get('/sayhello/:name', (req, res) => {
    res.status(200);
    let name = req.params.name;

    res.send(`<h1>Hello, ${name}!`);
});

// 위 라우트가 아닌 모든 라우트에서 에러 표시
app.use((req, res) => {
    res.status(404).send('File Not Found');
});

app.listen(port, () => {
    console.log(`${port}번 포트에서 서버 실행중`);
});