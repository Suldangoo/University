function greetFunc() {
    console.log("hello");
}

greetFunc();

// 변수가 객체가 되어 함수처럼 사용이 가능해짐
let greeting = greetFunc;
greeting();