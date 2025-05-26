const opciones = ["piedra", "papel", "tijera"];

let puntosUsuario = 0;
let puntosOrdenador = 0;

const botones = document.querySelectorAll(".boton-jugada");
const resultados = document.getElementById("resultados");
const contadorUsuario = document.getElementById("contador-usuario");
const contadorOrdenador = document.getElementById("contador-ordenador");

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    const jugadaUsuario = boton.dataset.jugada;
    const jugadaOrdenador = obtenerJugadaAleatoria();
    const resultado = obtenerResultado(jugadaUsuario, jugadaOrdenador);

    mostrarResultado(jugadaUsuario, jugadaOrdenador, resultado);
    actualizarPuntuacion(resultado);
  });
});

function obtenerJugadaAleatoria() {
  const indice = Math.floor(Math.random() * opciones.length);
  return opciones[indice];
}

function obtenerResultado(usuario, ordenador) {
  if (usuario === ordenador) return "empate";

  if (
    (usuario === "piedra" && ordenador === "tijera") ||
    (usuario === "papel" && ordenador === "piedra") ||
    (usuario === "tijera" && ordenador === "papel")
  ) {
    return "ganas";
  } else {
    return "pierdes";
  }
}

function mostrarResultado(usuario, ordenador, resultado) {
  resultados.innerHTML = `
    <p>Elegiste <strong>${usuario}</strong> y la máquina eligió <strong>${ordenador}</strong>.</p>
    <p>Resultado: <strong>${resultado.toUpperCase()}</strong></p>
  `;
}

function actualizarPuntuacion(resultado) {
  if (resultado === "ganas") {
    puntosUsuario++;
  } else if (resultado === "pierdes") {
    puntosOrdenador++;
  }

  contadorUsuario.textContent = `Tus puntos: ${puntosUsuario}`;
  contadorOrdenador.textContent = `Puntos de la máquina: ${puntosOrdenador}`;
}
