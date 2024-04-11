// OK 반환 서버 생성

const http = require('http');
const server = http.createServer( (req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.end("OK");  
});

server.listen(3000, () => {
    console.log(`3000번 포트에서 서버 실행중`);
});