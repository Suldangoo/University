// callback 함수 표현식

function funcA() {
    console.log("funcA");
}

funcA();
let varA = funcA; // 함수 그 자체가 값으로서 변수에 삽입됨
console.log(varA);
varA(); // 함수가 실행됨