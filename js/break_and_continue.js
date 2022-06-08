"use strict";

let x = prompt("Enter an odd number between 1 and 50.")

while (x % 2 == 0) {
    x = prompt("Enter an odd number between 1 and 50.")
    if (x % 2 != 0 && x > 0 && x < 50) {
        break;
    }
}for (var i = 1; i < 50; i+=2) {
        if ( i == x) {
            console.log(i + " is skipped");
            continue;
        }   console.log("Here is an odd number " + i);
}
