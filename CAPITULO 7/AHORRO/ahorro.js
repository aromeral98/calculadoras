// Vamos a ello
// Para tomar valores y colocar valores en el navegador tomamos referencias a los elementos html que necesitamos

// Entradas de texto
const elementoImporte = document.getElementById("importe");
const elementoPorcentajeAhorro = document.getElementById("porcentajeahorro");
const elementoPorcentajeInversion = document.getElementById(
  "porcentajeinversion"
);
const elementoPorcentajeGastos = document.getElementById("porcentajegastos");

// Elementos para mostrar info
const elementoIntroducido = document.getElementById("introducido");
const elementoAhorro = document.getElementById("ahorro");
const elementoInversion = document.getElementById("inversion");
const elementoGastos = document.getElementById("gasto");
const elementoPorcentajeExcedido = document.getElementById(
  "porcentajeexcedido"
);

// El botón
const botonCalcular = document.getElementById("calcular");

// Asignamos la función calcular al click del raton en el botón
botonCalcular.addEventListener("click", calcular);

var output = document.getElementById("demo");
output.innerHTML = porcentajeahorro.value + "%";

porcentajeahorro.oninput = function() {
  output.innerHTML = this.value + "%";
};
var output1 = document.getElementById("demo1");
output1.innerHTML = porcentajeinversion.value + "%";

porcentajeinversion.oninput = function() {
  output1.innerHTML = this.value + "%";
};
var output2 = document.getElementById("demo2");
output2.innerHTML = porcentajegastos.value + "%";

porcentajegastos.oninput = function() {
  output2.innerHTML = this.value + "%";
};

// Creamos la funcion calcular hipoteca
function calcular() {
  // Asumimos que esta función solo se ejecuta una vez están todos los campos rellenos correctamente
  // y el usuario pulsa el botón calcular

  // Tomamos los valores introducdos por el usuario y los convertimos a números
  // ParseFloat convierte de cadena de texto a número con decimales
  const ahorro = parseInt(
    (elementoImporte.value * elementoPorcentajeAhorro.value) / 100
  );
  const inversion = parseFloat(
    (elementoImporte.value * elementoPorcentajeInversion.value) / 100
  );
  const gastos = parseInt(
    (elementoImporte.value * elementoPorcentajeGastos.value) / 100
  );
  const sumaporcentajes =
    parseInt(elementoPorcentajeAhorro.value) +
    parseInt(elementoPorcentajeGastos.value) +
    parseInt(elementoPorcentajeInversion.value);
  const introducido = parseInt(elementoImporte.value);

  elementoAhorro.textContent =
    Intl.NumberFormat("us-EN").format(ahorro.toFixed(2)) + "€";
  elementoInversion.textContent =
    Intl.NumberFormat("us-EN").format(inversion.toFixed(2)) + "€";
  elementoGastos.textContent =
    Intl.NumberFormat("us-EN").format(gastos.toFixed(2)) + "€";
  elementoIntroducido.textContent =
    Intl.NumberFormat("us-EN").format(introducido.toFixed(2)) + "€";

  if (sumaporcentajes > 100) {
    elementoPorcentajeExcedido.textContent = `El porcentaje asignado no puede ser mayor del 100% Actual: ${sumaporcentajes}  %`;
    elementoPorcentajeExcedido.classList.add("incorrecto1");
    elementoPorcentajeExcedido.classList.remove("correcto1");
  } else {
    elementoPorcentajeExcedido.textContent = `El porcentaje asignado no puede ser mayor del 100%  Actual: ${sumaporcentajes}  %`;
    elementoPorcentajeExcedido.classList.add("correcto1");
    elementoPorcentajeExcedido.classList.remove("incorrecto1");
  }
}

var userAgent = navigator.userAgent || navigator.vendor || window.opera;

function restablecer() {
  porcentajeahorro.value = 30;
  porcentajegastos.value = 50;
  porcentajeinversion.value = 20;
  output.innerHTML = porcentajeahorro.value + "%";
  output1.innerHTML = porcentajeinversion.value + "%";
  output2.innerHTML = porcentajegastos.value + "%";
  calcular();
}

if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
) {
    const calculadora = document.getElementById("Cuadroprincipal");
    const fondo = document.getElementById("fondo");
    const body = document.getElementById("body");
    calculadora.classList.remove("bg-text");
    // TODO: No meter nunca clases por js
    // calculadora.classList.add("movil");
    // calculadora.classList.add("container");
    fondo.classList.remove("bg-image");
    body.classList.add("movil-fondo");
}
