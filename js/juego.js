const iniciarJuego = () => {
  switch (nivel) {
    case 1: {
      jugar();
      break;
    }
    case 2: {
      jugar();
      break;
    }
    case 3: {
      jugar();
      break;
    }
    case 4: {
      jugar();
      break;
    }
    case 5: {
      jugar();
      break;
    }
    default: {
      traerDatos();
      intervalStop();
      removerNubes();
      subtitulo.textContent = `Completaste todos los niveles Iniciar para volver a empezar`;
      titulo.textContent = `Ganaste ${usuario}`;
      nivel = 1;
    }
  }
};
const jugar = () => {
  removeFondo();
  scoreTabla();
  intervalTiempo();
  niveles();
  inicioPopUp();
};

const reseteo = () => {
  stopPopUp();
  tiempo = 60;
  puntos = PuntosReseteo;
  vidas = Corazones;
  nivel++;
  intervalStop();
};

const reseteoDos = () => {
  stopPopUp();
  intervalStop();
  removerNubes();
  tiempo = 60;
  puntos = PuntosReseteo;
  vidas = 3;
  nivel = 1;
};

const sumarPuntos = () => {
  puntos++;
  scoreTabla();
  movimiento("unicornio");
  if (puntos == 20) {
    subtitulo.textContent = `Eres grandios@ has pasado al siguiente Nivel Iniciar para continuar`;
    titulo.textContent = `Sigue asi ${usuario}`;
    reseteo();
  }
};
const restarTiempo = () => {
  tiempo--;
  scoreTabla();
  if (tiempo == 0) {
    vidas--;
    subtitulo.textContent = `Te quedaste sin tiempo ${usuario} has click en Iniciar para continuar`;
    titulo.textContent = `Perdiste un corazon`;
    reseteoDos();
  }
  if (vidas == 0) {
    subtitulo.textContent = `Te quedaste sin corazones has click en Inicio para continuar`;
    titulo.textContent = `Perdiste ${usuario}`;
    reseteoDos();
  }
};

const restarVida = () => {
  vidas--;
  scoreTabla();
  if (vidas == 0) {
    subtitulo.textContent = `Te quedaste sin corazones has click en Iniciar para continuar`;
    titulo.textContent = `Perdiste ${usuario}`;
    reseteoDos();
  }
};

const niveles = () => {
  scoreTabla();
  if (nivel == 1) {
    $("#nubeUno").addClass(`mostrar`);
    $("#fondo").addClass(`fondo1`);
    intervalUni(1000);
    intervalNubeUno(1000);
  } else if (nivel == 2) {
    $("#nubeDos").addClass(`mostrar`);
    $("#fondo").addClass(`fondo2`);
    intervalUni(1000);
    intervalNubeUno(1000);
    intervalNubeDos(2000);
  } else if (nivel == 3) {
    $("#nubeTres").addClass(`mostrar`);
    $("#fondo").addClass(`fondo3`);
    scoreTabla();
    intervalUni(1000);
    intervalNubeUno(1000);
    intervalNubeDos(2000);
    intervalNubeTres(800);
  } else if (nivel == 4) {
    $("#nubeCuatro").addClass(`mostrar`);
    $("#fondo").addClass(`fondo4`);
    scoreTabla();
    intervalUni(1000);
    intervalNubeUno(1000);
    intervalNubeDos(2000);
    intervalNubeTres(800);
    intervalNubeCuatro(600);
  } else if (nivel == 5) {
    $("#nubeCinco").addClass(`mostrar`);
    $("#fondo").addClass(`fondo5`);
    scoreTabla();
    intervalUni(1000);
    intervalNubeUno(1000);
    intervalNubeDos(2000);
    intervalNubeTres(800);
    intervalNubeCuatro(600);
    intervalNubeCinco(400);
  } else {
  }
};
// funciones para simplificar el codigo
// movimiento
const movimiento = (dato) => {
  let datoT = dato + "T";
  datoT = Math.round(Math.random() * 70);
  $(`#` + dato).css("marginTop", datoT + "vh");
  let datoL = dato + "L";
  datoL = Math.round(Math.random() * 85);
  $(`#` + dato).css("marginLeft", datoL + "vw");
};
const intervalUni = (interval) => {
  movUni = setInterval(() => {
    movimiento("unicornio");
  }, interval);
};
const intervalNubeUno = (interval) => {
  movNubeUno = setInterval(() => {
    movimiento("nubeUno");
  }, interval);
};
const intervalNubeDos = (interval) => {
  movNubeDos = setInterval(() => {
    movimiento("nubeDos");
  }, interval);
};
const intervalNubeTres = (interval) => {
  movNubeTres = setInterval(() => {
    movimiento("nubeTres");
  }, interval);
};
const intervalNubeCuatro = (interval) => {
  movNubeCuatro = setInterval(() => {
    movimiento("nubeCuatro");
  }, interval);
};
const intervalNubeCinco = (interval) => {
  movNubeCinco = setInterval(() => {
    movimiento("nubeCinco");
  }, interval);
};
const intervalTiempo = () => {
  movTime = setInterval(restarTiempo, 1000);
};

