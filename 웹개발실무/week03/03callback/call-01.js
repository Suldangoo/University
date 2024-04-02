function main(value) {
    value();
}

function sub() {
    console.log("sub");
}

main(sub) // 함수 안에 매개변수로 함수를 넣음
// 여기서 sub는 콜백 함수

// 파라미터에 함수 자체를 삽입 가능
main(function sub2() {
    console.log("sub2");
})

// 그 마저도 화살표 함수로 변환
main( () => {console.log("sub3");});