// Обработчик для навигационных ссылок
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Удаляем активный класс у всех ссылок
      document.querySelectorAll('.nav-link').forEach(item => {
        item.classList.remove('active');
      });
      
      // Добавляем активный класс к текущей ссылке
      this.classList.add('active');
      
      // Прокрутка к секции (если нужно)
      const targetId = this.getAttribute('href');
      if(targetId !== '#') {
        document.querySelector(targetId).scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Обработчик для кнопки Login
  document.getElementById('loginBtn').addEventListener('click', function() {
    // Анимация нажатия
    this.style.transform = 'scale(0.95)';
    
    // Обновление страницы через 300мс
    setTimeout(() => {
      window.location.href = "#"; // Или другой URL
      // window.location.reload(); // Если нужно полное обновление
    }, 300);
    
    // Возвращаем кнопку в исходное состояние
    setTimeout(() => {
      this.style.transform = '';
    }, 500);
  });