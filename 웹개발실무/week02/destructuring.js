// Object
function getPerson() {
    return {
        firstName: "GilDong" ,
        lastName: "Hong",
        age: 20,
    }
}

console.log(firstName);    // GilDong

// 객체 비구조화 할당(구조 분해)
let  { firstName, lastName   }  = getPerson();

console.log(firstName);    // GilDong
console.log(lastName);    // Hong

// Array
function getScores() {
   return  [ 70, 80, 90 ];
}

let scores = getScores();

// let x = scores[0];
// let y = scores[1];
// let z = scores[2];

// 배열 비구조화 할당(구조 분해)
let [ x, y, z ] = getScores();


// 객체
function displayFullName( { firstName, lastName} ) {
  console.log(`${lastName} ${firstName}`);    // Hong GilDong
}

displayFullName( getPerson() );