// 1)
function add(a, b) {
    return  a + b ;
}

// 2)
const add = function (a, b) {
    return  a + b ;
}

// 3)
const add = (a, b)  => {
    return  a + b ;
}

// 4)
const add = (a, b) => {   a + b ; }

// 5)
const add = (a, b) => (a + b) ; 

// 함수호출
add(2, 4);