// 1)
function add1(a, b) {
    return  a + b ;
}

// 2)
const add2 = function (a, b) {
    return  a + b ;
}

// 3)
const add3 = (a, b)  => {
    return  a + b ;
}

// 4)
const add4 = (a, b) => { return a + b; }

// 5)
const add5 = (a, b) => a + b; 

// 함수호출
console.log(add1(2, 4));
console.log(add2(2, 4));
console.log(add3(2, 4));
console.log(add4(2, 4));
console.log(add5(2, 4));