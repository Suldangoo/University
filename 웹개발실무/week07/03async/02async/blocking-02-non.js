// ./03async/02async/blocking-02-non.js
const fs = require("fs");

const data = fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
  }
  console.log(data);
});
console.log("코드 끝!");     
