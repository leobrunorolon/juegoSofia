const usuario = localStorage.getItem("usuario");

// pop stop
const stopPopUp = () => {
  $("#popUp").addClass(`ocultar`);
  $(`#textPopContainer`).removeClass(`section__popup--info`);
};
// stop inicio
const inicioPopUp = () => {
  $("#popUp").removeClass(`ocultar`);
};
const agrandarPop = () => {
  $(`#textPopContainer`).addClass(`section__popup--info`);
};

// popup de inicio
const textoPopUp = () => {
  inicioPopUp();
  $(`#textPop`).html(`
  <h3>Bienvenido <strong class="strongUser">${usuario}</strong></h3>
  <p>Haz click en <strong class="botonstrong">Iniciar</strong> para continuar</p>
  `);
};

// popup pierdes una vida
const popSinVida = () => {
  inicioPopUp();
  $(`#textPop`).html(`
  <h3>Perdiste <strong class="strongUser">${usuario}</strong></h3>
  <p>Te quedaste sin corazones has click en <strong class="botonstrong">Iniciar</strong> para continuar</p>
  `);
};

// popup te quedaste sin tiempo
const popSinTiempo = () => {
  inicioPopUp();
  $(`#textPop`).html(`
  <h3>Perdiste un corazon</h3>
  <p>Te quedaste sin tiempo <strong class="strongUser">${usuario}</strong> has click en <strong class="botonstrong">Iniciar</strong> para continuar</p>
  `);
};

// popup pasas de nivel
const popNextNivel = () => {
  inicioPopUp();
  $(`#textPop`).html(`
  <h3>Sigue asi <strong class="strongUser">${usuario}</strong></h3>
  <p>Eres grandios@ has pasado al siguiente Nivel <strong class="botonstrong">Iniciar</strong> para continuar</p>
  `);
};

// popup ganaste completaste todos los niveles
const popGanar = () => {
  inicioPopUp();
  $(`#textPop`).html(`
  <h3>Ganaste <strong class="strongUser">${usuario}</strong></h3>
  <p>Completaste todos los niveles <strong class="botonstrong">Iniciar</strong> para volver a empezar</p>
  `);
};
// popup info del juego
const popInfo = () => {
  inicioPopUp();
  agrandarPop();
  $(`#textPop`).html(`
  <div
  id="carouselExampleFade"
  class="carousel slide carousel-fade"
  data-bs-ride="carousel"
>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <h3>Ayuda a Sofia, el Unicornio sin alas a volar</h3>
      <img src="img/unicornio.png" class="img-carousel" alt="..." />
      <p>Haz click en Sofia, de ese modo la ayudaras a volar,</p>
      <p>Pero ademas sumaras puntos para pasar de nivel.</p>
    </div>
    <div class="carousel-item">
      <h3>Pero ten cuidado en el camino</h3>
      <img src="img/nube.png" class="img-carousel" alt="..." />
      <p>Te puedes encontrar con nubes, las cuales te pueden electrocutar
      Y perderas un Corazon por cada nube que toques.</p>
    </div>
    <div class="carousel-item">
      <h3>Estas listo para esta Aventura</h3>
      <img src="img/fondo5.jpg" class="img-carousel" alt="..." />
      <p>Haz click en <strong class="botonstrong">Iniciar</strong> para comenzar la aventura</p>
    </div>
  </div>
  <button
    class="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleFade"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleFade"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  `);
};