const intervalStop = () => {
  clearInterval(movTime);
  clearInterval(movUni);
  clearInterval(movNubeUno);
  clearInterval(movNubeDos);
  clearInterval(movNubeTres);
  clearInterval(movNubeCuatro);
  clearInterval(movNubeCinco);
};

const scoreTabla = () => {
  $("#vidas").html(`Corazones: ${vidas}/${Corazones}`);
  $("#puntos").html(`Puntos: ${puntos}/${score}`);
  $("#tiempo").html(`Tiempo: ${tiempo}`);
  $("#nivel").html(`Nivel: ${nivel}/5`);
};

const inicioPopUp = () => {
  $("#popUp").addClass(`active`);
};

const stopPopUp = () => {
  $("#popUp").removeClass(`active`);
};

const removerNubes = () => {
  $("#nubeUno").removeClass(`mostrar`);
  $("#nubeDos").removeClass(`mostrar`);
  $("#nubeTres").removeClass(`mostrar`);
  $("#nubeCuatro").removeClass(`mostrar`);
  $("#nubeCinco").removeClass(`mostrar`);
};

const removeFondo = () => {
  $("#fondo").removeClass(`fondo1`);
  $("#fondo").removeClass(`fondo2`);
  $("#fondo").removeClass(`fondo3`);
  $("#fondo").removeClass(`fondo4`);
  $("#fondo").removeClass(`fondo5`);
};

const traerDatos = () => {
  $.getJSON(URLJSON, function (respuesta, estado) {
    if (estado === "success") {
      for (const dato of respuesta.juego) {
        Corazones = Number(dato.corazones);
        PuntosReseteo = Number(dato.puntosReseteo);
        nivel = Number(dato.nivel);
        puntos = Number(dato.puntos);
        tiempo = Number(dato.tiempo);
        score = Number(dato.score);
        vidas = Number(dato.vidas);
      }
    }
  });
};
const traerMapas = () => {
  $.getJSON(MAPJSON, function (respuesta, estado) {
    if (estado === "success") {
      for (const dato of respuesta.mapas) {
        fondo1 = dato.fondo1;
        fondo2 = dato.fondo2;
        fondo3 = dato.Fondo3;
        fondo4 = dato.Fondo4;
        fondo5 = dato.Fondo5;
      }
    }
  });
};

const botonInicio = $(`#botonInicio`).click(iniciarJuego);
const uniSumar = $(`#unicornio`).click(sumarPuntos);
const nubesRestar = $(`.nubes`).click(restarVida);
const usuario = localStorage.getItem("usuario");
const URLJSON = "json/juego.json";
const MAPJSON = "json/mapas.json";

// const Corazones = 3;
// const PuntosReseteo = 0;
// let nivel = 1;
// let puntos = 0;
// let tiempo = 60;
// let score = 20;
// let vidas = Corazones;

let movTime = 0;
let movUni = null;
let movNubeUno = null;
let movNubeDos = null;
let movNubeTres = null;
let movNubeCuatro = null;
let movNubeCinco = null;
/*Se utilizo este metodo ya que me resulto mas facil ya que de este modo
se mantiene la estructura pero solo se modifica el texto */
const textoPop = document.getElementById(`textPop`);
let subtitulo = document.createElement(`p`);
subtitulo.textContent = `Haz click en Iniciar para continuar`;
textoPop.appendChild(subtitulo);
let titulo = document.createElement(`h3`);
titulo.textContent = `Bienvenido ${usuario}`;
textoPop.appendChild(titulo);
$("#textPop").append();
