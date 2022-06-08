"use strict";

var i = 2
while (i <= 65536) {
    console.log(i);
    i*=2;
}

var allCones = Math.floor(Math.random() * 50) + 50;

do {
    let conesBought = Math.floor(Math.random() * 5) + 1;

    if (conesBought >= allCones) {
        allCones = allCones - conesBought

        console.log(conesBought + "cones sold. I have " + allCones)
    } else {
        console.log("I dont have enough cones")
    }


} while (allCones ! == 0)
console.log("All cones are sold")