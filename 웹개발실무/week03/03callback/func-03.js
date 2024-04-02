// 원본 함수
let varC = function funcC() {
    return 1;
}

// 화살표 함수로 변환
let varC2 = () => {
return 1;
}

// 화살표 함수로 최대한 축약
let varC3 = () => 1;

console.log(varC());
console.log(varC2());
console.log(varC3());