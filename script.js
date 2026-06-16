const target = new Date('2026-08-22T14:00:00');

function tick() {

    const d = target - new Date();

    const days = Math.floor(d / 86400000);
    const h = Math.floor((d % 86400000) / 3600000);
    const m = Math.floor((d % 3600000) / 60000);
    const s = Math.floor((d % 60000) / 1000);

    const countdown = document.getElementById('countdown');

    if (countdown) {
        countdown.innerHTML =
            `${days} días ${h} horas ${m} minutos ${s} segundos`;
    }
}

setInterval(tick, 1000);
tick();


// ===== AUDIO =====

const music = document.getElementById('bgMusic');

function iniciarMusica() {

    if (!music) return;

    music.play()
        .then(() => console.log('Música iniciada'))
        .catch(err => console.log(err));

    document.removeEventListener('touchstart', iniciarMusica);
    document.removeEventListener('click', iniciarMusica);
    document.removeEventListener('pointerdown', iniciarMusica);
}

// ===== CARRUSEL =====

document.addEventListener('DOMContentLoaded', () => {

    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.slide');

    if (!track || slides.length === 0) {
        console.log('Carrusel no encontrado');
        return;
    }

    let current = 0;

    function nextSlide() {

        current++;

        if (current >= slides.length) {
            current = 0;
        }

        track.style.transform =
            `translateX(-${current * 100}%)`;

    }

    setInterval(nextSlide, 4000);

});
