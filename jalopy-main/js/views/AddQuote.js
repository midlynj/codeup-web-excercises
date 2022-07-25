import createView from "../createView.js"

export default function addNewQuoteView(props) {
    return `
<form class="container">
    <h1>Quotes</h1>
    <form>
        <label for="dogFactText" class="form-label">New quotes</label>
        <input class="form-control" list="datalistOptions" id="quote" placeholder="Enter quote">
        <input class="form-control" list="datalistOptions"  type="input" placeholder="Enter author" id="author">
      
        <button class="form-control" id="quote-btn">Insert quote</button>
    </form>
</div>
<h1 id="userQuote"></h1>
`;
}

export function addNewQuoteEvents() {
    let quoteButton = document.getElementById("quote-btn");
    quoteButton.addEventListener("click", function (event){


        let quoteInput = document.getElementById("quote");
        let authorName = document.getElementById("author");
        let userQuote = document.getElementById("userQuote");
        userQuote.innerText = `Quote: ${quoteInput.value}  Author:${authorName.value}`




        if (quoteInput.value.length === 0) {
            userQuote.innerText = "Quote can't be empty"
            console.log("empty")


        } else if (authorName.value.length === 0) {
            userQuote.innerText = `Quote: ${quoteInput.value}  Author:${authorName.value = "Anonymous"}`
            // authorName.value = "Anonymous"

        }

        const requestQuotes = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': quote_API_Key
            },
            body: JSON.stringify([{quote:quoteInput.value,author:authorName.value}])
        }
        fetch("https://dogfacts.fulgentcorp.com:12250/v1/quotes", requestQuotes)
            .then(function(response) {
                if(!response.ok) {
                    console.log("quote error: " + response.status);
                } else {
                    console.log("quote went through");
                    createView("/quotes");
                }
            });
    })






}
