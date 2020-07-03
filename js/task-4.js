const credits = 23580;
const pricePerDroid = 3000;
const droidsAmount = Number(prompt('How many droid would you like to buy?'));

let totalPrice = 0;
let message = '';
let droidsLeft = 0;

//validate user input
if (droidsAmount === 0) {
  message = 'Отменено пользователем!';
} else {
  //how mych credits user gonna spend
  totalPrice = droidsAmount * pricePerDroid;

  // validate if its enough
  if (totalPrice > credits) {
    message = 'Недостаточно средств на счету!';
  } else {
    droidsLeft = credits - totalPrice;
    message =
      'Вы купили ' +
      droidsAmount +
      ' дроидов, на счету осталось ' +
      droidsLeft +
      ' кредитов.';
  }
}

//show result
alert(message);