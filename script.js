<<<<<<< HEAD
// Simple Carousel
let slides = document.querySelectorAll('.slide');
let current = 0;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

setInterval(() => {
  current = (current + 1) % slides.length;
  showSlide(current);
}, 5000);

// Countdown Timer for Flash Sale (example 10 minutes)
let countdown = document.getElementById('countdown');
let timer = 10 * 60;
setInterval(() => {
  let minutes = Math.floor(timer / 60);
  let seconds = timer % 60;
  countdown.textContent = `${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`;
  timer--;
}, 1000);
=======
// Simple Carousel
let slides = document.querySelectorAll('.slide');
let current = 0;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

setInterval(() => {
  current = (current + 1) % slides.length;
  showSlide(current);
}, 5000);

// Countdown Timer for Flash Sale (example 10 minutes)
let countdown = document.getElementById('countdown');
let timer = 10 * 60;
setInterval(() => {
  let minutes = Math.floor(timer / 60);
  let seconds = timer % 60;
  countdown.textContent = `${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`;
  timer--;
}, 1000);
>>>>>>> 5277b47e50a3e949defd7189bca5c65535b7cc43
