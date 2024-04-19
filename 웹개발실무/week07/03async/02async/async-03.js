// ./03async/02async/async-03.js
const fs = require("fs");

// 비동기 함수이기 때문에 후에 실행됨
let files = fs.readdir("./", (err, files) => {
  if (err) {
    console.error(err);
  }
  console.log(files);
});

console.log("Code is done.");
