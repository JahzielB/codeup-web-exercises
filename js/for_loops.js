"use strict";

function showMultiplicationTable(x) {
    for (var i = 1; i <= 10; i++) {
        var q = x * i;
        console.log(x + " x " + i + " = " + q)
    }
}

var randomNum = (Math.random() * (200-20) + 20);

for (var i = 1; i <= 10; i++) {
    var randomNum = (Math.random() * (200-20) + 20).toFixed(0);
    if (randomNum % 2 === 0) {
        console.log(randomNum + " is even");
    } else {
        console.log(randomNum + " is odd");
    }
}

for (var i = 1; i < 10; i++) {
    console.log(i.toString().repeat(i));
}

for (var i = 1; i <= 100; i++) {
    if (i % 5 !== 0) {
        continue;
    }
    console.log(i);
}