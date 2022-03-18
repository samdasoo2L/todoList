const quotes = [
  {
    quote: "Only I can change my life. No one can do it for me.",
    author: "Carol Burnett",
  },
  {
    quote: "I find the harder I work, the more luck I have.",
    author: "Thomas Jefferson",
  },
  {
    quote: "Concentration comes out of a combination of confidence and hunger.",
    author: "Arnold Palmer",
  },
  {
    quote: "I am not afraid of storms for i am  learning how to sail my ship",
    author: "Helen Keller",
  },
  {
    quote:
      "All our dreams can come true. If we have the courage to pursue them.",
    author: "Walt Disney",
  },
  { quote: "Slow and Steady win the race.", author: "☆" },
  {
    quote: "Energy and persistence conquer all things.",
    author: "Benjamin Franklin",
  },
  {
    quote: "Nothing is particularly hard if you divide it into small jobs.",
    author: "Henry Ford",
  },
  { quote: "Thorough preparation makes its own luck.", author: "Joe Poyer" },
  { quote: "Our costliest expenditure is time.", author: "Theophrastos" },
  {
    quote: "The future depends on what we do in the present.",
    author: "Mahatma Gandhi",
  },
  {
    quote: "The best way to predict the future is to invent it.",
    author: "Alan Kay",
  },
  {
    quote:
      "He who learns but does not think, is lost! He who thinks but does not learn is in great danger.",
    author: "Confucius",
  },
  {
    quote:
      "Never be entirely idle; but either be reading, or writing, or praying or meditating or endeavoring something for the public good.",
    author: "Thomas a Kempis",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = randomQuote.quote;
author.innerText = randomQuote.author;
