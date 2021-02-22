const bill_input = document.querySelector('.bill');
const tipPercent_input = document.querySelector('.tipPercent');
const people_input = document.querySelector('.people');

const tip_btn = document.querySelector('#calculate');

tip_btn.addEventListener('click', calc_tip);

function calc_tip () {
 let bill = Number(bill_input.value);
 let tipPercent = Number(tipPercent_input.value) / 100;
 let people = Number(people_input.value);
 let tip = ((bill * tipPercent) + bill) / people;
 
 let tip_el = document.querySelector('.tip-wrap .tip');
 tip_el.innerText = '$' + tip.toFixed(2) + ((people > 1) ? ' each' : '');
}