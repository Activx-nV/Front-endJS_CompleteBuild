//const clubCardCalc = () => {
const formCard = document.querySelector('#card_order'),
    priceTotal = document.getElementById('price-total'),
    month1 = document.querySelector('#m1'),
    month6 = document.querySelector('#m2'),
    month9 = document.querySelector('#m3'),
    month12 = document.querySelector('#m4'),
    cardMozaikaCheckBox = document.querySelector('#card_leto_mozaika'),
    cardSchelkovoCheckBox = document.querySelector('#card_leto_schelkovo'),
    promoCode = document.querySelector('#promocode');
const month1PriceMozaika = 1999;
const month6PriceMozaika = 9900;
const month9PriceMozaika = 13900;
const month12PriceMozaika = 19900;

const month1PriceSchelkovo = 2999;
const month6PriceSchelkovo = 14990;
const month9PriceSchelkovo = 21990;
const month12PriceSchelkovo = 24990;


function priceHandler() {
    month1.addEventListener('change', () => {
        if (cardMozaikaCheckBox.checked) {
            if (promoCode.value === 'ТЕЛО2020') {
                priceTotal.textContent = (month1PriceMozaika - Math.round(month1PriceMozaika * 0.3));
            } else {
                priceTotal.textContent = month1PriceMozaika;
            }
        } else if (cardSchelkovoCheckBox) {
            if (promoCode.value === 'ТЕЛО2020') {
                priceTotal.textContent = (month1PriceSchelkovo - Math.round(month1PriceSchelkovo * 0.3));
            } else {
                priceTotal.textContent = month1PriceSchelkovo;
            }
        }
    });
    month6.addEventListener('change', () => {
        if (cardMozaikaCheckBox.checked) {
            if (promoCode.value === 'ТЕЛО2020') {
                priceTotal.textContent = (month6PriceMozaika - Math.round(month6PriceMozaika * 0.3));
            } else {
                priceTotal.textContent = month6PriceMozaika;
            }
        } else if (cardSchelkovoCheckBox) {
            if (promoCode.value === 'ТЕЛО2020') {
                priceTotal.textContent = (month6PriceSchelkovo - Math.round(month6PriceSchelkovo * 0.3));
            } else {
                priceTotal.textContent = month6PriceSchelkovo;
            }
        }
    });
    month9.addEventListener('change', () => {
        if (cardMozaikaCheckBox.checked) {
            if (promoCode.value === 'ТЕЛО2020') {
                priceTotal.textContent = (month9PriceMozaika - Math.round(month9PriceMozaika * 0.3));
            } else {
                priceTotal.textContent = month9PriceMozaika;
            }
        } else if (cardSchelkovoCheckBox.checked) {
            if (promoCode.value === 'ТЕЛО2020') {
                priceTotal.textContent = (month9PriceSchelkovo - Math.round(month9PriceSchelkovo * 0.3));
            } else {
                priceTotal.textContent = month9PriceSchelkovo;
            }
        }
    });
    month12.addEventListener('change', () => {
        if (cardMozaikaCheckBox.checked) {
            if (promoCode.value === 'ТЕЛО2020') {
                priceTotal.textContent = (month12PriceMozaika - Math.round(month12PriceMozaika * 0.3));
            } else {
                priceTotal.textContent = month12PriceMozaika;
            }
        } else if (cardSchelkovoCheckBox.checked) {
            if (promoCode.value === 'ТЕЛО2020') {
                priceTotal.textContent = (month12PriceSchelkovo - Math.round(month12PriceSchelkovo * 0.3));
            } else {
                priceTotal.textContent = month12PriceSchelkovo;
            }
        }
    });
}

