"use strict";

var userOddNum = prompt("Enter an odd number between 1 and 50")

while (userOddNum % 2 == 0 || userOddNum > 50) {
    var newUserNum = prompt("You did not enter an odd number between 1 and 50. Please try again.")
    if (newUserNum % 2 == 0 || newUserNum > 50) {
        continue;

    } else {
        break;
    }
}