"use strict"
console.log("Hello from external JavaScript");

alert("Welcome to my website!");

let userFavColor = prompt("What is your favorite color?");
alert(userFavColor + " is my favorite too");

let costPerDay = 3;
let moviesToRent = prompt("how many days do you wish to rent this movie?");
let sumOfMovies = moviesToRent * costPerDay
alert("The total amount is $" + sumOfMovies);

let googlePay = prompt("how much for google?");
let googleHours =  prompt("how many hours worked?");
let amazonPay = prompt("how much for amazon?");
let amazonHours = prompt("how many hours worked?");
let faceBookPay = prompt("how much for facebook?");
let faceBookHours = prompt("how many hours worked?");
let google = 400 * 6, amazon = 380 * 4, faceBook = 350 * 10;
let totalPay = google + amazon + faceBook;
alert("The total amount you made is $" + totalPay);

let classIsNotFull = true, availability = true;
let enrollment = classIsNotFull && availability;
alert(enrollment);

let itemsBoughtMoreThan2 = true;
let offerNotExpired = true;
let discountApplied = offerNotExpired && itemsBoughtMoreThan2;
alert(discountApplied);

