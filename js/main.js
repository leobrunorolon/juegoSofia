// const inputs = document.querySelectorAll(`#formulario input`);

// Letras, numeros, sin guion  guion_bajo y con caractares de 4 a 8
const expresiones = {
  usuarios: /^[a-zA-Z0-9]{4,8}$/,
};

// formulario.addEventListener(`submit`, validarUsuario());
// const Usuario = [];

document.getElementById(`formulario`).addEventListener(`submit`, (event) => {
  event.preventDefault();
  const usuario = document.getElementById(`usuario`).value;
  localStorage.setItem("usuario", usuario);
});
// function validarUsuario() {
//   if (expresiones.usuarios.test(usuario)) {
//     document
//       .getElementById(`section__usuario`)
//       .classList.remove(`section__usuario-incorrecto`);
//     document
//       .getElementById(`section__usuario`)
//       .classList.add(`section__usuario-correcto`);
//   } else {
//     document
//       .getElementById(`section__usuario`)
//       .classList.add(`section__usuario-incorrecto`);
//   }
// }
