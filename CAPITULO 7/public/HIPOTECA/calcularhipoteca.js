
// Vamos a ello
// Para tomar valores y colocar valores en el navegador tomamos referencias a los elementos html que necesitamos

// Entradas de texto
const elementoImporte = document.getElementById('importe')
const elementoahorro = document.getElementById('ahorro')
const elementoInteres = document.getElementById('interes')
const elementoaños = document.getElementById('años')

// Elementos para mostrar info
const elementoTotal = document.getElementById('financiar')
const elementoCuota = document.getElementById('cuota')
const elementoPagado = document.getElementById('pagado')
const elementoInteresesPagados = document.getElementById('interesesPagados')

// El botón
const botonCalcular = document.getElementById('calcular')


// Asignamos la función calcular al click del raton en el botón
botonCalcular.addEventListener('click', calcular)


// Creamos la funcion calcular hipoteca
function calcular(){
    
    // Asumimos que esta función solo se ejecuta una vez están todos los campos rellenos correctamente
    // y el usuario pulsa el botón calcular

    // Tomamos los valores introducdos por el usuario y los convertimos a números
    // ParseFloat convierte de cadena de texto a número con decimales
    const importe = parseInt(elementoImporte.value- elementoahorro.value)
    const interesAnual = parseFloat(elementoInteres.value)
    const años = parseInt(elementoaños.value*12)

    // Comenzamos los calculos

    // El interes anual vienen dado en %, asi que dividimos por 100
    // Ademas lo divimos por los 12 mese para tener el interes por cuota
    const interes = (interesAnual/100) /12



    // Calculamos la cuota mensual

    const cuota = importe / (( (1 - ( 1 + interes) ** -años)) / interes)
    // Nota en Javascript (ECMAScript 2016) ** eleva a la potencia de
    // ejemplo:
    //  dos al cuadrado , 2 ** 2
    // 5 elevado a la décima potencia, 5 ** 10


    // Calculamos el total pagado
    // Esto es la cuota por el número de años
    const pagado = cuota * años;

    // Intereses pagados al final de al hipoteca, que alegría
    // Esto es el total pagado menos lo que habíamos pedido de préstamo (el importe)
    const interesesPagados = pagado - importe;

    elementoTotal.textContent=Intl.NumberFormat("us-EN").format(importe.toFixed(2))+"€";
    elementoCuota.textContent = Intl.NumberFormat("us-EN").format(cuota.toFixed(2))+"€";
    elementoPagado.textContent = Intl.NumberFormat("us-EN").format(pagado.toFixed(2))+"€";
    elementoInteresesPagados.textContent = Intl.NumberFormat("us-EN").format(interesesPagados.toFixed(2))+"€";
    
    

}