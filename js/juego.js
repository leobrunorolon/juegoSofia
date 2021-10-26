const botonInicio = document
  .getElementById(`botonInicio`)
  .addEventListener(`click`, reseteo);
document.getElementById(`unicornio`).addEventListener("click", sumarPuntos);
document.getElementById(`nubes`).addEventListener("click", restarVida);
document.getElementById(`nubesDos`).addEventListener("click", restarVida);
document.getElementById(`popUp`);
const textoPop = document.getElementById(`textPop`);

let subtitulo = document.createElement(`p`);
subtitulo.textContent = `Haz click en Inicio para continuar`;
textoPop.appendChild(subtitulo);
let titulo = document.createElement(`h3`);
titulo.textContent = `Bienvenido`;
textoPop.appendChild(titulo);

const Corazones = 3;
const PuntosReseteo = 0;
let puntos = 0;
let tiempo = 60;
let score = 20;
let vidas = Corazones;
let inicio = true;
let movTime = null;
let movNube = null;
let movUni = null;

function reseteo() {
  inicioPopUp();
  tiempo = 60;
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
  tiempo = 60;
  puntos = PuntosReseteo;
  vidas--;
  stopPopUp();
  scoreCorazon();
  scorePuntos();
  scoreTiempo();
}

function sumarPuntos() {
  puntos++;
  scorePuntos();
  movimientoUnicornio();

  if (puntos == 5) {
    stopPopUp();
    subtitulo.textContent = `Eres grandioso has click en Inicio para continuar`;
    titulo.textContent = `Ganaste`;
    reseteoDos();
    vidas = Corazones;
  }
}
function restarTiempo() {
  scoreTiempo();
  if (tiempo == 0) {
    reseteoDos();
    subtitulo.textContent = `Te quedaste sin tiempo has click en Inicio para continuar`;
    titulo.textContent = `Perdiste`;

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
    reseteoDos();
    subtitulo.textContent = `Te quedaste sin corazones has click en Inicio para continuar`;
    titulo.textContent = `Perdiste`;
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

function inicioPopUp() {
  popUp.classList.add(`active`);
}

function stopPopUp() {
  popUp.classList.remove(`active`);
}
