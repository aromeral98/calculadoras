var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

function calcularDni(){
    const dni = document.querySelector(".dni");
    var numero = dni.value;
    dni.addEventListener("keydown",(e)=>{
    
})
if(numero < 0 || numero > 99999999 ) {
    var newDiv = document.createElement("div");
  var newContent = document.createTextNode(`Introduce un dni valido`);
  newDiv.appendChild(newContent); //añade texto al div creado.
  newDiv.classList.add("incorrecto");

  // añade el elemento creado y su contenido al DOM
  var currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}
else {
  var letraCalculada = letras[numero % 23];
  var newDiv = document.createElement("div");
  var newContent = document.createTextNode(`Tu dni completo es ${numero}${letraCalculada}`);
  newDiv.appendChild(newContent); //añade texto al div creado.
  newDiv.classList.add("correcto");

  // añade el elemento creado y su contenido al DOM
  var currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);

}}
