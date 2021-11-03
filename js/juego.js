const botonInicio = $(`#botonInicio`).click(iniciarJuego);
const uniSumar = $(`#unicornio`).click(sumarPuntos);
const nubesRestar = $(`.nubes`).click(restarVida);

const textoPop = document.getElementById(`textPop`);

const jugadorInicio = {
  corazones: 3,
  puntos: 20,
  tiempo: 60,
  usuario: localStorage.getItem("usuario"),
};
const juegoJSON = JSON.stringify(jugadorInicio);
console.log(juegoJSON);

let usuario = localStorage.getItem("usuario");
console.log(usuario);
const Corazones = 3;
const PuntosReseteo = 0;
let nivel = 1;
let puntos = 0;
let tiempo = 60;
let score = 20;
let vidas = Corazones;
let inicio = true;
let movTime = 0;
let movUni = 0;
let movNubeUno = null;
let movNubeDos = null;
let movNubeTres = null;
let movNubeCuatro = null;
let movNubeCinco = null;
/*Mas abajo se mantiene la estructura pero solo se modifica el texto */
let subtitulo = document.createElement(`p`);
subtitulo.textContent = `Haz click en Iniciar para continuar`;
textoPop.appendChild(subtitulo);
let titulo = document.createElement(`h3`);
titulo.textContent = `Bienvenido ${usuario}`;
textoPop.appendChild(titulo);

function iniciarJuego() {
  switch (nivel) {
    case 1: {
      removeFondo();
      fondo.classList.add(`fondo1`);
      inicioPopUp();
      scoreTabla();
      intervalTiempo();
      intervalUni(3000);
      intervalNubeUno(1000);
      niveles();
      break;
    }
    case 2: {
      removeFondo();
      fondo.classList.add(`fondo2`);
      inicioPopUp();
      niveles();
      scoreTabla();
      intervalTiempo();
      intervalUni(2000);
      intervalNubeUno(800);
      intervalNubeDos(900);
      break;
    }
    case 3: {
      removeFondo();
      fondo.classList.add(`fondo3`);
      inicioPopUp();
      niveles();
      scoreTabla();
      intervalTiempo();
      intervalUni(1000);
      intervalNubeUno(800);
      intervalNubeDos(500);
      intervalNubeTres(400);
      break;
    }
    case 4: {
      removeFondo();
      fondo.classList.add(`fondo4`);
      inicioPopUp();
      niveles();
      scoreTabla();
      intervalTiempo();
      intervalUni(1000);
      intervalNubeUno(700);
      intervalNubeDos(600);
      intervalNubeTres(500);
      intervalNubeCuatro(400);
      break;
    }
    case 5: {
      removeFondo();
      fondo.classList.add(`fondo5`);
      inicioPopUp();
      niveles();
      scoreTabla();
      intervalTiempo();
      intervalUni(800);
      intervalNubeUno(600);
      intervalNubeDos(500);
      intervalNubeTres(500);
      intervalNubeCuatro(500);
      intervalNubeCinco(300);
      break;
    }
    default: {
      intervalStop();
      removerNubes();
      subtitulo.textContent = `Completaste todos los niveles Iniciar para volver a empezar`;
      titulo.textContent = `Ganaste`;
      nivel = 1;
    }
  }
}

function reseteo() {
  stopPopUp();
  tiempo = 60;
  puntos = PuntosReseteo;
  vidas = Corazones;
  nivel++;
  intervalStop();
}

function reseteoDos() {
  stopPopUp();
  intervalStop();
  removerNubes();
  tiempo = 60;
  puntos = PuntosReseteo;
  vidas = 3;
  nivel = 1;
}

function sumarPuntos() {
  puntos++;
  scoreTabla();
  movimientoUnicornio();
  if (puntos == 20) {
    subtitulo.textContent = `Eres grandios@ has pasado al siguiente Nivel Iniciar para continuar`;
    titulo.textContent = `Sigue asi`;
    reseteo();
  }
}
function restarTiempo() {
  tiempo--;
  scoreTabla();
  if (tiempo == 0) {
    vidas--;
    subtitulo.textContent = `Te quedaste sin tiempo has click en Iniciar para continuar`;
    titulo.textContent = `Perdiste un corazon`;
    reseteoDos();
  }
  if (vidas == 0) {
    subtitulo.textContent = `Te quedaste sin corazones has click en Inicio para continuar`;
    titulo.textContent = `Perdiste`;
    reseteoDos();
  }
}

function restarVida() {
  vidas--;
  scoreTabla();
  if (vidas == 0) {
    subtitulo.textContent = `Te quedaste sin corazones has click en Iniciar para continuar`;
    titulo.textContent = `Perdiste`;
    reseteoDos();
  }
}

