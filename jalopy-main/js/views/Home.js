import {showNotification} from "../messaging.js";
import {getUser} from "../auth.js";

const BASE_URI = `${BACKEND_HOST}/api/s3/download`;

export default function Home(props) {
    return `
        <header>
            <h1   style="text-align: center">Hello Jalopy!</h1>
        </header>
        <main>
            <div>
                <img src="assets/jalopy1.jpeg"  id="jalopy1">
                <p>
                    Welcome to my Jalopy application!
                </p>    
                 <input type="button" id="img-button" value="switch">
            </div>
        </main>
    `;
}

let imageCount = 1
console.log(imageCount)

let imagesCycle = [];
imagesCycle.push("assets/jalopy1.jpeg")
imagesCycle.push("assets/jalopy2.jpeg")
imagesCycle.push("assets/jalopy3.jpeg")
console.log(imagesCycle)
export function HomeEvents() {
    // // TODO: use an enum for message type
    // // const authority = getUserRole();
    // const user = getUser();
    // if(!user) {
    //     showNotification("Welcome visitor", "secondary");
    // } else {
    //     showNotification("Welcome " + user.userName, "info");
    // }
    let switchImages = document.getElementById("img-button")
    switchImages.addEventListener("click", function (event){
        let jalopy1 = document.getElementById("jalopy1")
       jalopy1.setAttribute("src", imagesCycle[imageCount++])
        console.log(imageCount)
    if (imageCount >= 3) {
        imageCount = 0
        console.log(imageCount)
    }

    })
}