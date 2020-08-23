const quotes = [
    {
        name:"Mae West",
        quote:"You only live once, but if you do it right, once is enough."
    },
    {
        name:"J.K. Rowling",
        quote:"It does not do to dwell on dreams and forget to live."
    },
    {
        name:"Mark Twain",
        quote:"Good friends, good books, and a sleepy conscience: this is the ideal life."
    },
    {
        name:"Allen Saunders",
        quote:"Life is what happens to us while we are making other plans."
    },
    {
        name:"Pablo Picasso",
        quote:"Everything you can imagine is real."
    }
]

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click',displayQuote);

function displayQuote(){
    let number = Math.floor(Math.random()*quotes.length);
     quoteAuthor.innerHTML = quotes[number].name;
     quote.innerHTML = quotes[number].quote;
}