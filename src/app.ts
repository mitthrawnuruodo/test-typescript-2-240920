interface Quote {
  text: string;
  author: string;
}

const quotes: Quote[] = [
  { 
    text: `Be yourself; everyone else is already taken.`, 
    author: "Oscar Wilde" 
  },
  { 
    text: `Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.`, 
    author: "Albert Einstein" 
  },
  { 
    text: `So many books, so little time.`, 
    author: "Frank Zappa"
  },
  { 
    text: `A room without books is like a body without a soul.`, author: "Marcus Tullius Cicero" 
  },
];

// Function to get a random quote
function getRandomQuote(): Quote {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

// UI handling
const quoteButton = document.getElementById("quoteButton") as HTMLButtonElement;
const quoteDisplay = document.getElementById("quoteDisplay") as HTMLParagraphElement;

quoteButton.addEventListener("click", () => {
  const randomQuote = getRandomQuote();
  quoteDisplay.innerHTML = `"${randomQuote.text}" - ${randomQuote.author}`;
});