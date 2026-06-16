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

document.addEventListener('DOMContentLoaded', () => {

    const music = document.getElementById('bgMusic');

    async function iniciarMusica() {

        try {

            if (music) {
                await music.play();
            }

        } catch (e) {
            console.log('Audio bloqueado:', e);
        }

        document.removeEventListener('pointerdown', iniciarMusica);
        document.removeEventListener('touchstart', iniciarMusica);
        document.removeEventListener('click', iniciarMusica);

    }

    document.addEventListener('pointerdown', iniciarMusica);
    document.addEventListener('touchstart', iniciarMusica);
    document.addEventListener('click', iniciarMusica);

});


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
