const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

let images = [];
let currentIndex = 0;

document.querySelectorAll('.gallery img').forEach((img, index) => {
  images.push(img.src);
  img.addEventListener('click', () => {
    currentIndex = index;
    showImage(currentIndex);
    lightbox.style.display = 'block';
  });
});

function showImage(index) {
  lightboxImg.src = images[index];
}

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
});

// Optional: Close lightbox on click outside image
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  }
});
