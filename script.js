// const text = document.querySelector('.text');
// const plus = document.querySelector('.plus');
// const minus = document.querySelector('.minus');

// function updateWidth(change) {
//    const curerntWidthSize = parseInt(window.getComputedStyle(text).width);
//    text.style.fontSize = `${curerntWidthSize + change}px`; 
// }
// plus.addEventListener('click', () => {
//     updateWidth(20);
// });
// minus.addEventListener('click', () => {
//     updateWidth(-20);
// })



const image = document.querySelector(".slider__image");
const sliderInput = document.querySelector(".slider__input");

function resizeImage(event) {
  const sliderValue = event.target.value;

  const resize = sliderValue / 60;
  image.style.transform = `scale(${resize})`;


const debounceUpdate = _.debounce(resizeImage, 50);
}
sliderInput.addEventListener("input", resizeImage);
