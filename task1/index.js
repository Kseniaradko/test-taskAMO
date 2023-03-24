const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl

//Сделала переменную для того, чтобы во время заведения нового таймера при работающем старом, начался новый таймер

const createTimerAnimator = () => {
    let timerId;
    return (seconds) => {
        if (timerId) {
            clearInterval(timerId)
        }
        timerId = setInterval(() => {
            const hour = Math.floor(seconds / 3600)
            const minute = Math.floor((seconds % 3600) / 60)
            const second = seconds % 60

            const hh = hour.toString().padStart(2, '0')
            const mm = minute.toString().padStart(2, '0')
            const ss = second.toString().padStart(2, '0')

            timerEl.innerHTML = `${hh}:${mm}:${ss}`

            if (seconds > 0) {
                seconds--
            } else {
                clearInterval(timerId)
            }
        }, 1000)
    };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
    inputEl.value = inputEl.value.replaceAll(/\D/g, '')
});

buttonEl.addEventListener('click', () => {
    const seconds = Number(inputEl.value);

    animateTimer(seconds);

    inputEl.value = '';
});