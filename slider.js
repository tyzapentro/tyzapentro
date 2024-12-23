const images = ['images1.jpg', 'images2.jpg', 'images3.jpg', 'images4.jpg', 'images5.jpg'];
let currentIndex = 0;

const currentImage = document.getElementById('currentImage');
const slideIndicator = document.getElementById('slideIndicator');

function updateSlider() {
  currentImage.src = images[currentIndex];
  slideIndicator.textContent = `${currentIndex + 1} из ${images.length}`;
  currentImage.style.animation = 'fadeIn 0.5s ease-in-out'; // Анимация появления
}

document.getElementById('prev').addEventListener('click', () => {
  currentIndex = Math.max(0, currentIndex - 1);
  updateSlider();
});

document.getElementById('next').addEventListener('click', () => {
  currentIndex = Math.min(images.length - 1, currentIndex + 1);
  updateSlider();
});

updateSlider();