/* Crea una función que calcule el índice de masa corporal (IMC) 
de una persona a partir de su altura en metros y peso en kilogramos, 
que se recibirán como parámetros.
*/
function calculoIMC(altura, peso) {
  return peso / (altura * altura);
}
calculoIMC(1.66, 70);

/* Crea una función que calcule el valor del factorial de un número pasado como parámetro. */
function factorial(num) {
  let numero = 1;
  for (let i = 1; i <= num; i++) {
    numero = numero * i;
  }
  return numero;
}
factorial(5);

/* Crea una función que convierta un valor en dólares, pasado como parámetro, 
y devuelva el valor del dólar en tu país. Para esto, considera la cotización del dólar. */
function formatoDeMonedas(formato, moneda, cantidad = 0) {
  return new Intl.NumberFormat(formato, {
    style: "currency",
    currency: moneda,
  }).format(cantidad);
}
function divisas(dolares = 0) {
  let formatoDolares = formatoDeMonedas("en-US", "USD", dolares);
  let convertidor = dolares * 7.81;
  let formatoQuetzales = formatoDeMonedas("es-GT", "GTQ", convertidor);
  return `${formatoDolares} ${
    dolares === 1 ? "Dolar" : "Dolares"
  } Estodounidenses es igual a: ${formatoQuetzales} Quetzales`;
}
divisas(179);

/* Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, 
   utilizando la altura y la anchura que se proporcionarán como parámetros. */
function calculoRectangulo(altura = 0, ancho = 0) {
  let perimetro = 2 * altura + 2 * ancho;
  let area = altura * ancho;
  return `El perimetro es: ${perimetro} \n El area es: ${area}`;
}
calculoRectangulo(9, 4);

/* Crea una función que muestre en pantalla el área y el perímetro de una sala circular, 
   utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
*/
function calculoCirculo(radio) {
  const PI = Math.PI.toFixed(2);
  let area = PI * Math.pow(radio, 2);
  let perimetro = PI * radio * 2;
  return `El perimetro es: ${perimetro.toFixed(2)} \n El area es: ${area.toFixed(2)}`;
}
calculoCirculo(5);

/* Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro. */
function tablaMultiplicar(numero) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${i} * ${numero} = ${i * numero}`);
  }
}
tablaMultiplicar(5);
