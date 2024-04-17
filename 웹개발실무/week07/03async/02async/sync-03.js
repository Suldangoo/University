// ./03async/02async/sync-03.js
// 이 코드의 비동기 방식은 async-03.js 참고
const fs = require("fs");

let files = fs.readdirSync("./"); // Sunc가 붙었으므로 동기함수
console.log(files);

console.log("Code is done.");
