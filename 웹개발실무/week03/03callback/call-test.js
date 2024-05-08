const fake = function (callback) {
    callback();
}

console.log("A");
fake(() => {console.log("B")});
console.log("C");