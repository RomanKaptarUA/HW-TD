

//1

// const image = document.querySelector(".slider__image");
// const sliderInput = document.querySelector(".slider__input");

// function resizeImage(event) {
//   const sliderValue = event.target.value;
//   const resize = sliderValue / 60;
//   image.style.transform = `scale(${resize})`;

// }
// const debounceUpdate = _.debounce(resizeImage, 50);

// sliderInput.addEventListener("input", debounceUpdate);




//2


function updateCoordinats(event) {
  const graph = document.getElementById('graph');
  const point = document.getElementById('point');
  const coordDisplay = document.getElementById('coord');

  const rect = graph.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  point.setAttribute('cx', x);
  point.setAttribute('cy', y);

  coordDisplay.textContent = `X: ${x.toFixed(0)}, Y: ${y.toFixed(0)}`;
};

const throttleUpdate = _.debounce(updateCoordinats, 500);

const graphEl = document.getElementById('graph');
graphEl.addEventListener('mousemove', throttleUpdate);
