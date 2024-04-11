// users 모듈화

const express  = require("express");
const router = express.Router();

app.get('/:id', (req, res, next) => {
    res.send('사용자 정보 가져오기')
});
  
app.post('/', (req, res, next) => {
    res.send('회원가입')
});
  
app.put('/:id', (req, res, next) => {
    res.send('사용자 정보 수정')
});
  
app.delete('/:id', (req, res, next) => {
    res.send('회원탈퇴')
});

module.exports = router; // 모듈 내보내기