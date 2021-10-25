document.getElementById(`botonInicio`).addEventListener(`click`, reseteo);
document.getElementById(`unicornio`).addEventListener("click", sumarPuntos);
document.getElementById(`nubes`).addEventListener("click", restarVida);
document.getElementById(`nubesDos`).addEventListener("click", restarVida);

const Corazones = 3;
const PuntosReseteo = 0;
let puntos = 0;
let tiempo = 61;
let score = 20;
let vidas = Corazones;
let inicio = true;
let movTime = null;
let movNube = null;
let movUni = null;

function reseteo() {
  tiempo = 61;
  puntos = PuntosReseteo;
  vidas = Corazones;
  movNube = setInterval(movimientoNube, 2000);
  movUni = setInterval(movimientoUnicornio, 7000);
  restarTiempo();
  scoreCorazon();
  scorePuntos();
  scoreTiempo();
}
function reseteoDos() {
  tiempo = 61;
  puntos = PuntosReseteo;
  vidas--;
  scoreCorazon();
  scorePuntos();
  scoreTiempo();
}

function sumarPuntos() {
  puntos++;
  scorePuntos();
  movimientoUnicornio();

  if (puntos == 20) {
    alert("Ganaste Sofia");
    reseteo();
  }
}
function restarTiempo() {
  scoreTiempo();
  if (tiempo == 0) {
    alert(
      "Te quedaste sin tiempo, pierdes un corazon vuelve a intentarlo Sofia"
    );
    reseteoDos();
  } else {
    tiempo--;
    movTime = setTimeout(restarTiempo, 1000);
  }
}

function restarVida() {
  vidas--;
  scoreCorazon();
  if (vidas == 0) {
    alert("Te quedaste sin vida, vuelve a intentarlo");
    reseteo();
  }
}

// funciones para simplificar el codigo

function movimientoUnicornio() {
  randnum = Math.round(Math.random() * 75);
  document.getElementById(`unicornio`).style.marginTop = randnum + "vh";
  randnumDos = Math.round(Math.random() * 85);
  document.getElementById(`unicornio`).style.marginLeft = randnumDos + "vw";
}
function movimientoNube() {
  randnumTres = Math.round(Math.random() * 75);
  document.getElementById(`nubes`).style.marginTop = randnumTres + "vh";
  randnumCuatro = Math.round(Math.random() * 90);
  document.getElementById(`nubes`).style.marginLeft = randnumCuatro + "vw";
  randnumCinco = Math.round(Math.random() * 75);
  document.getElementById(`nubesDos`).style.marginTop = randnumCinco + "vh";
  randnumSeis = Math.round(Math.random() * 90);
  document.getElementById(`nubesDos`).style.marginLeft = randnumSeis + "vw";
}

function scoreCorazon() {
  document.getElementById(
    "vidas"
  ).innerHTML = `Corazones: ${vidas}/${Corazones}`;
}

function scorePuntos() {
  document.getElementById("puntos").innerHTML = `Puntos: ${puntos}/${score}`;
}

function scoreTiempo() {
  document.getElementById("tiempo").innerHTML = `Tiempo: ${tiempo}`;
}
