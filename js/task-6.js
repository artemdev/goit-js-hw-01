let input;
let inputNumber;
let total = 0;

while (input !== null) {
  //user input
  input = prompt('Пожалуйста, введите число');
  //export number
  inputNumber = Number.parseInt(input);
  //validate user input
  //Only numbers are allowed
  if (!Number.isNaN(Number(inputNumber))) {
    total += Number.parseInt(input);
  }
}

alert('Общая сумма равна ' + total);
