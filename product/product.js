//переключение вкладок
const tabs = document.querySelectorAll('.tabs li');
const contents = document.querySelectorAll('.tab');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {

        const target = tab.dataset.tab;

        // активный таб
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        // активный контент
        contents.forEach(c => {
            c.classList.remove('active');

            if (c.id === target) {
                c.classList.add('active');
            }
        });
    });
});

//переключение ссылок в верхнем меню карточки товара
document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.product_card_menu li');

    // первый активен при загрузке
    if (items.length) {
        items[0].classList.add('active');
    }

    // переключение
    items.forEach(item => {
        item.addEventListener('click', () => {
            items.forEach(el => el.classList.remove('active'));
            item.classList.add('active');
        });
    });
});

//переключатель картинок в карточке товара + точки для адаптива
document.addEventListener('DOMContentLoaded', () => {
  const thumbs = document.querySelectorAll('.thumb');
  const dots = document.querySelectorAll('.dot');
  const mainImage = document.getElementById('mainImage');

  // массив картинок
  const images = Array.from(thumbs).map(img => img.src);

  function updateSlider(index) {
    mainImage.src = images[index];

    thumbs.forEach(t => t.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));

    if (thumbs[index]) thumbs[index].classList.add('active');
    if (dots[index]) dots[index].classList.add('active');
  }

  // клики по превью
  thumbs.forEach((thumb, index) => {
    thumb.addEventListener('click', () => updateSlider(index));
  });

  // клики по точкам
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => updateSlider(index));
  });
});


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