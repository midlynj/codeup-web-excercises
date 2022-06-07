"use strict"

function showMultiplicationTable() {
    for (var i = 7, j = 1; i <= 70, j < 11; i += 7, j++) {
        console.log("7 * "  + j + " = " + i)
    }
} showMultiplicationTable();

for (var i = 1; i < 11; i++) {
    let randomNumbers = Math.floor(Math.random() * 200) + 20;
    if (randomNumbers % 2 == 0) {
        console.log(randomNumbers  + " is even")
        } 		else {
        console.log(randomNumbers  + " is odd")
        }
}

for (var i = 0; i < 10; i++) {
    let x = [1,22,333,4444,55555,666666,7777777,88888888,9999999999]
    console.log(x[i]);
}

for (var i = 100; i >= 5; i -= 5) {
    console.log(i);
}