promoCode.addEventListener('input', () => {
    if (promoCode.value === 'ТЕЛО2020') {
        if (cardMozaikaCheckBox.checked && month1.checked) {
            priceTotal.textContent = (month1PriceMozaika - Math.round(month1PriceMozaika * 0.3));
        } else if (cardMozaikaCheckBox.checked && month6.checked) {
            priceTotal.textContent = (month6PriceMozaika - Math.round(month6PriceMozaika * 0.3));
        } else if (cardMozaikaCheckBox.checked && month9.checked) {
            priceTotal.textContent = (month9PriceMozaika - Math.round(month9PriceMozaika * 0.3));
        } else if (cardMozaikaCheckBox.checked && month12.checked) {
            priceTotal.textContent = (month12PriceMozaika - Math.round(month12PriceMozaika * 0.3));
        } else if (cardSchelkovoCheckBox.checked && month1.checked) {
            priceTotal.textContent = (month1PriceSchelkovo - Math.round(month1PriceSchelkovo * 0.3));
        } else if (cardSchelkovoCheckBox.checked && month6.checked) {
            priceTotal.textContent = (month6PriceSchelkovo - Math.round(month6PriceSchelkovo * 0.3));
        } else if (cardSchelkovoCheckBox.checked && month9.checked) {
            priceTotal.textContent = (month9PriceSchelkovo - Math.round(month9PriceSchelkovo * 0.3));
        } else if (cardSchelkovoCheckBox.checked && month12.checked) {
            priceTotal.textContent = (month12PriceSchelkovo - Math.round(month12PriceSchelkovo * 0.3));
        }
        //priceHandler();
    } else if (promoCode.value !== 'ТЕЛО2020') {
        if (cardMozaikaCheckBox.checked && month1.checked) {
            priceTotal.textContent = month1PriceMozaika;
        } else if (cardMozaikaCheckBox.checked && month6.checked) {
            priceTotal.textContent = month6PriceMozaika;
        } else if (cardMozaikaCheckBox.checked && month9.checked) {
            priceTotal.textContent = month9PriceMozaika;
        } else if (cardMozaikaCheckBox.checked && month12.checked) {
            priceTotal.textContent = month12PriceMozaika;
        } else if (cardSchelkovoCheckBox.checked && month1.checked) {
            priceTotal.textContent = month1PriceSchelkovo;
        } else if (cardSchelkovoCheckBox.checked && month6.checked) {
            priceTotal.textContent = month6PriceSchelkovo;
        } else if (cardSchelkovoCheckBox.checked && month9.checked) {
            priceTotal.textContent = month9PriceSchelkovo;
        } else if (cardSchelkovoCheckBox.checked && month12.checked) {
            priceTotal.textContent = month12PriceSchelkovo;
        }
    }
});
priceHandler();
cardMozaikaCheckBox.addEventListener('change', () => {
    //priceHandler();
    checkboxPriceHandler(cardMozaikaCheckBox, month1PriceMozaika,
        month6PriceMozaika, month9PriceMozaika, month12PriceMozaika);
});

function checkboxPriceHandler(checkbox, month1Price, month6Price, month9Price, month12Price) {
    if (checkbox.checked && month1.checked) {
        if (promoCode.value === 'ТЕЛО2020') {
            priceTotal.textContent = (month1Price - Math.round(month1Price * 0.3));
        } else {
            priceTotal.textContent = month1Price;
        }
    }
    if (checkbox.checked && month6.checked) {
        if (promoCode.value === 'ТЕЛО2020') {
            priceTotal.textContent = (month6Price - Math.round(month6Price * 0.3));
        } else {
            priceTotal.textContent = month6Price;
        }
    }
    if (checkbox.checked && month9.checked) {
        if (promoCode.value === 'ТЕЛО2020') {
            priceTotal.textContent = (month9Price - Math.round(month9Price * 0.3));
        } else {
            priceTotal.textContent = month9Price;
        }
    }
    if (checkbox.checked && month12.checked) {
        if (promoCode.value === 'ТЕЛО2020') {
            priceTotal.textContent = (month12Price - Math.round(month12Price * 0.3));
        } else {
            priceTotal.textContent = month12Price;
        }
    }
}

cardSchelkovoCheckBox.addEventListener('change', () => {
    //priceHandler();
    checkboxPriceHandler(cardSchelkovoCheckBox, month1PriceSchelkovo,
        month6PriceSchelkovo, month9PriceSchelkovo, month12PriceSchelkovo);
});
//};

//export default clubCardCalc;
