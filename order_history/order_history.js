//для разворачивания товара
  function toggle(id) {
    const body = document.getElementById('body-' + id);
    const chev = document.getElementById('chev-' + id);
    const card = document.getElementById('card-' + id);
    const isOpen = body.style.display !== 'none';
    body.style.display = isOpen ? 'none' : 'block';
    chev.classList.toggle('open', !isOpen);
    card.classList.toggle('expanded', !isOpen);
  }

//для пагинации
  const pages = document.querySelectorAll('.bottom_products .page');

  pages.forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.classList.contains('next')) return;

      pages.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

//для адаптива пагинации
function adaptPagination(maxVisible) {
  const pagination = document.querySelector(".bottom_products .pagination");
  if (!pagination) return;

  const pages = Array.from(pagination.querySelectorAll(".page:not(.next)"));
  const total = pages.length;

  pages.forEach((page, idx) => {
    if (total <= maxVisible) {
      page.style.display = "flex"; // показываем все
    } else {
      if (idx < maxVisible) {
        page.style.display = "flex"; // показываем первые maxVisible
      } else {
        page.style.display = "none"; // скрываем лишние
      }
    }
  });
}

// Инициализация
function updatePagination() {
  if (window.innerWidth < 900) {
    adaptPagination(6); // мобильные
  } else {
    adaptPagination(9); // десктоп
  }
}

// Срабатывает при загрузке и при ресайзе
window.addEventListener("load", updatePagination);
window.addEventListener("resize", updatePagination);



//SIDE_MENU
const toggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');

toggle.addEventListener('click', () => {
  sidebar.classList.toggle('active');
  overlay.classList.toggle('active');
});

// закрытие по клику вне меню
overlay.addEventListener('click', () => {
  sidebar.classList.remove('active');
  overlay.classList.remove('active');
});