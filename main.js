// Variables  
let btn = document.getElementById("newquote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

// Array of Objects
const quotes = [
    // 0
    {
        // properties
        quote: `"The best way to find yourself is to lose yourself in the service of others."`,
        person: ` Mahatma Gandhi`
    }
    ,
    // 1
    {
        // properties
        quote: `"If you want to live a happy life, tie it to a goal, not to people or things."`,
        person: ` Albert Einstein`
    }
    ,
    // 2
    {
        // properties
        quote: `"At his best, man is the noblest of all animals; separated from law and justice he is the worst."`,
        person: `Aristotle`
    }
    ,
    // 3
    {
        // properties
        quote: `"Your time is limited, so dont waste it living someone else's life."`,
        person: ` Steve Jobs`
    }
    ,
    // 4
    {
        // properties
        quote: `"Tell me and I forget. Teach me and I remember. Involve me and I learn."`,
        person: ` Benjamin Franklin`

    }
    ,
    // 5
    {
        // properties
        quote: `"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough."`,
        person: `Oprah Winfrey`
    }
    ,
    // 6
    {
        // properties
        quote: `"t does not matter how slowly you go as long as you do not stop."`,
        person: `Confucius`
    }
    ,
    // 7
    {
        // properties
        quote: `"Our lives begin to end the day we become silent about things that matter."`,
        person: `Martin Luther King, Jr.`
    }
    ,
    // 8
    {
        // properties
        quote: `"Remember that not getting what you want is sometimes a wonderful stroke of luck."`,
        person: `Dalai Lama`
    }
    ,
    // 9
    {
        // properties
        quote: `"The journey of a thousand miles begins with one step."`,
        person: `Lao Tzu`
    }
    ,
];

btn.addEventListener('click', function () {

    let random = Math.floor(Math.random() * quotes.length); // quotes.length => 10 // Math.random() => 0:1 // Math.floor => 0:9
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

}
)


