// script.js
function fetchExchangeRate() {
    const apiKey = '78197c7f477d248dc54db6ad';
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data && data.conversion_rates && data.conversion_rates.ZAR) {
                const exchangeRate = data.conversion_rates.ZAR;
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
