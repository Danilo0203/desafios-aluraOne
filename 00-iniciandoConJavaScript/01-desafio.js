/* Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", 
muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".
 */
let diaUser = prompt("¿Qué día de la semana es?");
if (
  diaUser.toLocaleLowerCase() === "sabado" ||
  diaUser.toLocaleLowerCase() === "domingo"
) {
  alert("¡Buen fin de semana!");
} else {
  alert("¡Buena semana!");
}

/* Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa. */
let numUser = prompt("Ingrese un numero positivo o negativo");
if (numUser > 0) {
  alert(`El numero ingresado: ${numUser}, es positivo`);
} else {
  alert(`El numero ingresado: ${numUser}, es negativo`);
}
/* Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, 
   muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intenta nuevamente para ganar.".
*/
let sistemPuntuacion = prompt("Ingrese una puntuación");
if (sistemPuntuacion >= 100) {
  alert(`¡Felicidades, has ganado! con ${sistemPuntuacion} puntos`);
} else {
  alert("Intenta nuevamente para ganar.");
}

/* Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un 
   template string para incluir el valor del saldo.
*/
let saldo = 1000;
alert(`El saldo actual de su cuenta es: Q.${saldo}.00`);

/* Pide al usuario que ingrese su nombre mediante un prompt. 
   Luego, muestra una alerta de bienvenida usando ese nombre.
*/
let nombreUser = prompt("Ingrese su nombre de Usuario");
alert(`¡Bienvenido ${nombreUser}!`);
