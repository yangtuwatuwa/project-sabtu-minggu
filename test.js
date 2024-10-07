const slider = document.querySelector('.slider');
const images = slider.querySelectorAll('img');

let currentImage = 0;

function nextImage() {
  images[currentImage].classList.remove('active');
  currentImage = (currentImage + 1) % images.length;
  images[currentImage].classList.add('active');
}

setInterval(nextImage, 3000); // change image every 3 seconds