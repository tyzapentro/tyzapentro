// Проверяем, авторизован ли пользователь
const userLogin = localStorage.getItem('userLogin');

// Если пользователь авторизован, отображаем его имя
if (userLogin) {
  document.getElementById('userLogin').textContent = userLogin;
} else {
  document.getElementById('userLogin').textContent = 'Гость';
}

// Обработчик кнопки "Выйти"
document.getElementById('logout').addEventListener('click', function () {
  // Удаляем данные пользователя из localStorage
  localStorage.removeItem('userLogin');
  localStorage.removeItem('userBirthdate');
  localStorage.removeItem('userGender');
  localStorage.removeItem('testResult');

  // Перенаправляем пользователя на страницу авторизации
  window.location.href = 'index.html';
});