const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// 다음 문장 추가
app.get('/sayhello/:name', (req, res) => {
    res.status(200);
    let name = req.params.name;

    res.send(`<h1>Hello, ${name}`);
})

// 다음 문장 추가
// error
app.use( (req, res) => {
    res.status(404).send("File Not Found");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})