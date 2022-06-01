"use strict"
console.log("Hello from external JavaScript");
let userFavColor = prompt("What is your favorite color?");
alert(userFavColor + " is my favorite too");

let costOfLittleMermaid = prompt("how much for little mermaid?")
let costOfBrotherBear = prompt("how much for brother bear?")
let costOfHercules = prompt("how much for hercules?")
let littleMermaid = 3 * 3, brotherBear = 5 *3, hercules = 3;
let sumOfMovies = littleMermaid + brotherBear + hercules;
alert(sumOfMovies)

let googlePay = prompt("how much for google?");
let googleHours =  prompt("how many hours worked?");
let amazonPay = prompt("how much for amazon?");
let amazonHours = prompt("how many hours worked?");
let faceBookPay = prompt("how much for facebook?");
let faceBookHours = prompt("how many hours worked?");
let google = 400 * 6, amazon = 380 * 4, faceBook = 350 * 10;
let totalPay = google + amazon + faceBook;
alert(totalPay);

let classIsNotFull = true, availability = true;
let enrollment = classIsNotFull && availability;
alert(enrollment);

let itemsBoughtMoreThan2 = true;
let offerNotExpired = true;
let discountApplied = offerNotExpired && itemsBoughtMoreThan2;
alert(discountApplied);

