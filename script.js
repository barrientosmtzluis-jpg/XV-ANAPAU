
const target=new Date('2026-08-22T14:00:00');
function tick(){
 const d=target-new Date();
 const days=Math.floor(d/86400000);
 const h=Math.floor((d%86400000)/3600000);
 const m=Math.floor((d%3600000)/60000);
 const s=Math.floor((d%60000)/1000);
 document.getElementById('countdown').innerHTML=`${days} días ${h} horas ${m} minutos ${s} segundos`;
}
setInterval(tick,1000);tick();
const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel-track img');

let currentSlide = 0;

function showSlide(index){

    track.style.transform =
        `translateX(-${index * 100}%)`;

}

document.querySelector('.next')
.addEventListener('click',()=>{

    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;

    }

    showSlide(currentSlide);

});

document.querySelector('.prev')
.addEventListener('click',()=>{

    currentSlide--;

    if(currentSlide < 0){

        currentSlide = slides.length - 1;

    }

    showSlide(currentSlide);

});

/* Cambio automático cada 5 segundos */

setInterval(()=>{

    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;

    }

    showSlide(currentSlide);

},5000);
