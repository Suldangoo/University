// boards 모듈화

const express = require("express");
const router = express.Router();

app.get('/', (req, res, next) => {
    res.send('게시글 가져오기')
});
  
app.post('/', (req, res, next) => {
    res.send('게시글 쓰기')
});
  
app.put('/:id', (req, res, next) => {
    res.send('게시글 수정')
});
  
app.delete('/:id', (req, res, next) => {
    res.send('게시글 삭제')
});

module.exports = router;