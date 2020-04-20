"use strict";
console.log("Hello from inline JavaScript")
alert("Welcome to my Website!");
var userInput = prompt('What is your favorite color?:');
alert("My favorite color is also " + userInput + "!");

// Word Problem #1 from Working With Data Types, Operators, and Variables
var littleMermaid = 3;
var brotherBear = 5;
var hercules = 1;
var moviePricePerDay = 3;
var totalCost = (littleMermaid + brotherBear + hercules) * 3;
alert("The total cost of the movies is $" + totalCost + ".");

// Word Problem #2 from Working With Data Types, Operators, and Variables
var googlePay = 400;
var amazonPay = 380;
var facebookPay = 350;
var googleHours = 6;
var amazonHours = 4;
var facebookHours = 10;
var payThisWeek = (googlePay * googleHours) + (amazonPay * amazonHours) + (facebookPay * facebookHours);
alert("The pay I will be receiving this week amounts to $" + payThisWeek + ".");

// Word Problem #3 from Working With Data Types, Operators, and Variables
var classNotFull = true;
var noScheduleConflict = true;
var studentEnroll = classNotFull && noScheduleConflict;
function canStudentEnroll() {
    if (studentEnroll === true) {
        return alert("This class is not full and does not conflict with your schedule.");
    } else {
        return alert("This class is full and/or conflicts with your schedule.");
    }
}
canStudentEnroll();

// Word Problem #4
var itemsPurchased = parseInt(prompt("How many items have you purchased?"), 10);
var offerNotExpired = true;
var premiumMember = false;
var productOffer = ((itemsPurchased > 2) || premiumMember) && offerNotExpired;
function doesOfferApply() {
    if (productOffer === true) {
        return alert("The product offer can be applied!");
    } else {
        return alert("The product offer can not be applied.");
    }
}
doesOfferApply();