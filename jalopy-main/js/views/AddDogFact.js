import createView from "../createView.js"

export default function InsertDogView(props) {
    console.log(props)
    return `
<form class="container">
    <h1>New Dog Fact</h1>
    <form>
        <label for="dogFactText" class="form-label">Dog fact</label>
        <input class="form-control" list="datalistOptions" id="dogFactText" placeholder="Enter a new dog fact">
        <button class="form-control" id="insert-btn">Insert Fact</button>
    </form>
</div>
`;
}

export function InsertDogFactEvents() {
    const insertBtn = document.querySelector("#insert-btn");
    insertBtn.addEventListener("click", function(event) {
        const factText = document.querySelector("#dogFactText").value;

        if (factText.length === 0) {
            console.log("no cant do that")
            return
        } else if (factText.length > 1) {
            factText.trim()
            console.log(factText.trim())
        }

        const requestOptions = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': quote_API_Key
            },
            body: JSON.stringify([factText])
        }
        fetch("https://dogfacts.fulgentcorp.com:12250/v1/facts", requestOptions)
            .then(function(response) {
                if(!response.ok) {
                    console.log("add dog fact error: " + response.status);
                } else {
                    console.log("add dog fact ok");
                    createView("/dogs");
                }
            });
    })
}