document.getElementById('checkTest').addEventListener('click', () => {
  // Делаем кнопку "Проверить" неактивной
  const checkButton = document.getElementById('checkTest');
  checkButton.disabled = true;
  checkButton.style.backgroundColor = '#ccc';
  checkButton.style.cursor = 'not-allowed';

  // Правильные ответы
  const answers = {
    q1: 'Маколей Калкин',
    q2: 'Чикаго',
    q3: 'Гарри и Марв',
    q4: 'Мартин',
    q5: '1990',
    q6: 'Лиз'
  };

  // Получаем ответы пользователя
  const userAnswers = {
    q1: document.querySelector('input[name="q1"]:checked')?.value,
    q2: document.querySelector('input[name="q2"]:checked')?.value,
    q3: document.querySelector('input[name="q3"]:checked')?.value,
    q4: document.getElementById('q4').value.trim().toLowerCase(),
    q5: document.getElementById('q5').value.trim().toLowerCase(),
    q6: document.getElementById('q6').value.trim().toLowerCase()
  };

  // Проверяем, все ли поля заполнены
  let allFieldsFilled = true;
  for (const key in userAnswers) {
    if (!userAnswers[key]) {
      allFieldsFilled = false;
      break;
    }
  }

  // Если не все поля заполнены, показываем сообщение
  if (!allFieldsFilled) {
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = 'Пожалуйста, заполните все поля.';
    errorMessage.style.display = 'block'; // Показываем сообщение
    checkButton.disabled = false; // Делаем кнопку "Проверить" активной
    checkButton.style.backgroundColor = '#007bff';
    checkButton.style.cursor = 'pointer';
    return;
  }

  // Скрываем сообщение об ошибке, если оно было показано
  const errorMessage = document.getElementById('errorMessage');
  errorMessage.style.display = 'none';

  // Проверяем ответы
  let score = 0;

  for (const key in answers) {
    const userAnswer = userAnswers[key];
    const correctAnswer = answers[key].toLowerCase();

    // Находим элемент для вывода результата под каждым вопросом
    const resultElement = document.getElementById(`${key}Result`);

    if (userAnswer && userAnswer.toLowerCase() === correctAnswer) {
      resultElement.textContent = 'Верно';
      resultElement.classList.add('correct');
      score++;
    } else {
      resultElement.textContent = `Неверно, правильный ответ: ${answers[key]}`;
      resultElement.classList.add('incorrect');
    }
  }

  // Выводим общий результат
  document.getElementById('testResult').textContent = `Ваш результат: ${score} из 6`;

  // Показываем кнопку "Пройти заново"
  document.getElementById('resetTest').style.display = 'block';

  // Сохраняем результат в localStorage
  localStorage.setItem('testResult', `${score} из 6`);
});

// Обработчик кнопки "Пройти заново"
document.getElementById('resetTest').addEventListener('click', () => {
  // Сбрасываем форму
  document.getElementById('testForm').reset();

  // Очищаем результаты
  document.querySelectorAll('.result').forEach(el => {
    el.textContent = '';
    el.classList.remove('correct', 'incorrect');
  });

  // Скрываем кнопку "Пройти заново"
  document.getElementById('resetTest').style.display = 'none';

  // Делаем кнопку "Проверить" активной
  const checkButton = document.getElementById('checkTest');
  checkButton.disabled = false;
  checkButton.style.backgroundColor = '#007bff';
  checkButton.style.cursor = 'pointer';

  // Скрываем сообщение об ошибке
  const errorMessage = document.getElementById('errorMessage');
  errorMessage.style.display = 'none';
});