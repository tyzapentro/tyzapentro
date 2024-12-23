// Получаем данные из localStorage
const userLogin = localStorage.getItem('userLogin');
const userBirthdate = localStorage.getItem('userBirthdate');
const userGender = localStorage.getItem('userGender');
const testResult = localStorage.getItem('testResult') || 'Тест ещё не пройден';

// Выводим данные на страницу
document.getElementById('userLogin').textContent = userLogin;
document.getElementById('userBirthdate').textContent = userBirthdate;
document.getElementById('userGender').textContent = userGender === 'male' ? 'Мужской' : 'Женский';
document.getElementById('testResult').textContent = testResult;

// Обработчик кнопки "Выйти"
document.getElementById('logout').addEventListener('click', function () {
  // Очищаем данные из localStorage
  localStorage.removeItem('userLogin');
  localStorage.removeItem('userBirthdate');
  localStorage.removeItem('userGender');
  localStorage.removeItem('testResult');

  // Перенаправляем пользователя на страницу авторизации
  window.location.href = 'index.html';
});