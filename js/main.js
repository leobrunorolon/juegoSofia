$(`#formulario`).submit((event) => {
  event.preventDefault();
  const usuario = document.getElementById(`usuario`).value;
  localStorage.setItem("usuario", usuario);
  if (!usuario) {
    let errorUsuario = $(`#mensaje`);
    errorUsuario
      .html("<p>Ingresa un Usuario para continuar</p>")
      .css(`color`, `#FF3333`);
  } else if (usuario.length < 4 || usuario.length > 8) {
    let error = $(`#mensaje`);
    error
      .html(
        `<p>Ingresa un Usuario valido</p>
        <p>Recuerda que el Usuario</p> 
      <p>tiene que tener entre 4 a 8 caracteres</p>`
      )
      .css(`color`, `#912CF7`);
  } else {
    let correcto = $(`#mensaje`);
    correcto.html("<p>Usuario correcto</p>").css(`color`, `#00a150`);
    $(`#botonIngreso`).show(() => {
      $(`.inputOculto`).slideUp(1000);
    });
  }
});
