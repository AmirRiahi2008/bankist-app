const containerApp = document.querySelector(".app");
const labelTimer = document.querySelector(".timer");
const labelWelcome = document.querySelector(".welcome");

export let interval;
export let timer;

export function startLogOutTimer() {
    let time = 340; // مقدار اولیه تایمر

    const tick = () => {
        const minutes = String(Math.floor(time / 60)).padStart(2, '0');
        const seconds = String(time % 60).padStart(2, '0');
        labelTimer.textContent = `${minutes}:${seconds}`;

        if (time === 0) {
            clearInterval(timer);
            labelWelcome.textContent = "Log in to get started";
            containerApp.style.opacity = 0;
        }
        time--;
    };

    tick(); // اجرای اولین تیک
    timer = setInterval(tick, 1000); // مقداردهی به timer
    interval = timer; // همسان‌سازی interval با timer (در صورت نیاز)
    return timer; // اطمینان از بازگشت مقدار timer
}
