// CONTADOR

const target = new Date('2026-08-22T14:00:00');

function tick() {

    const d = target - new Date();

    const days = Math.floor(d / 86400000);
    const hours = Math.floor((d % 86400000) / 3600000);
    const minutes = Math.floor((d % 3600000) / 60000);
    const seconds = Math.floor((d % 60000) / 1000);

    document.getElementById('countdown').innerHTML =
        `${days} días ${hours} horas ${minutes} minutos ${seconds} segundos`;
}

setInterval(tick, 1000);
tick();


// CARRUSEL

document.addEventListener("DOMContentLoaded", function () {

    const track = document.querySelector(".carousel-track");

    if (!track) return;

    const slides = document.querySelectorAll(".carousel-track img");
    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");

    let currentSlide = 0;

    function updateCarousel() {
        track.style.transform =
            `translateX(-${currentSlide * 100}%)`;
    }

    nextBtn.addEventListener("click", () => {
        currentSlide++;
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        updateCarousel();
    });

    prevBtn.addEventListener("click", () => {
        currentSlide--;
        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }
        updateCarousel();
    });

    setInterval(() => {
        currentSlide++;
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        updateCarousel();
    }, 5000);

});
