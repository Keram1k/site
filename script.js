let rightArrow = document.getElementById('right-arrow');
let leftArrow = document.getElementById('left-arrow');
let mainPic = document.getElementById('main__pic');
let slides = document.getElementsByClassName('slide');

let imagesPath = [];
imagesPath.push('img/foto_1.webp');
imagesPath.push('img/foto_2.webp');
imagesPath.push('img/foto_3.webp');
imagesPath.push('img/foto_4.webp');

let currentImageIndex = 0;

console.log(slides[0]);

slides[0].style.display = 'none';

const onRightArrow = () => {
  if (currentImageIndex === imagesPath.length - 1) {
    currentImageIndex = 0;
    mainPic.src = imagesPath[currentImageIndex];
    slides[3].style.display = 'block';
    slides[0].style.display = 'none';
  } else {
    currentImageIndex++;
    mainPic.src = imagesPath[currentImageIndex];
    slides[currentImageIndex].style.display = 'none';
    slides[currentImageIndex - 1].style.display = 'block';
  }
};

const onLeftArrow = () => {
  if (currentImageIndex === 0) {
    currentImageIndex = imagesPath.length - 1;
    mainPic.src = imagesPath[currentImageIndex];
    slides[0].style.display = 'block';
    slides[3].style.display = 'none';
  } else {
    currentImageIndex--;
    mainPic.src = imagesPath[currentImageIndex];
    slides[currentImageIndex].style.display = 'none';
    slides[currentImageIndex + 1].style.display = 'block';
  }
};

rightArrow.addEventListener('click', onRightArrow);
leftArrow.addEventListener('click', onLeftArrow);

mainPic.src = imagesPath[currentImageIndex];

let mainPicSlides = document.getElementsByClassName('main-pic-slide');

let MainImagesPath = [];

let offset = 0;

document.getElementById('arrow-right').addEventListener('click', function () {
  mainPicSlides[0].style.display = 'none';
  arrowRight.style.visibility = 'hidden';
  arrowLeft.style.visibility = 'visible';
});

document.getElementById('arrow-left').addEventListener('click', function () {
  mainPicSlides[0].style.display = 'block';
  arrowLeft.style.visibility = 'hidden';
  arrowRight.style.visibility = 'visible';
});
