/* Crear una función que muestre "¡Hola, mundo!" en la consola. */
function mensajeConsola() {
  console.log("¡Hola, mundo!");
}
mensajeConsola();

/* Crear una función que reciba un nombre como parámetro 
  y muestre "¡Hola, [nombre]!" en la consola. */
function mensajeNombre(nombre) {
  console.log(`¡Hola, ${nombre}!`);
}
mensajeNombre("Danilo");

/* Crear una función que reciba un número como parámetro y 
  devuelva el doble de ese número. */
function numDoble(numero) {
  console.log(numero * 2);
}
numDoble(8);

/* Crear una función que reciba tres números como 
  parámetros y devuelva su promedio. */
function numPromedio(num1, num2, num3) {
  console.log((num1 + num2 + num3) / arguments.length);
}
numPromedio(10, 10, 10);

/* Crear una función que reciba dos números como 
   parámetros y devuelva el mayor de ellos. */
function numMayor(num1, num2) {
  if (num1 > num2) {
    console.log(num1);
  } else {
    console.log(num2);
  }
}
numMayor(20, 21);

/* Crear una función que reciba un número como parámetro 
y devuelva el resultado de multiplicar ese número por sí mismo. */
function numMultiplicado(numero) {
  console.log(numero * numero);
}
numMultiplicado(10);
