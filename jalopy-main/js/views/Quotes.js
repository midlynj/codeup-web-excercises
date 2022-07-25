export default function quotesView(props) {
    console.log(props)
    return `

<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1" ></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" id="next" ></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 8"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="8" aria-label="Slide 9"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="9" aria-label="Slide 1"></button>
  </div>
  <div class="carousel-inner" style="font-family: fantasy; color: #3B94D9; margin: 20px">
    <div class="carousel-item active">
      <h1 id="q1"></h1>
    </div>
    <div class="carousel-item">
      <h1 id="q2" ></h1>
    </div>
    <div class="carousel-item">
       <h1 id="q3" ></h1>
    </div>
      <div class="carousel-item">
      <h1 id="q4" ></h1>
    </div>
    <div class="carousel-item">
      <h1 id="q5" ></h1>
    </div>
    <div class="carousel-item">
       <h1 id="q6" ></h1>
    </div>
    <div class="carousel-item">
      <h1 id="q7" ></h1>
    </div>
    <div class="carousel-item">
       <h1 id="q8" ></h1>
    </div>
      <div class="carousel-item">
      <h1 id="q9" ></h1>
    </div>
    <div class="carousel-item">
      <h1 id="q10" ></h1>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>





`;
}
const quotes = [
    {
        quote: "War is organized murder and torture against our brothers.",
        author: "Alfred Adler"
    },
    {
        quote: "Follow sound business trends, not fashion trends.",
        author: "Janice Dickinson"
    },
    {
        quote: "I'm sure we, the American people, are the butt of jokes by those in power.",
        author: "Alice Walker"
    },
    {
        quote: "If the security forces continue to be dominated as they are now by political groups or sects, then the people won't trust in them - and the result will be civil war or fragmentation of the country.",
        author: "Adnan Pachachi"
    },
    {
        quote: "We prefer world law in the age of self-determination to world war in the age of mass extermination.",
        author: "John F. Kennedy"
    },
    {
        quote: "I got a lovely check today from being a writer that I earned by sitting at home. That's rewarding.",
        author: "Harvey Fierstein"
    },
    {
        quote: "I think God's justice is making wrongs right.",
        author: "Joel Osteen"
    },
    {
        quote: "For it is mutual trust, even more than mutual interest that holds human associations together. Our friends seldom profit us but they make us feel safe. Marriage is a scheme to accomplish exactly that same end.",
        author: "H. L. Mencken"
    },
    {
        quote: "If science fiction is the mythology of modern technology, then its myth is tragic.",
        author: "Ursula K. Le Guin"
    },
    {
        quote: "Men, when they fight in movies, it's a very different style. Harrison Ford was so cool when he had the whip, and Bruce Lee was such an artist that you couldn't take your eyes off of him.",
        author: "Lucy Liu"
    },
]

export function quotesEvents() {
    for (let i = 0; i < quotes.length; i++) {
        let quotesWithAuthor = quotes[i].quote + " " + "Author: " + quotes[i].author
        // console.log(quotesWithAuthor)


        let q1 = document.getElementById("q1")
        q1.innerHTML = quotes[0].quote + " " +  "Author: " + quotes[0].author

        let q2 = document.getElementById("q2")
        q2.innerHTML =  quotes[1].quote + " " +  " Author: " + quotes[1].author

        let q3 = document.getElementById("q3")
        q3.innerHTML =  quotes[2].quote + " " +  "Author: " + quotes[2].author

        let q4 = document.getElementById("q4")
        q4.innerHTML =  quotes[3].quote + " " +  "Author: " + quotes[3].author

        let q5 = document.getElementById("q5")
        q5.innerHTML =  quotes[4].quote + " " +  "Author: " + quotes[4].author

        let q6 = document.getElementById("q6")
        q6.innerHTML =  quotes[5].quote + " " +  "Author: " + quotes[5].author

        let q7 = document.getElementById("q7")
        q7.innerHTML =  quotes[6].quote + " " +  "Author: " + quotes[6].author

        let q8 = document.getElementById("q8")
        q8.innerHTML =  quotes[7].quote + " " +  "Author: " + quotes[7].author

        let q9 = document.getElementById("q9")
        q9.innerHTML =  quotes[8].quote + " " +  "Author: " + quotes[8].author

        let q10 = document.getElementById("q10")
        q10.innerHTML =  quotes[9].quote + " " +  "Author: " + quotes[9].author







    }
    function nextQuote() {
        let m = document.getElementById("next")
    m.click()


    }
    setTimeout(nextQuote,5000)
}

// let m = document.getElementById("next")



