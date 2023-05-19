// script.js
document.addEventListener('DOMContentLoaded', function() {
    fetchAvailableCurrencies();
});

function fetchExchangeRate() {
    const apiKey = '78197c7f477d248dc54db6ad';
    const baseCurrency = 'USD';
    const targetCurrency = document.getElementById('currencySelect').value;
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${baseCurrency}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data && data.conversion_rates) {
                const conversionRates = data.conversion_rates;
                if (conversionRates[targetCurrency]) {
                    const exchangeRate = conversionRates[targetCurrency];
                    document.getElementById('exchangeRateInfo').innerText = `1 ${baseCurrency} = ${exchangeRate} ${targetCurrency}`;
                } else {
                    document.getElementById('exchangeRateInfo').innerText = 'Invalid target currency';
                }
            } else {
                document.getElementById('exchangeRateInfo').innerText = 'Unable to fetch exchange rates';
            }
        })
        .catch(error => {
            console.log('Error fetching exchange rates:', error);
            document.getElementById('exchangeRateInfo').innerText = 'Error fetching exchange rates';
        });
}

function fetchAvailableCurrencies() {
    const apiKey = '78197c7f477d248dc54db6ad';
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/codes`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data && data.supported_codes) {
                const supportedCodes = data.supported_codes;
                populateCurrencyOptions(supportedCodes);
                fetchExchangeRate(); // Call fetchExchangeRate after fetching currencies
            } else {
                console.log('Unable to fetch available currencies');
            }
        })
        .catch(error => {
            console.log('Error fetching available currencies:', error);
        });
}

function populateCurrencyOptions(currencies) {
    const currencySelect = document.getElementById('currencySelect');
    currencySelect.innerHTML = '';

    Object.entries(currencies).forEach(([code, name]) => {
        const option = document.createElement('option');
        option.value = code;
        option.text = code; // Display only the currency code
        currencySelect.appendChild(option);
    });
}


