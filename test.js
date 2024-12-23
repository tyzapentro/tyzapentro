document.getElementById('checkTest').addEventListener('click', () => {
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
  
    // Проверяем ответы
    let score = 0;
    const resultFields = [];
  
    for (const key in answers) {
      const userAnswer = userAnswers[key];
      const correctAnswer = answers[key].toLowerCase();
  
      if (userAnswer && userAnswer.toLowerCase() === correctAnswer) {
        resultFields.push(`<p class="correct">${key}: Верно</p>`);
        score++;
      } else {
        resultFields.push(`<p class="incorrect">${key}: Неверно, правильный ответ: ${answers[key]}</p>`);
      }
    }
  
    // Выводим результат
    document.getElementById('testResult').innerHTML = `
      <h3>Ваш результат: ${score} из 6</h3>
      ${resultFields.join('')}
    `;
  
    // Показываем кнопку "Пройти заново"
    document.getElementById('resetTest').style.display = 'block';
  
    // Сохраняем результат в localStorage
    localStorage.setItem('testResult', `${score} из 6`);
  });
  
  // Обработчик кнопки "Пройти заново"
  document.getElementById('resetTest').addEventListener('click', () => {
    document.getElementById('testForm').reset();
    document.getElementById('testResult').innerHTML = '';
    document.getElementById('resetTest').style.display = 'none';
  });