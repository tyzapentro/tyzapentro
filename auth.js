document.getElementById('authForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Предотвращаем отправку формы по умолчанию

  // Очищаем сообщения об ошибках
  clearErrorMessages();

  // Получаем значения полей
  const login = document.getElementById('login').value;
  const birthdate = document.getElementById('birthdate').value;
  const gender = document.getElementById('gender').value;

  // Проверяем каждое поле
  let hasErrors = false;

  if (!login) {
    showError('loginError', 'Пожалуйста, введите логин.');
    hasErrors = true;
  }

  if (!birthdate) {
    showError('birthdateError', 'Пожалуйста, введите дату рождения.');
    hasErrors = true;
  }

  if (!gender) {
    showError('genderError', 'Пожалуйста, выберите пол.');
    hasErrors = true;
  }

  // Если есть ошибки, останавливаем выполнение
  if (hasErrors) {
    return;
  }

  // Если все поля заполнены, сохраняем данные в localStorage
  localStorage.setItem('userLogin', login);
  localStorage.setItem('userBirthdate', birthdate);
  localStorage.setItem('userGender', gender);

  // Перенаправляем пользователя на другую страницу (например, на главную)
  window.location.href = 'description.html';
});

// Функция для отображения ошибки
function showError(elementId, message) {
  const errorElement = document.getElementById(elementId);
  if (errorElement) { // Проверяем, существует ли элемент
    errorElement.textContent = message;
    errorElement.style.display = 'block'; // Показываем сообщение
  } else {
    console.error(`Элемент с id "${elementId}" не найден.`);
  }
}

// Функция для очистки сообщений об ошибках
function clearErrorMessages() {
  const errorElements = document.querySelectorAll('.error-message');
  errorElements.forEach(element => {
    element.textContent = '';
    element.style.display = 'none'; // Скрываем сообщения
  });
}