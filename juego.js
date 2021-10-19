document.getElementById(`unicornio`).addEventListener("click", sumarPuntos);
document.getElementById(`nubes`).addEventListener("click", restarVida);
document.getElementById(`nubesDos`).addEventListener("click", restarVida);

const Corazones = 3;
const PuntosReseteo = 0;
let puntos = 0;
let tiempo = 60;
let score = 20;
let vidas = Corazones;

let inicio = reseteo();

function sumarPuntos() {
  puntos++;
  scorePuntos();
  randnum = Math.round(Math.random() * 450);
  document.getElementById(`unicornio`).style.marginTop = randnum + "px";
  randnumDos = Math.round(Math.random() * 500);
  document.getElementById(`unicornio`).style.marginLeft = randnumDos + "px";

  if (puntos == 20) {
    alert("Ganaste Sofia");
    reseteo();
  }
}
function restarTiempo() {
  tiempo--;
  document.getElementById("tiempo").innerHTML = `Tiempo: ${tiempo}`;
  randnumTres = Math.round(Math.random() * 450);
  document.getElementById(`nubes`).style.marginTop = randnumTres + "px";
  randnumCuatro = Math.round(Math.random() * 500);
  document.getElementById(`nubes`).style.marginLeft = randnumCuatro + "px";
  randnumCinco = Math.round(Math.random() * 450);
  document.getElementById(`nubesDos`).style.marginTop = randnumCinco + "px";
  randnumSeis = Math.round(Math.random() * 500);
  document.getElementById(`nubesDos`).style.marginLeft = randnumSeis + "px";
  if (tiempo == 0) {
    alert(
      "Te quedaste sin tiempo pierdes un corazon vuelve a intentarlo Sofia"
    );
    reseteoDos();
  } else if (vidas == 0) {
    alert("Te quedaste sin vida, vulve a intentarlo");
    reseteo();
  }
}

setInterval(restarTiempo, 1000);

function restarVida() {
  vidas--;
  scoreCorazon();
  if (vidas == 0) {
    alert("Te quedaste sin vida, vulve a intentarlo");
    reseteo();
  }
}

// funciones para simplificar el codigo
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

function reseteo() {
  tiempo = 60;
  puntos = PuntosReseteo;
  vidas = Corazones;
  scoreCorazon();
  scorePuntos();
}
function reseteoDos() {
  tiempo = 60;
  puntos = PuntosReseteo;
  vidas--;
  scoreCorazon();
  scorePuntos();
}
