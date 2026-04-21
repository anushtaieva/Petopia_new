  const container = document.querySelector('.payment-methods');

  container.addEventListener('click', (e) => {
    const method = e.target.closest('.pay-method');
    if (!method) return;

    document.querySelectorAll('.pay-method')
      .forEach(item => item.classList.remove('active'));

    method.classList.add('active');
  });