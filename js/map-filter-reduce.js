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
// for (var i = 0; i < users.length; i++) {
//     if (users[i].languages.length >= users[1].languages.length) {
//         userObjects.push(users[i]);
//     }
// }
// console.log(userObjects);

let userObject = users.filter(function(user) {
    if( user.languages.length >= 3) {
        return true
    }
    // }
   return false

})
console.log(userObject)


// let userEmail = [];
// for (var i = 0; i < users.length; i ++) {
//     if (users[i].email !== "") {
//         userEmail.push(users[i].email);
//     }
// } console.log(userEmail);

let userEmail = users.map(function(user) {
    if (user.email !== "") {
        return user.email
    }

});
console.log(userEmail)

let totalExp = users.reduce(function (total,user) {
    return total + user.yearsOfExperience;
}, 0)



let allUserNames = users.reduce(function(allUserNamesSoFar, user) {
 console.log("all user names so far  " + allUserNamesSoFar);

 return allUserNamesSoFar + user.name + " ,";
},"")

allUserNames = allUserNames.substring(0, allUserNames.length -2)
console.log(allUserNames);

