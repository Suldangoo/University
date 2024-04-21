function orderFood(callback) {
    setTimeout( () => {
        const food = '갈비탕';
        callback(food);
    }, 3000);
}

function cooldownFood(food, callback) {
    setTimeout( () => {
        const cooldownedfood = `식은 ${food}`;
        callback(cooldownedfood);
    }, 2000)
}

function freezeFood(food, callback) {
    setTimeout( () => {
        const freezedfood = `냉동된 ${food}`;
        callback(freezedfood);
    }, 5000);
}

orderFood( (tmp1) => {
    console.log(tmp1);
    cooldownFood(tmp1, (tmp2) => {
        console.log(tmp2);
        freezeFood(tmp1, (tmp3) => {
            console.log(tmp3);
        })
    });
});