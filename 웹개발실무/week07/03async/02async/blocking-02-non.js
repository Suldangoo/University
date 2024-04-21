// ./03async/02async/blocking-02-non.js
const fs = require("fs");

// 비동기로 처리
const data = fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
  }
  console.log(data);
});
console.log("코드 끝!");     
