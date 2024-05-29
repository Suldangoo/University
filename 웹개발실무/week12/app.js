// ./app.js
const express = require("express");
const dbConnect = require("./config/dbConnect");

const app = express();
const router = express.Router();

const port = 3000;

// app.get('/',(req, res) => {
//   res.status(200).send("Hello Node!");
// });

dbConnect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/contacts", require("./routes/contactRoutes"));

app.listen(port, () => {
  console.log(`${port}번 포트에서 서버 실행 중`);
});