function niveles() {
  scoreTabla();
  if (nivel == 1) {
    nubeUno.classList.add(`mostrar`);
  } else if (nivel == 2) {
    nubeDos.classList.add(`mostrar`);
  } else if (nivel == 3) {
    nubeTres.classList.add(`mostrar`);
  } else if (nivel == 4) {
    nubeCuatro.classList.add(`mostrar`);
  } else if (nivel == 5) {
    nubeCinco.classList.add(`mostrar`);
  } else {
  }
}
// funciones para simplificar el codigo
// movimiento
function movimientoUnicornio() {
  unicornioT = Math.round(Math.random() * 70);
  document.getElementById(`unicornio`).style.marginTop = unicornioT + "vh";
  unicornioL = Math.round(Math.random() * 85);
  document.getElementById(`unicornio`).style.marginLeft = unicornioL + "vw";
}
function movimientoNubeUno() {
  nubeUnoT = Math.round(Math.random() * 75);
  document.getElementById(`nubeUno`).style.marginTop = nubeUnoT + "vh";
  nubeUnoL = Math.round(Math.random() * 90);
  document.getElementById(`nubeUno`).style.marginLeft = nubeUnoL + "vw";
}
function movimientoNubeDos() {
  nubeDosT = Math.round(Math.random() * 75);
  document.getElementById(`nubeDos`).style.marginTop = nubeDosT + "vh";
  nubeDosL = Math.round(Math.random() * 90);
  document.getElementById(`nubeDos`).style.marginLeft = nubeDosL + "vw";
}
function movimientoNubeTres() {
  nubeTresT = Math.round(Math.random() * 75);
  document.getElementById(`nubeTres`).style.marginTop = nubeTresT + "vh";
  nubeTresL = Math.round(Math.random() * 90);
  document.getElementById(`nubeTres`).style.marginLeft = nubeTresL + "vw";
}
function movimientoNubeCuatro() {
  nubeCuatroT = Math.round(Math.random() * 75);
  document.getElementById(`nubeCuatro`).style.marginTop = nubeCuatroT + "vh";
  nubeCuatroL = Math.round(Math.random() * 90);
  document.getElementById(`nubeCuatro`).style.marginLeft = nubeCuatroL + "vw";
}
function movimientoNubeCinco() {
  nubeCincoT = Math.round(Math.random() * 75);
  document.getElementById(`nubeCinco`).style.marginTop = nubeCincoT + "vh";
  nubeCincoL = Math.round(Math.random() * 90);
  document.getElementById(`nubeCinco`).style.marginLeft = nubeCincoL + "vw";
}

function intervalUni(interval) {
  movUni = setInterval(movimientoUnicornio, interval);
}
function intervalNubeUno(interval) {
  movNubeUno = setInterval(movimientoNubeUno, interval);
}
function intervalNubeDos(interval) {
  movNubeDos = setInterval(movimientoNubeDos, interval);
}
function intervalNubeTres(interval) {
  movNubeTres = setInterval(movimientoNubeTres, interval);
}
function intervalNubeCuatro(interval) {
  movNubeCuatro = setInterval(movimientoNubeCuatro, interval);
}
function intervalNubeCinco(interval) {
  movNubeCinco = setInterval(movimientoNubeCinco, interval);
}
function intervalTiempo() {
  movTime = setInterval(restarTiempo, 1000);
}

function intervalStop() {
  clearInterval(movTime);
  clearInterval(movUni);
  clearInterval(movNubeUno);
  clearInterval(movNubeDos);
  clearInterval(movNubeTres);
  clearInterval(movNubeCuatro);
  clearInterval(movNubeCinco);
}

function scoreTabla() {
  document.getElementById(
    "vidas"
  ).innerHTML = `Corazones: ${vidas}/${Corazones}`;
  document.getElementById("puntos").innerHTML = `Puntos: ${puntos}/${score}`;
  document.getElementById("tiempo").innerHTML = `Tiempo: ${tiempo}`;
  document.getElementById("nivel").innerHTML = `Nivel: ${nivel}/5`;
}

function inicioPopUp() {
  popUp.classList.add(`active`);
}

function stopPopUp() {
  popUp.classList.remove(`active`);
}

function removerNubes() {
  nubeUno.classList.remove(`mostrar`);
  nubeDos.classList.remove(`mostrar`);
  nubeTres.classList.remove(`mostrar`);
  nubeCuatro.classList.remove(`mostrar`);
  nubeCinco.classList.remove(`mostrar`);
}

function removeFondo() {
  fondo.classList.remove(`fondo1`);
  fondo.classList.remove(`fondo2`);
  fondo.classList.remove(`fondo3`);
  fondo.classList.remove(`fondo4`);
  fondo.classList.remove(`fondo5`);
}
