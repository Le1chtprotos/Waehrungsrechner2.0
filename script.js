let api = 'https://v6.exchangerate-api.com/v6/b1575eb216e1fbcb9b4614dd/latest/USD'

const amountInput = document.getElementById("amount");
const fromDropDown = document.getElementById("fromselect");
const toDropDown = document.getElementById("toselect");
const result = document.getElementById("result")

//Create dropdown from currencie
currencies.forEach((currency) => {
    const option = document.createElement("option");
    option.value = currency;
    option.text = currency;
    fromDropDown.add(option);
});

//Create dropdown to currencies
currencies.forEach((currency) => {
    const option = document.createElement("option");
    option.value = currency;
    option.text = currency;
    toDropDown.add(option);
});

fromDropDown.value = "EUR";
toDropDown.value = "USD";
/*
let convertCurrency = () => {
    const amount = document.querySelector("#amount").value;
    const fromCurrency = fromDropDown.value;
    const toCurrency = toDropDown.value;

    if(amount.length != 0){
        fetch(api)
            .then((resp) => resp.json)
            .then((data) => {
                let fromExchaneRate = data.conversion_rates[fromCurrency];
                let toExchangeRate = data.conversion_rates[toCurrency];
                const convertedAmount = (amount / fromExchaneRate) * toExchangeRate;
                result.innerHTML = `${amount} ${fromCurrency} ${toCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
            });
        result.value = `${amount} ${fromCurrency} ${toCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
    }
    else{
        alert("Bitte einen wert angeben");
    }
};
document
    .querySelector("#btn_convert")
    .addEventListener("click", convertCurrency);
window.addEventListener("load", convertCurrency);
*/
function calc(){
    const amountToCalc = amountInput.value;
    const fromCurrency = fromDropDown.value;
    const toCurrency = toDropDown.value;

    fetch(api)
    .then((resp) => resp.json())
    .then((data) => {
        let fromExchangeRate = data.conversation_rates[fromCurrency];
        let toExchangeRate = data.conversation_rates[toCurrency];
        const convertedAmount = (amountToCalc / fromExchangeRate) * toExchangeRate;
        result.innerHTML = `${convertedAmount.toFixed(2)}`
    });
}