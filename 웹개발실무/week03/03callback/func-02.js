let varA = function funcA() {
    console.log("funcA");
}

let varB = function() {
    console.log("funcB");
    return "Hello"
}

varA();
// funcA(); 오류터짐
console.log(varB());