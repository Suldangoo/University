const express = require('express');
const app = express();

const customerRoute = require('./routes/customer');

app.use('/customer', customerRoute);

app.use(express.json({
    limit: '50mb'
}));

app.listen(3000, () => {
    console.log(`3000번 포트에서 서버 실행중`);
});