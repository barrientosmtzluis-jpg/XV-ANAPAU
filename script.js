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

// ===== CARRUSEL AUTOMÁTICO =====

const fotos = [
    "assets/gallery/foto1.jpg",
    "assets/gallery/foto2.jpg",
    "assets/gallery/foto3.jpg",
    "assets/gallery/foto4.jpg",
    "assets/gallery/foto5.jpg"
];

let fotoActual = 0;

function cambiarFoto() {

    const img = document.getElementById("galleryImage");

    if (!img) return;

    fotoActual++;

    if (fotoActual >= fotos.length) {
        fotoActual = 0;
    }

    img.src = fotos[fotoActual];
}

setInterval(cambiarFoto, 4000);
        track.style.transform =
            `translateX(-${current * 100}%)`;

    }

    setInterval(nextSlide, 4000);

});
