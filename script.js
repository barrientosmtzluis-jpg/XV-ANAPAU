
const target=new Date('2026-08-22T14:00:00');
function tick(){
 const d=target-new Date();
 const days=Math.floor(d/86400000);
 const h=Math.floor((d%86400000)/3600000);
 const m=Math.floor((d%3600000)/60000);
 const s=Math.floor((d%60000)/1000);
 document.getElementById('countdown').innerHTML=`${days} días ${h} horas ${m} minutos ${s} segundos`;
}
// MÚSICA AL PRIMER TOQUE

const music = document.getElementById('bgMusic');

function iniciarMusica() {

    if (music) {

        music.play().catch(err => {
            console.log("No se pudo iniciar la música:", err);
        });

    }

    document.removeEventListener('click', iniciarMusica);
    document.removeEventListener('touchstart', iniciarMusica);

}

document.addEventListener('click', iniciarMusica);
document.addEventListener('touchstart', iniciarMusica);
