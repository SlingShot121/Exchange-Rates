// script.js
function fetchExchangeRate() {
    const apiKey = 'YOUR_API_KEY';
    const url = `https://v6.exchangeratesapi.io/latest?base=USD&symbols=ZAR&apiKey=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data && data.rates && data.rates.ZAR) {
                const exchangeRate = data.rates.ZAR;
                document.getElementById('exchangeRate').innerText = `1 USD = ${exchangeRate} ZAR`;
            } else {
                document.getElementById('exchangeRate').innerText = 'Unable to fetch exchange rate';
            }
        })
        .catch(error => {
            console.log('Error fetching exchange rate:', error);
            document.getElementById('exchangeRate').innerText = 'Error fetching exchange rate';
        });
}
