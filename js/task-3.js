let message;
const userPassword = prompt('Пожалуйста, введите пароль');
const ADMIN_PASSWORD = 'jqueryismyjam';

//check  user input
if (userPassword === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
} else if (userPassword === null) {
  message = 'Отменено пользователем!';
} else {
  message = 'Доступ запрещен, неверный пароль!';
}

//show result
alert(message);
