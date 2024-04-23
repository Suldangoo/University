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