'use strict';
function updateExchangeRates(update) {
    const newDate = document.getElementById('date');
    newDate.textContent = update.date;

    const newUsdBuyRate = document.getElementById('usd-buy-rate');
    newUsdBuyRate.textContent = update.usd.buyRate;

    const newUsdSellRate = document.getElementById('usd-sell-rate');
    newUsdSellRate.textContent = update.usd.sellRate;

    const newEurBuyRate = document.getElementById('eur-buy-rate');
    newEurBuyRate.textContent = update.eur.buyRate;

    const newEurSellRate = document.getElementById('eur-sell-rate');
    newEurSellRate.textContent = update.eur.sellRate;
}
const update = {
    date:'20 июля',
    usd: {
        buyRate:'73,82',
        sellRate:'75,32',
    },
    eur: {
        buyRate:'86,78',
        sellRate: '88,54',
    }
};

updateExchangeRates(update);
console.log(update);


