"use strict";


async function userLastCommit(response) {
        let dateOfCommit = await response.json()
        console.log(response)
        console.log(`Last commit was on ${dateOfCommit[0].created_at}`)

}
fetch('https://api.github.com/users/midlynj/events/public', {headers: {'Authorization': gitKey}})

    .then(userLastCommit)
    .catch(function(error){
        console.log("error" + error)
})
