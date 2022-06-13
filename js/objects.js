(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    let person = {
        firstName : "Midlyn",
        lastName : "Joseph"

    }
    console.log(person.firstName);
    console.log(person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

person.sayHello = function () {
    console.log("Hello from " + person.firstName + " " + person.lastName)
}
person.sayHello()


    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];
    let discountTotal = [180 - (180 * 0), 250 - (250 * 0.12),320 - (320 * 0.12)];
    const discount = [0, 0.12, 0.12];



    // for (var i = 0; i < clientNames.length; i++) {
    //     console.log(clientNames[i] + " price before discount is $" + clientTotal[i]
    //         + " . Discount applied is " + discount[i] + "%. After discount your total is $" + discountTotal[i])
    //
    // }
var i = -1;
    shoppers.forEach(function(ele) {

        i++;
        console.log(shoppers[i].name + " total is $" + shoppers[i].amount +
            " . Discount applied is " + discount[i]
            + "%  . After discount your total is $" + discountTotal[i]);
    })





    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    let books = [
        {
            title: "The Three Little Pigs",
            author:{
                    firstName: "Steven",
                    lastName: "Kellog"
            }
        },

        {
            title: "The Teacher From The Black Lagoon",
            author:{
                    firstName: "Mike",
                    lastName: "Thaler"
            }
        },

        {
            title: "The Cat In The Hat",
            author:{
                    firstName: "Dr.",
                    lastName: "Suess"
            }
        },

        {
            title: "Junie B Jones and Her Big Fat Mouth",
            author:{
                    firstName: "Barbara",
                    lastName: "Park"
            }
        },

        {
            title: "No. David!",
            author:{
                    firstName: "David",
                    lastName: "Shannon"
            }
        }

    ];


    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    for (var i = 0; i < books.length; i++) {
        console.log("The book number is  #" + Number(i + 1) +". " +
            "The title is " +books[i].title + ". The author is "
            + books[i].author.firstName + " " + books[i].author.lastName + ".")
    };

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */



})();
