// 중간고사에선 URL을 주면 실행 결과가 어떻게 나올지 적는 것

const http = require('http');
const url = require('url');

http.createServer( (req, res) => {
    const path = url.parse(req.url, true).pathname; // 패스명 가져오기
    res.setHeader("Content-Type", "text/html");

    if (path === "/user") {
        user(req, res);
    } else if (path === "/picture") {
        picture(req, res);
    } else {
        notFound(req, res);
    }
}).listen(3000, () => {
    console.log("3000번 포트에서 실행 중")
});

const user = (req, res) => {
    res.end("[user] name : gdhong, age : 24");
};

const picture = (req, res) => {
    res.end(`<ul>
    <li>picture 1</li>
    <li>picture 2</li>
    <li>picture 3</li>
    </ul>
    `);
};

const notFound = (req, res) => {
    res.statusCode = 404;
    res.end("404 page not found");
}