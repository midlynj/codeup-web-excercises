"use strict"

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// let userObjects = [];
// for (var i = 0 ; i < users.length; i++) {
//     if (users[i].languages.length >= 3) {
//         userObjects.push(users[i])
//     }
// }console.log(userObjects)

let userObject = users.filter(function(user) {
    if (user.languages.length >= 3) {
        return true;
    }else {
        return false;
    }
})
console.log(userObject);

let userMap = users.map(function(user) {
    if (user.email !== "") {
        return user.email;

    }
})
console.log(userMap);

let userReduce = users.reduce(function (exp,user) {
    return user.yearsOfExperience +  exp;

},0);
console.log(userReduce);
console.log("Each worker has about " + userReduce / users.length + " years of experience");


let userLongestEmail = users.reduce(function (longestEmail,user) {
    if (user.email.length >= longestEmail.length) {
        return user.email;
    } else {
        return longestEmail;
    }

},"")
console.log(userLongestEmail);


let userString = users.reduce(function(instructor, user) {
    if (user.name !== "") {
        return instructor += user.name + " , ";

    }

    },"")
console.log(userString)

// let instructors =[];
//
// for (var i =0; i < users.length; i++) {
//     if (users[i].name !=="") {
//         instructors.push(users[i].name);
//     }
// }
// console.log(" Your instructors are:" + instructors.join(","));





// for (var i = 0; i <users.length; i++) {
//     console.log(users[i].name + " " + users[i].languages)
// }

let userLanguages = users.reduce(function (languages, user) {
    return languages + user.languages.join(",") +  ","

},"")
console.log(userLanguages);
let x = userLanguages.split(",")
// console.log(x)

let noRepeatedLanguages = [...new Set(x)];

console.log(noRepeatedLanguages);
