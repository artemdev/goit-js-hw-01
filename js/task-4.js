'use strict';
const credits = 23580;
const pricePerDroid = 3000;
let droidsAmount = prompt('Сколько вам нужно дроидов?');

let totalPrice = 0;
let message;
let creditsLeft = 0;
console.log(droidsAmount);
//validate user input
if (droidsAmount === null) {
  message = 'Отменено пользователем!';
} else {
  droidsAmount = Number(droidsAmount);
  //how mych credits user gonna spend
  totalPrice = droidsAmount * pricePerDroid;

  // validate if its enough
  if (totalPrice > credits) {
    message = 'Недостаточно средств на счету!';
  } else {
    creditsLeft = credits - totalPrice;
    message = `Вы купили ${droidsAmount} дроидов, на счету осталось ${creditsLeft} кредитов.`;
  }
}

//show result
alert(message);
