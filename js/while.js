"use strict";

// var i = 2;
// while (i <= 65536) {
//     console.log(i);
//     i = i * 2;
// }

var allCones = Math.floor(Math.random() * 50) + 50;
// console.log("Random cone number is " + allCones)
do {
    var conesBought = Math.floor(Math.random() * 5) + 1;
    console.log(allCones + " left for sale")
    if (conesBought < allCones) {
        console.log(conesBought + " cones sold...");
    } else if (conesBought > allCones) {
        console.log("Cannot sell you " + conesBought + " I only have " + allCones);
    } else {
        console.log("Yay! I sold them all.")
    }
    allCones = allCones - conesBought;
} while (allCones > 0);
