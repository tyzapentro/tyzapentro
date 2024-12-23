document.getElementById('authForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const login = document.getElementById('login').value;
    const birthdate = document.getElementById('birthdate').value;
    const gender = document.getElementById('gender').value;
  
    if (login && birthdate && gender) {
      localStorage.setItem('userLogin', login);
      localStorage.setItem('userBirthdate', birthdate);
      localStorage.setItem('userGender', gender);
  
      window.location.href = 'description.html';
    } else {
      alert('Пожалуйста, заполните все поля корректно.');
    }
  });