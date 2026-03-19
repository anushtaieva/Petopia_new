// раскрытие списков в верхнем меню
document.querySelectorAll('.select').forEach(select => {
  const btn = select.querySelector('.select-btn');
  const items = select.querySelectorAll('.select-item');

  btn.addEventListener('click', () => {
    document.querySelectorAll('.select').forEach(s => {
      if (s !== select) s.classList.remove('open');
    });
    select.classList.toggle('open');
  });

  items.forEach(item => {
    item.addEventListener('click', () => {
      btn.textContent = item.textContent;
      select.classList.remove('open');
    });
  });
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.select')) {
    document.querySelectorAll('.select').forEach(s => s.classList.remove('open'));
  }
});


// раскрытие списков в боковом меню
document.querySelectorAll(".filter-header").forEach(header => {
    header.addEventListener("click", () => {
        header.parentElement.classList.toggle("active");
    });
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

// для категорий
  const containerCategory = document.querySelector('.items_categories');

  containerCategory.addEventListener('click', (e) => {
    if (!e.target.classList.contains('category')) return;

    containerCategory.querySelectorAll('.category')
      .forEach(el => el.classList.remove('active'));

    e.target.classList.add('active');
  });


//для пагинации
  const pages = document.querySelectorAll('.bottom_products .page');

  pages.forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.classList.contains('next')) return;

      pages.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });



//повторение товаров ПРОСТО ЧТОБЫ ГЛЯНУТЬ ВЕРСТКУ
// 1️⃣ Массив с данными товаров
const products = [
  {
    model: "156347",
    title: "Вітамінізовані ласощі Beaphar Doggy’s Senior для собак старше 7 років, 75 табл",
    priceCurrent: "233.10 ₴",
    priceOld: "259.00 ₴",
    discount: "-10%",
    stars: "★★★★☆",
    image: "./images/items/product-156347.png",
    discountClass: "discount"
  },
  {
    model: "166136",
    title: "Вологий Farmina Vet Life Convalescence для собак, дієта для відновлення харчування...",
    priceCurrent: "205.00 ₴",
    stars: "★★★☆☆",
    image: "./images/items/product-166136.png"
  },
  {
    model: "169898",
    title: "Вологий корм Леопольд М'ясний для цуценят, з птицею, 85 г",
    priceCurrent: "13.00 ₴",
    stars: "★★★☆☆",
    image: "./images/items/product-169898.png"
  },
  {
    model: "160585",
    title: "Вологий корм Farmina N&D Grain Pumpkin Chicken Puppy Mini для цуценят дрібних порід, 140 г",
    priceCurrent: "109.00 ₴",
    stars: "★★★★★",
    image: "./images/items/product-160585.png"
  },
  {
    model: "173966",
    title: "Консерви AnimAll для собак, качка в ніжному желе, 195 г",
    priceCurrent: "87.00 ₴",
    stars: "★★★☆☆",
    image: "./images/items/product-173966.png"
  }
];

// 2️⃣ Кол-во повторений
const repeat = 4;

// 3️⃣ Контейнер для товаров
const container = document.getElementById("products_grid");

// 4️⃣ Генерация HTML
for (let i = 0; i < repeat; i++) {
  products.forEach(p => {
    const productHTML = `
      <div class="product_card ${p.discountClass || ''}">
        <div class="favorite"><img src="./images/items/icon-favorite.png"></div>
        ${p.discount ? `<div class="discount price_font">${p.discount}</div>` : ''}
        <div class="image"><img src="${p.image}"></div>
        <div class="meta meta_font">
          <div>Модель: ${p.model}</div>
          <div class="stars">${p.stars}</div>
        </div>
        <div class="title item_name_font">${p.title}</div>
        <div class="price price_font">
          ${p.priceOld ? `<div class="price-current">${p.priceCurrent}</div><div class="price-old">${p.priceOld}</div>` : p.priceCurrent}
        </div>
        <div class="counter">
          <button class="minus">-</button>
          <input value="1" class="counter_item">
          <button class="plus">+</button>
        </div>
        <button class="buy">
          <span class="cart fx-ai-c">
            <img src="./images/items/icon-buy.png">Купити
          </span>
        </button>
      </div>
    `;
    container.insertAdjacentHTML("beforeend", productHTML);
  });
}