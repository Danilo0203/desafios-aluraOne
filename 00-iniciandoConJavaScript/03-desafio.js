/* Crea un programa que utilice console.log para mostrar un mensaje de bienvenida. */
console.log("Bienvenidos");
/* Crea una variable llamada "nombre" y asígnale tu nombre. 
  Luego, utiliza console.log para mostrar el mensaje "¡Hola, [tu nombre]!" 
  en la consola del navegador.
*/
let nombre = "Danilo";
console.log(`¡Hola, ${nombre}!`);
/* Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza 
alert para mostrar el mensaje "¡Hola, [tu nombre]!". */
alert(`¡Hola, ${nombre}!`);

/* Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación 
que más te gusta?. Luego, almacena la respuesta en una variable y muestra la respuesta 
en la consola del navegador.
*/
let lenguaje = prompt("¿Cuál es el lenguaje de programación que más te gusta?");
console.log(`El lenguaje de programación que más te gusta es: ${lenguaje}`);

/* Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores 
numéricos de tu elección. Luego, realiza la suma de estos dos valores y almacena el 
resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar 
el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.
*/

let valor1 = 3,
  valor2 = 2,
  resultado = valor1 + valor2;
console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultado}`);

/* Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos 
de tu elección. Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera 
variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] 
y [valor2] es igual a [resultado]." en la consola.
*/
console.log(`La diferencia entre ${valor1} y ${valor2} es igual a ${valor1 - valor2}`);

/* Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, utiliza un if para verificar 
si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola. */
let edad = prompt("Por favor ingrese su edad");
console.log(
  `Hola ${nombre}, eres ${edad >= 18 ? `mayor de edad tienes ${edad} años` : `menor de edad tienes ${edad} años`}`
);

/* Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es positivo, negativo o 
  cero utilizando un if-else y muestra el mensaje correspondiente.
*/
let numero = parseInt(prompt("Porfavor ingrese un numero"));
let respuesta = numero > 0 ? "El numero es positivo" : numero < 0 ? "El numero es negativo" : "El numero es cero";

console.log(respuesta);

/* Utiliza un bucle while para mostrar los números del 1 al 10 en la consola. */
let count = 1;
while (count <= 10) {
  console.log(count++);
}

/* Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else para determinar si 
  la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.
*/
let nota = Math.ceil(Math.random() * 10);
let notaFinal = nota >= 7 ? `Aprobado con ${nota} puntos` : `Reprobado con ${nota} puntos`;
console.log(notaFinal);

/* Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola. */
console.log(Math.ceil(Math.random() * 100));

/* Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola. */
console.log(Math.ceil(Math.random() * 10));

/* Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola. */
console.log(Math.ceil(Math.random() * 1000));
