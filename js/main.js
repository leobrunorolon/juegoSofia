document.getElementById(`formulario`).addEventListener(`submit`, (event) => {
  event.preventDefault();
  const usuario = document.getElementById(`usuario`).value;
  localStorage.setItem("usuario", usuario);
  if (!usuario) {
    let error = document.getElementById(`mensaje`);
    error.textContent = `Ingresa un Usuario para continuar`;
  } else if (usuario.length <= 3 || usuario.length >= 8) {
    let error = document.getElementById(`mensaje`);
    error.textContent = `Ingresa un Usuario valido`;
    $(`#mensaje`)
      .append(
        `<p>Recuerda que el Usuario</p> 
      <p>tiene que tener entre 4 a 8 caracteres</p>`
      )
      .children()
      .css(`color`, `gray`);
  } else {
    const correcto = document.getElementById(`mensaje`);
    correcto.textContent = `Usuario correcto`;
    correcto.classList.add(`correcto`);

    const botonIngreso = document.getElementById(`botonIngreso`);
    $(`#botonIngreso`).show(() => {
      $(`.inputOculto`).slideUp(1000);
    });
  }
});
