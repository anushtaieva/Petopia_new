fetch('../cart/cart.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('cartContainer').innerHTML = data;

        initCart();
    });

function initCart() {
const cartModal = document.getElementById('cartModal');
const closeBtn = document.querySelector('.cart_close');

const cartBtns = document.querySelectorAll('.cart_btn');

// открыть
cartBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        cartModal.classList.add('active');
    });
});

// закрыть
closeBtn.addEventListener('click', () => {
    cartModal.classList.remove('active');
});

// клик вне окна
cartModal.addEventListener('click', (e) => {
    if (e.target === cartModal) {
        cartModal.classList.remove('active');
    }
});
}