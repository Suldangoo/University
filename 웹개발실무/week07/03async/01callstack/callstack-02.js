// ./03async/01callstack/callstack-02.js

console.log("1");
setTimeout(() => console.log(2), 1000);
// setTimeout은 실행되는 순간 Node API 큐로 전송
// 1초가 지나면 다시 콜스택으로 복귀
// 만약 파라미터가 1000ms가 아닌 0이어도, 시간 걸리는 메소드이기 때문에 132 순서대로 출력
console.log("3");