// 콜백 응용

function repeat(count, callback) {
    for(let idx=1; idx<=count; idx++) {
        callback(idx);
    }
}

repeat(5, function(idx) {
    console.log(idx);
});

repeat(5, function(idx) {
    console.log(idx * 2);
});