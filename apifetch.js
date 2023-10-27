function convert () {
    const countrySymbol = document.getElementById('symbol').value;
    const amountInUSD = document.getElementById('amount').value;

const options = {
    method: 'GET',
    headers: {
        accept: 'application-json',
        'X-API-KEY': 'fab897242bf18d6aac07f41bfd2ec3be75569b01bcea0d1ce5efdad30306a60'
    }
};
    const apiUrl = 'https://api.chimoney.io/v0.2/info/usd-amount-in-local?destinationCurrency=USD&amountInUSD=1'
    fetch(apiUrl, options)
    .then(response => response.json())
    .then(response => { document.getElementById('result').innerText = `Result: ${JSON.stringify(response)}`;
})
    .catch(err => console.error(err));
}