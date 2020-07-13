'use strict';
const credits = 23580;
const pricePerDroid = 3000;
let droidsAmount;
let promptMessage = 'Сколько вам нужно дроидов ?';
let incorrect_input_attempts = 0;
//validate user input
do {
  if (incorrect_input_attempts > 0) {
    promptMessage = 'Пожалуйста, количество дронов числом';
  }
  droidsAmount = Number(prompt(promptMessage));
  incorrect_input_attempts += 1;
} while (Number.isNaN(droidsAmount) || droidsAmount == '');

let totalPrice = 0;
let message;
let creditsLeft = 0;

//validate user input
if (droidsAmount === null) {
  message = 'Отменено пользователем!';
} else {
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
