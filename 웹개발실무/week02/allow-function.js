// 1)
function add1(a, b) {
    return  a + b
}

// 2)
const add2 = function (a, b) {
    return  a + b
}

// 3)
const add3 = (a, b)  => {
    return  a + b
}

// 4)
const add4 = (a, b) => { return a + b }

// const add5 = (a, b) => return a + b 리턴은 반드시 중괄호 필요

const add6 = (a, b) => { a + b } // 효과 없음

// 5)
const add7 = (a, b) => a + b

// 함수호출
console.log(add1(2, 4))
console.log(add2(2, 4))
console.log(add3(2, 4))
console.log(add4(2, 4))
//console.log(add5(2, 4))
console.log(add6(2, 4))
console.log(add7(2, 4))

// 1) 함수 선언식
function hello(name) {
    return "Hello" + name;
}

// 2) 함수 표현식
const hello2 = function (name) {
    return "Hello" + name;
}

// 3)
const hello3 = (name) => { return "Hello" + name;}

//  4) 인수가 1개일 때 () 생략 가능
const hello4 = name => { return "Hello" + name;}

// 5) 화살표함수의 유일한 문장이 return 일 때 return 과 { } 생략 가능

const hello5 = name => "Hello" + name;