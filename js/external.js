"use strict";
console.log("Hello from inline JavaScript")
alert("Welcome to my Website!");
var userInput = prompt('What is your favorite color?:');
alert("My favorite color is also " + userInput + "!");

// Word Problem #1 from Working With Data Types, Operators, and Variables
var littleMermaid = Number(prompt("How many days will The little Mermaid be rented?"));
var brotherBear = Number(prompt("How many days will Brother Bear be rented?"));
var hercules = Number(prompt("How many days will Hercules be rented?"));
var moviePricePerDay = Number(prompt("What is the daily rental rate for movies today?"));
var totalCost = (littleMermaid + brotherBear + hercules) * moviePricePerDay;
alert("The total cost of the movies is $" + totalCost.toFixed(2) + ".");

// Word Problem #2 from Working With Data Types, Operators, and Variables
var googlePay = Number(prompt("How much is Google paying you by the hour?"));
var amazonPay = Number(prompt("How much is Amazon paying you by the hour?"));
var facebookPay = Number(prompt("How much is Facebook paying you by the hour?"));
var googleHours = Number(prompt("How many hours did you work for Google?"));
var amazonHours = Number(prompt("How many hours did you work for Amazon?"));
var facebookHours = Number(prompt("How many hours did you work for Facebook?"));
var payThisWeek = (googlePay * googleHours) + (amazonPay * amazonHours) + (facebookPay * facebookHours);
alert("The pay you will be receiving this week amounts to $" + payThisWeek.toFixed(2) + ".");

// Word Problem #3 from Working With Data Types, Operators, and Variables
var classNotFull = confirm("Is the class full?");
var noScheduleConflict = confirm("Does this class conflict with your schedule?");
var studentEnroll = classNotFull && noScheduleConflict;
function canStudentEnroll() {
    if (studentEnroll === true) {
        return alert("You may enroll in this class.");
    } else {
        return alert("You may not enroll in this class.");
    }
}
canStudentEnroll();

// Word Problem #4
var itemsPurchased = Number(prompt("How many items have you purchased?"), 10);
var offerNotExpired = confirm("Has the offer not expired?");
var premiumMember = confirm("Are you a premium member?");
var productOffer = ((itemsPurchased > 2) || premiumMember) && offerNotExpired;
function doesOfferApply() {
    if (productOffer === true) {
        return alert("The product offer can be applied!");
    } else {
        return alert("The product offer can not be applied.");
    }
}
doesOfferApply();