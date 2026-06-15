
const target = new Date('2026-08-22T14:00:00');
function update(){
 const now = new Date();
 const diff = target-now;
 if(diff<=0) return;
 const d=Math.floor(diff/86400000);
 const h=Math.floor((diff%86400000)/3600000);
 const m=Math.floor((diff%3600000)/60000);
 const s=Math.floor((diff%60000)/1000);
 document.getElementById('countdown').innerHTML =
 `${d} días ${h} horas ${m} minutos ${s} segundos`;
}
setInterval(update,1000); update();
