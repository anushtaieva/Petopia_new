//кнопки для верхнего баннера
const slides = document.querySelector('.slides');
const slideCount = document.querySelectorAll('.slide').length;
let index = 0;

document.querySelector('.next').addEventListener('click', () => {
  index = (index + 1) % slideCount;
  updateSlide();
});

document.querySelector('.prev').addEventListener('click', () => {
  index = (index - 1 + slideCount) % slideCount;
  updateSlide();
});

function updateSlide() {
  slides.style.transform = `translateX(-${index * 100}%)`;
}

//счетчик в карточке товара
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  const minus = counter.querySelector('.minus');
  const plus = counter.querySelector('.plus');
  const input = counter.querySelector('.counter_item');

  plus.addEventListener('click', () => {
    input.value = parseInt(input.value) + 1;
  });

  minus.addEventListener('click', () => {
    if (parseInt(input.value) > 1) {
      input.value = parseInt(input.value) - 1;
    }
  });
});

//прокрутка карточек брендов в разделе "партнеры"
const track = document.getElementById("track");
const left = document.getElementById("left");
const right = document.getElementById("right");

let scroll = 0;
const step = 240;

right.onclick = () => {
  scroll += step;
  track.style.transform = `translateX(-${scroll}px)`;
};

left.onclick = () => {
  scroll -= step;
  if(scroll < 0) scroll = 0;
  track.style.transform = `translateX(-${scroll}px)`;
};