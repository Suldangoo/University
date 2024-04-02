function repeat(count) {
    for(let idx=1; idx<=count; idx++) {
        console.log(idx);
    }
}

function repeatDouble(count) {
    for(let idx=1; idx<=count; idx++) {
        console.log(idx * 2);
    }
}

repeat(5);
repeatDouble(5);


function repeatFree(count, num) {
    for(let idx=1; idx<=count; idx++) {
        console.log(idx * num);
    }
}

repeatFree(5, 1);
repeatFree(5, 3);