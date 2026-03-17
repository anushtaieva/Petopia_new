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