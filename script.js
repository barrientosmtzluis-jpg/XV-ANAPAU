const target = new Date('2026-08-22T14:00:00');

function tick() {
    const d = target - new Date();

    const days = Math.floor(d / 86400000);
    const h = Math.floor((d % 86400000) / 3600000);
    const m = Math.floor((d % 3600000) / 60000);
    const s = Math.floor((d % 60000) / 1000);

    document.getElementById('countdown').innerHTML =
        `${days} días ${h} horas ${m} minutos ${s} segundos`;
}

setInterval(tick, 1000);
tick();

document.addEventListener("DOMContentLoaded", () => {

    const track = document.querySelector(".carousel-track");

    if (!track) return;

    const slides = document.querySelectorAll(".carousel-track img");

    let current = 0;

    function nextSlide() {

        current++;

        if (current >= slides.length) {
            current = 0;
        }

        track.style.transform =
            `translateX(-${current * 100}%)`;
    }

    setInterval(nextSlide, 2000);

});
