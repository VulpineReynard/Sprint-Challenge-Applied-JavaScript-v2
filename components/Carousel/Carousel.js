/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
const images = ["./assets/carousel/mountains.jpeg", "./assets/carousel/computer.jpeg", "./assets/carousel/trees.jpeg", "./assets/carousel/turntable.jpeg"];
const carouselContainer = document.querySelector('.carousel-container');
let index = 0;

carouselContainer.appendChild(createCarousel(images));

function createCarousel(arrayOfImages) {
  const carousel = document.createElement('div');
  const leftBtn = document.createElement('button');
  const rightBtn = document.createElement('button');
  carousel.appendChild(leftBtn);

  arrayOfImages.forEach(imageSrc => {
    const image = document.createElement('img');
    image.src = imageSrc;
    carousel.appendChild(image);
  })
  carousel.appendChild(rightBtn);

  carousel.classList.add('carousel');
  leftBtn.classList.add('left-button');
  rightBtn.classList.add('right-button');

  let images = carousel.querySelectorAll('img');
  console.log(images);
  images[0].style.display = 'block';

  leftBtn.textContent = '<';
  rightBtn.textContent = '>';
  rightBtn.addEventListener('click', () => {
    console.log(index)
    if(index === images.length - 1) {
        index = 0;
        let currImg = images[index];

        images.forEach(img => img.style.display = 'none');
        currImg.style.display = 'block';
        TweenMax.from(currImg, .5, {opacity: 0});
        
    } else {
        index++;
        let currImg = images[index];

        images.forEach(img => img.style.display = 'none');
        currImg.style.display = 'block';
        TweenMax.from(currImg, .5, {opacity: 0});
        console.log(index);
    }
  });
  leftBtn.addEventListener('click', () => {
    if(index === 0) {
      index = 3;
      let currImg = images[index];

      images.forEach(img => img.style.display = 'none');
      currImg.style.display = 'block';
      TweenMax.from(currImg, .5, {opacity: 0});
  } else {
      index--;
      let currImg = images[index];

      images.forEach(img => img.style.display = 'none');
      currImg.style.display = 'block';
      TweenMax.from(currImg, .5, {opacity: 0});
  }
  });

  return carousel;
}

