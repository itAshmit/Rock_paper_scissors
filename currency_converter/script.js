// Example API keys (replace with your actual keys)
const currencyApiKey = 'YOUR_CURRENCY_API_KEY'; // Replace with your actual FreeAPI key
const flagApiUrl = 'https://flagcdn.com/16x12/'; // Example flag API URL

async function convertCurrency() {
    const fromAmount = document.getElementById('from-amount').value;
    const fromCurrency = 'USD'; // Replace with dynamic selection if needed
    const toCurrency = 'EUR'; // Replace with dynamic selection if needed

    if (fromAmount === '') {
        alert('Please enter an amount to convert.');
        return;
    }

    try {
        // Fetch conversion rate from FreeAPI
        const response = await fetch(`https://free.currconv.com/api/v7/convert?q=${fromCurrency}_${toCurrency}&compact=ultra&apiKey=${currencyApiKey}`);
        const data = await response.json();
        const rate = data[`${fromCurrency}_${toCurrency}`];
        const toAmount = (fromAmount * rate).toFixed(2);

        document.getElementById('to-amount').value = toAmount;

        // Update flags
        document.getElementById('from-flag').src = `${flagApiUrl}${fromCurrency.toLowerCase()}.png`;
        document.getElementById('to-flag').src = `${flagApiUrl}${toCurrency.toLowerCase()}.png`;
    } catch (error) {
        console.error('Error fetching conversion data:', error);
        alert('There was an error fetching the conversion data. Please try again later.');
    }
}

// Example to dynamically change currency codes and flag display based on user input
document.getElementById('from-amount').addEventListener('input', function() {
    const fromCurrency = 'USD'; // Update this based on your currency input mechanism
    document.getElementById('from-flag').src = `${flagApiUrl}${fromCurrency.toLowerCase()}.png`;
});

document.getElementById('to-amount').addEventListener('input', function() {
    const toCurrency = 'EUR'; // Update this based on your currency input mechanism
    document.getElementById('to-flag').src = `${flagApiUrl}${toCurrency.toLowerCase()}.png`;
});
