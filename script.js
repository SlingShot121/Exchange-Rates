// script.js
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
                populateCurrencyOptions(conversionRates);
                if (conversionRates[targetCurrency]) {
                    const exchangeRate = conversionRates[targetCurrency];
                    document.getElementById('exchangeRate').innerText = `1 ${baseCurrency} = ${exchangeRate} ${targetCurrency}`;
                } else {
                    document.getElementById('exchangeRate').innerText = 'Invalid target currency';
                }
            } else {
                document.getElementById('exchangeRate').innerText = 'Unable to fetch exchange rates';
            }
        })
        .catch(error => {
            console.log('Error fetching exchange rates:', error);
            document.getElementById('exchangeRate').innerText = 'Error fetching exchange rates';
        });
}

function populateCurrencyOptions(conversionRates) {
    const currencySelect = document.getElementById('currencySelect');
    currencySelect.innerHTML = '';

    Object.keys(conversionRates).forEach(currency => {
        const option = document.createElement('option');
        option.value = currency;
        option.text = currency;
        currencySelect.appendChild(option);
    });
}
