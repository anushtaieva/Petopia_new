//для горизонтального скролла просмотреных слайдера товаров
const carousel = document.querySelector('.product_slider_carusel');

let isDown = false;
let startX;
let scrollLeft;

carousel.addEventListener('mousedown', (e) => {
    isDown = true;
    carousel.classList.add('dragging');
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
});

carousel.addEventListener('mouseleave', () => {
    isDown = false;
    carousel.classList.remove('dragging');
});

carousel.addEventListener('mouseup', () => {
    isDown = false;
    carousel.classList.remove('dragging');
});

carousel.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 1; // скорость прокрутки
    carousel.scrollLeft = scrollLeft - walk;
});

// тач события для мобильных
carousel.addEventListener('touchstart', (e) => {
    isDown = true;
    startX = e.touches[0].pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
});

carousel.addEventListener('touchend', () => isDown = false);
carousel.addEventListener('touchmove', (e) => {
    if(!isDown) return;
    const x = e.touches[0].pageX - carousel.offsetLeft;
    const walk = (x - startX) * 1; 
    carousel.scrollLeft = scrollLeft - walk;
});

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