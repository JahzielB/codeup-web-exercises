(function(){

"use strict";
// ===== MINI PROBLEMS
// Write a function, returnFive, that returns the number five. No inputs should be defined.
function returnFive() {
    return 5;
}

// Write a function, isFive, that takes in an input and returns the boolean value true if the passed argument is the number 5 or the string "5". Return false otherwise.
function isFive(num) {
    return num == 5;
}

// Write a function, isShortWord, that takes in a string and returns the boolean value true if the passed argument is shorter than 5 characters. Return false otherwise.
function isShortWord(words) {
    return words.length < 5;
}

// Write a function, isSameLength, that takes in two string inputs and returns the boolean value true if the passed arguments are the same length. Return false otherwise.
function isSameLength(str1, str2) {
    return str1.length === str2.length;
}

// Write a function, getSmallerSegment, that takes in a string and a number input. The function should return a substring of the first argument that is as many characters long as the second argument in lowercase.
// example input: getSmallerSegment("Codeup", 3)
// example output: "cod"

function getSmallerSegment(str1, num1) {
    return str1.substring(0, num1).toLowerCase();
}

})();