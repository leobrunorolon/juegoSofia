document.getElementById(`unicornio`).addEventListener("click", sumarPuntos);
document.getElementById(`nubes`).addEventListener("click", restarVida);
document.getElementById(`nubesDos`).addEventListener("click", restarVida);

let puntos = 0;
let tiempo = 60;
let score = 20;
let vidas = 3;
let vidasTotal = 3;
function sumarPuntos() {
  puntos++;
  document.getElementById("puntos").innerHTML = `Puntos: ${puntos}/${score}`;
  randnum = Math.round(Math.random() * 450);
  randnumDos = Math.round(Math.random() * 500);
  document.getElementById(`unicornio`).style.marginTop = randnum + "px";
  document.getElementById(`unicornio`).style.marginLeft = randnumDos + "px";

  if (puntos == 20) {
    alert("Ganaste Sofia");
    tiempo = 60;
    puntos = 0;
    vidas = 3;
  }
}
function restarVida() {
  vidas--;
  document.getElementById(
    "vidas"
  ).innerHTML = `Corazones: ${vidas}/${vidasTotal}`;
  if (vidas == 0) {
    alert("Te quedaste sin vida");
    tiempo = 60;
    puntos = 0;
    vidas = 3;
  }
}
function restarTiempo() {
  tiempo--;
  document.getElementById("tiempo").innerHTML = `Tiempo: ${tiempo}`;
  randnumTres = Math.round(Math.random() * 450);
  randnumCuatro = Math.round(Math.random() * 500);
  document.getElementById(`nubes`).style.marginTop = randnumTres + "px";
  document.getElementById(`nubes`).style.marginLeft = randnumCuatro + "px";
  randnumCinco = Math.round(Math.random() * 450);
  randnumSeis = Math.round(Math.random() * 500);
  document.getElementById(`nubesDos`).style.marginTop = randnumCinco + "px";
  document.getElementById(`nubesDos`).style.marginLeft = randnumSeis + "px";
  if (tiempo == 0) {
    alert("Te quedaste sin tiempo vuelve a intentarlo Sofia");
    tiempo = 60;
    puntos = 0;
    vidas = 3;
  }
}

setInterval(restarTiempo, 1000);
