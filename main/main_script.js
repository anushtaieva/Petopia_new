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

const card = track.children[0];
const step = card.offsetWidth; // реальная ширина карточки
const cards = track.children.length;

const maxScroll = (cards - 1) * step;

right.onclick = () => {
  scroll += step;

  if (scroll > maxScroll) {
    scroll = 0;
  }

  track.style.transform = `translateX(-${scroll}px)`;
};

left.onclick = () => {
  scroll -= step;

  if (scroll < 0) {
    scroll = maxScroll;
  }

  track.style.transform = `translateX(-${scroll}px)`;
};


//для горизонтального скролла просмотреных товаров/новинок
const carousel = document.querySelector('.reviewed-products_carusel');

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



//для горизонтального скролла категорий

document.querySelectorAll('.categories_line').forEach(line => {
    let isDown = false;
    let startX;
    let scrollLeft;

    line.addEventListener('mousedown', (e) => {
        isDown = true;
        line.classList.add('dragging');
        startX = e.pageX - line.offsetLeft;
        scrollLeft = line.scrollLeft;
    });

    line.addEventListener('mouseleave', () => {
        isDown = false;
        line.classList.remove('dragging');
    });

    line.addEventListener('mouseup', () => {
        isDown = false;
        line.classList.remove('dragging');
    });

    line.addEventListener('mousemove', (e) => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - line.offsetLeft;
        const walk = (x - startX);
        line.scrollLeft = scrollLeft - walk;
    });

    // тач события для мобильных
    line.addEventListener('touchstart', (e) => {
        isDown = true;
        startX = e.touches[0].pageX - line.offsetLeft;
        scrollLeft = line.scrollLeft;
    });

    line.addEventListener('touchend', () => isDown = false);

    line.addEventListener('touchmove', (e) => {
        if(!isDown) return;
        const x = e.touches[0].pageX - line.offsetLeft;
        const walk = (x - startX);
        line.scrollLeft = scrollLeft - walk;
    });
});