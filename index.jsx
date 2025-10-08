const quotes = [
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
  { text: "Get busy living or get busy dying.", author: "Stephen King" },
  { text: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
  { text: "If you want to live a happy life, tie it to a goal, not to people or things.", author: "Albert Einstein" },
  { text: "Never let the fear of striking out keep you from playing the game.", author: "Babe Ruth" },
  { text: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
  { text: "In the end, it's not the years in your life that count. It's the life in your years.", author: "Abraham Lincoln" }
];

function randomIndex(exclude = -1) {
  let i = Math.floor(Math.random() * quotes.length);
  while (i === exclude) i = Math.floor(Math.random() * quotes.length);
  return i;
}

function App() {
  const [index, setIndex] = React.useState(() => randomIndex());
  const [quote, setQuote] = React.useState(quotes[index]);

  React.useEffect(() => {
    setQuote(quotes[index]);
  }, [index]);

  const handleNew = () => setIndex(randomIndex(index));
  const tweet = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`${quote.text} — ${quote.author}`)}`;

  return (
    <div className="page">
      <div id="quote-box" className="box">
        <div id="text" className="quote">“{quote.text}”</div>
        <div id="author" className="author">— {quote.author}</div>
        <div className="controls">
          <a id="tweet-quote" href={tweet} target="_blank" rel="noopener noreferrer" className="tweet">
            Tweet
          </a>
          <button id="new-quote" onClick={handleNew} className="button">
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
