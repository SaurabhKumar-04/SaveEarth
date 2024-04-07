document.addEventListener("DOMContentLoaded", function() {
    const quoteElement = document.getElementById("typed-quote");
    const quotes = [
        "Reduce, Reuse, Recycle",
        "“Plastic pollution-free world is not a choice but a commitment to life – a commitment to the next generation.\” – Amit Ray",
        "Think green, act green, live green",
        "Every small action makes a big difference",
        "The Earth does not belong to us, we belong to the Earth",
        "The greatest threat to our planet is the belief that someone else will save it"
       
    ];

    function getRandomQuote() {
        return quotes[Math.floor(Math.random() * quotes.length)];
    }

    function typeQuote(quote) {
        let i = 0;
        const typeInterval = setInterval(function() {
            if (i < quote.length) {
                quoteElement.innerHTML += quote.charAt(i);
                i++;
            } else {
                clearInterval(typeInterval);
            }
        }, 50); // Adjust typing speed (milliseconds)
    }

    // Display a new random quote each time the page loads
    const randomQuote = getRandomQuote();
    typeQuote(randomQuote);
});
