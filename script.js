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

document.addEventListener('DOMContentLoaded', () => {

    const music = document.getElementById('bgMusic');

    async function iniciarMusica() {

        try {
            await music.play();

            document.removeEventListener('pointerdown', iniciarMusica);
            document.removeEventListener('touchstart', iniciarMusica);
            document.removeEventListener('click', iniciarMusica);

        } catch (e) {
            console.log('Audio bloqueado:', e);
        }
    }

    document.addEventListener('pointerdown', iniciarMusica);
    document.addEventListener('touchstart', iniciarMusica);
    document.addEventListener('click', iniciarMusica);

});
