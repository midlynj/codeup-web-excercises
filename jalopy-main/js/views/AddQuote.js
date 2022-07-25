import createView from "../createView.js"

export default function addNewQuote(props) {
    return `
<form class="container">
    <h1>New Quote</h1>
    <form>
        <label for="dogFactText" class="form-label">Dog fact</label>
        <input class="form-control" list="datalistOptions" id="quote" placeholder="Enter quote">
        <input type="input" placeholder="Enter author" id="author">
      
        <button class="form-control" id="insert-btn">Insert quote</button>
    </form>
</div>
`;
}