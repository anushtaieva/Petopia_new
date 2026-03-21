document.addEventListener('DOMContentLoaded', () => {
    const phoneInput = document.getElementById('phoneInput');
    const formEnter = document.querySelector('.authorization_form_enter');
    let timerInterval = null;

    function addCodeField() {
        if (!formEnter.querySelector('.codeField')) {
            const container = document.createElement('div');
            container.classList.add('codeField');

            container.innerHTML = `
                <p class="top_categories_links"><br>Код авторизації телефону:</p>
                <input type="text" placeholder="Введіть код" class="button_authorization kod top_categories_links" id="codeInput">
                <p class="header_font_white kod_povtorno">Надіслати код повторно через <span id="timer">60</span> сек</p>
            `;

            const extraFieldContainer = document.getElementById('extraFieldContainer');
            extraFieldContainer.appendChild(container);

            startTimer();

            const codeInput = document.getElementById('codeInput');
            codeInput.addEventListener('input', () => {
                stopTimerAndEnableLogin();
            });
        }
    }

    function startTimer() {
        const timerElement = document.getElementById('timer');
        let timeLeft = 60;

        timerInterval = setInterval(() => {
            timeLeft--;
            timerElement.textContent = timeLeft;

            if (timeLeft <= 0) {
                stopTimerAndEnableLogin();
            }
        }, 1000);
    }

    function stopTimerAndEnableLogin() {
        if (timerInterval) {
            clearInterval(timerInterval);
            timerInterval = null;
        }

        // Меняем текст и класс подписи
        const kodPovtorno = document.querySelector('.kod_povtorno');
        if (kodPovtorno) {
            kodPovtorno.textContent = 'Надіслати код повторно';
            kodPovtorno.classList.remove('kod_povtorno');
            kodPovtorno.classList.add('kod_povtorno_blue');
        }

        // Убираем красную рамку у поля ввода
        const codeInput = document.getElementById('codeInput');
        if (codeInput) {
            codeInput.classList.remove('kod');
        }

        // Делаем кнопку "Увійти" активной и с синим фоном
        const loginButton = formEnter.querySelector('.submit_form');
        if (loginButton) {
            loginButton.disabled = false;                  // активируем кнопку
            loginButton.style.backgroundColor = '#2A7CF9'; // синий фон
            loginButton.style.color = '#FFFFFF';           // белый текст
        }
    }

    phoneInput.addEventListener('blur', () => {
        if (phoneInput.value.trim().length > 0) {
            addCodeField();
        }
    });

    phoneInput.addEventListener('keydown', (e) => {
        if (e.key === "Enter" && phoneInput.value.trim().length > 0) {
            addCodeField();
        }
    });
});