async function getNewQuote() {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    return data.slip.advice;
}

function displayQuote() {
    const quoteDisplay = document.getElementById('quoteDisplay');
    getNewQuote().then(quote => {
        quoteDisplay.textContent = `"${quote}"`;
    });
}
document.querySelector('button').addEventListener('click', displayQuote);