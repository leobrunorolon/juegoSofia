// inicializacion de pop up
textoPopUp();
// inicio del juego
const iniciarJuego = () => {
  if (nivel <= 5) {
    jugar();
  } else {
    traerDatos();
    if (nivel == 6) {
      popGanar();
      removerOjetos();
    }
  }
};
// iniciar datos del juego
const jugar = () => {
  stopPopUp();
  intervalTiempo();
  niveles();
  scoreTabla();
};
// Reseteo up nivel
const reseteo = () => {
  intervalStop();
  tiempo = 60;
  puntos = PuntosReseteo;
  vidas = Corazones;
  nivel++;
};
// Reseteo game over
const reseteoDos = () => {
  intervalStop();
  removerOjetos();
  tiempo = 60;
  puntos = PuntosReseteo;
  vidas = 3;
  nivel = 1;
};

// sumado de puntos por click en unicornio
const sumarPuntos = () => {
  puntos++;
  scoreTabla();
  movimiento("unicornio");
  if (puntos == 20) {
    reseteo();
    popNextNivel();
  }
};

// manejo de tiempo
const restarTiempo = () => {
  tiempo--;
  scoreTabla();
  if (tiempo == 0) {
    vidas--;
    reseteoDos();
    popSinTiempo();
  }
  if (vidas == 0) {
    reseteoDos();
    popSinVida();
  }
};

// restar vida por click en nubes
const restarVida = () => {
  vidas--;
  scoreTabla();
  if (vidas == 0) {
    reseteoDos();
    popSinVida();
  }
};
// niveles de juego de aca se puede configurar el fondo cantidad de nubes velocidad de cambio de unicornio o nubes
const niveles = () => {
  scoreTabla();
  if (nivel == 1) {
    addObjeto();
    intervalUni(1000);
    intervalNubeUno(1000);
  } else if (nivel == 2) {
    addObjeto();
    intervalUni(1000);
    intervalNubeUno(1000);
    intervalNubeDos(2000);
  } else if (nivel == 3) {
    addObjeto();
    scoreTabla();
    intervalUni(1000);
    intervalNubeUno(1000);
    intervalNubeDos(2000);
    intervalNubeTres(800);
  } else if (nivel == 4) {
    addObjeto();
    scoreTabla();
    intervalUni(1000);
    intervalNubeUno(1000);
    intervalNubeDos(2000);
    intervalNubeTres(800);
    intervalNubeCuatro(600);
  } else if (nivel == 5) {
    addObjeto();
    scoreTabla();
    intervalUni(1000);
    intervalNubeUno(1000);
    intervalNubeDos(2000);
    intervalNubeTres(800);
    intervalNubeCuatro(600);
    intervalNubeCinco(400);
  } else if (nivel == 6) {
    popGanar();
  } else {
    traerDatos();
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

// movimiento + intervalo de objetos
// unicornio
const intervalUni = (interval) => {
  movUni = setInterval(() => {
    movimiento("unicornio");
  }, interval);
};
// nube uno
const intervalNubeUno = (interval) => {
  movNubeUno = setInterval(() => {
    movimiento("nubeUno");
  }, interval);
};
// nube dos
const intervalNubeDos = (interval) => {
  movNubeDos = setInterval(() => {
    movimiento("nubeDos");
  }, interval);
};
// nube tres
const intervalNubeTres = (interval) => {
  movNubeTres = setInterval(() => {
    movimiento("nubeTres");
  }, interval);
};
// nube cuatro
const intervalNubeCuatro = (interval) => {
  movNubeCuatro = setInterval(() => {
    movimiento("nubeCuatro");
  }, interval);
};
// nube cinco
const intervalNubeCinco = (interval) => {
  movNubeCinco = setInterval(() => {
    movimiento("nubeCinco");
  }, interval);
};
// manejo de tiempo  atravez de interval
const intervalTiempo = () => {
  movTime = setInterval(restarTiempo, 1000);
};

// stop de tiempo y objetos
const intervalStop = () => {
  clearInterval(movTime);
  clearInterval(movUni);
  clearInterval(movNubeUno);
  clearInterval(movNubeDos);
  clearInterval(movNubeTres);
  clearInterval(movNubeCuatro);
  clearInterval(movNubeCinco);
};

// tabla de score de juego
const scoreTabla = () => {
  $("#vidas").html(`Corazones: ${vidas}/${Corazones}`);
  $("#puntos").html(`Puntos: ${puntos}/${score}`);
  $("#tiempo").html(`Tiempo: ${tiempo}`);
  $("#nivel").html(`Nivel: ${nivel}/5`);
};

// agregar nube y fondo segun el nivel
const addObjeto = () => {
  if (nivel == 1) {
    $("#nubeUno").addClass(`mostrar`);
    $("#fondo").addClass(`fondo1`);
  } else if (nivel == 2) {
    $("#nubeDos").addClass(`mostrar`);
    $("#fondo").addClass(`fondo2`);
  } else if (nivel == 3) {
    $("#nubeTres").addClass(`mostrar`);
    $("#fondo").addClass(`fondo3`);
  } else if (nivel == 4) {
    $("#nubeCuatro").addClass(`mostrar`);
    $("#fondo").addClass(`fondo4`);
  } else if (nivel == 5) {
    $("#nubeCinco").addClass(`mostrar`);
    $("#fondo").addClass(`fondo5`);
  } else {
  }
};

// remover nubes y fondo al perder
const removerOjetos = () => {
  $("#nubeUno").removeClass(`mostrar`);
  $("#nubeDos").removeClass(`mostrar`);
  $("#nubeTres").removeClass(`mostrar`);
  $("#nubeCuatro").removeClass(`mostrar`);
  $("#nubeCinco").removeClass(`mostrar`);

  $("#fondo").removeClass(`fondo1`);
  $("#fondo").removeClass(`fondo2`);
  $("#fondo").removeClass(`fondo3`);
  $("#fondo").removeClass(`fondo4`);
  $("#fondo").removeClass(`fondo5`);
};

// traer datos del juego json
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

// popup info del juego
const infoJuego = () => {
  popInfo();
  intervalStop();
};

const botonInicio = $(`#botonInicio`).click(iniciarJuego);
const uniSumar = $(`#unicornio`).click(sumarPuntos);
const nubesRestar = $(`.nubes`).click(restarVida);
const informacion = $(`#info`).click(infoJuego);
const URLJSON = "json/juego.json";
const URLJSONMAP = "json/mapas.json";

let movTime = 0;
let movUni = null;
let movNubeUno = null;
let movNubeDos = null;
let movNubeTres = null;
let movNubeCuatro = null;
let movNubeCinco = null;
