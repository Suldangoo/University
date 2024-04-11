// 중간고사에선 URL을 주면 실행 결과가 어떻게 나올지 적는 것

const http = require('http');
const url = require('url');

const server = http.createServer( (req, res) => {
    const path = url.parse(req.url, true).pathname; // 패스명 가져오기
    res.setHeader("Content-Type", "text/html");

    if (path === "/user") {
        res.end("[user] name : gdhong, age : 24");
    } else if (path === "/picture") {
        res.end(`<ul>
            <li>picture 1</li>
            <li>picture 2</li>
            <li>picture 3</li>
            </ul>
        `);
    } else {
        res.statusCode = 404;
        res.end("404 page not found");
    }
});

server.listen(3000, () => {
    console.log("3000번 포트에서 실행 중")
});