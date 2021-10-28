const botonInicio = document
  .getElementById(`botonInicio`)
  .addEventListener(`click`, iniciarJuego);
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

var music = {
  overworld: new Howl({
    src: ["audio/Tones and I - Dance Monkey (Lyrics) (192 kbps).mp3"],
  }),
};

document.getElementById("play").addEventListener("click", () => {
  if (!music.overworld.playing()) {
    music.overworld.play();
  }
});
document.getElementById("stop").addEventListener("click", () => {
  music.overworld.pause();
});

const Corazones = 3;
const PuntosReseteo = 0;
let puntos = 0;
let tiempo = 60;
let score = 20;
let vidas = Corazones;
let inicio = true;
let movTime = 0;
let movNube = 0;
let movUni = 0;

function iniciarJuego() {
  inicioPopUp();
  interval();
  tiempo = 60;
  puntos = PuntosReseteo;
  scoreCorazon();
  scorePuntos();
  scoreTiempo();
}

function reseteo() {
  stopPopUp();
  intevalStop();
  tiempo = 60;
  puntos = PuntosReseteo;
  vidas = Corazones;
}

function reseteoDos() {
  stopPopUp();
  intevalStop();
  tiempo = 60;
  puntos = PuntosReseteo;
}

function sumarPuntos() {
  puntos++;
  scorePuntos();
  movimientoUnicornio();

  if (puntos == 20) {
    subtitulo.textContent = `Eres grandioso has click en Inicio para continuar`;
    titulo.textContent = `Ganaste`;
    reseteo();
  }
}
function restarTiempo() {
  tiempo--;
  scoreTiempo();
  if (tiempo == 0) {
    vidas--;
    scoreCorazon();
    subtitulo.textContent = `Te quedaste sin tiempo has click en Inicio para continuar`;
    titulo.textContent = `Perdiste un corazon`;
    reseteoDos();
  }
  if (vidas == 0) {
    subtitulo.textContent = `Te quedaste sin corazones has click en Inicio para continuar`;
    titulo.textContent = `Perdiste`;
    reseteo();
  }
}

function restarVida() {
  vidas--;
  scoreCorazon();
  if (vidas == 0) {
    subtitulo.textContent = `Te quedaste sin corazones has click en Inicio para continuar`;
    titulo.textContent = `Perdiste`;
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
function interval() {
  movNube = setInterval(movimientoNube, 1000);
  movUni = setInterval(movimientoUnicornio, 5000);
  movTime = setInterval(restarTiempo, 1000);
}
function intevalStop() {
  clearInterval(movNube);
  clearInterval(movUni);
  clearInterval(movTime);
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
