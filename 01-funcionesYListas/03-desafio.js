/* Crea una lista vacía llamada "listaGenerica". */
let listaGenerica = [];

/* Crea una lista de lenguajes de programación llamada 
"lenguagesDeProgramacion" con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
*/
let lenguagesDeProgramacion = ["JavaScript", "C", "C++", "Kotlin", "Python"];

/* Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'. */
lenguagesDeProgramacion.push("Java", "Ruby", "Gollang");

/* Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion. */
function mostrarListas(lista) {
  console.log(lista);
}
mostrarListas(lenguagesDeProgramacion);

/* Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso. */
function listaInversa(lista) {
  return lista.reverse();
}
listaInversa(lenguagesDeProgramacion);

/* Crea una función que calcule el promedio de los elementos en una lista de números. */
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function promedioLista(lista) {
  let promedio = 0;
  lista.reduce((acumulador, actual) => (promedio = acumulador + actual));
  return promedio / lista.length;
}
promedioLista(numeros);

/* Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista. */
function numMaxMin(lista) {
  let numeroMaximo = Math.max(...lista);
  let numeroMinimo = Math.min(...lista);
  return `El numero maximo es: ${numeroMaximo} \n El numero minimo es: ${numeroMinimo}`;
}
numMaxMin(numeros);

/* Crea una función que devuelva la suma de todos los elementos en una lista. */
function sumaTodosElementos(lista) {
  let resultado = 0;
  lista.reduce((acumulador, actual) => (resultado = acumulador + actual));
  return resultado;
}
sumaTodosElementos(numeros);

/* Crea una función que devuelva la posición en la lista donde se encuentra un elemento 
   pasado como parámetro, o -1 si no existe en la lista. */
function buscarIndice(lista, numero) {
  let indice = lista.indexOf(numero);
  return `El numero ${numero}, se encuentra en el indice: ${indice} de la lista`;
}

/* Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva 
   lista con la suma de los elementos uno a uno. */
function sumaDosListas(lista1, lista2) {
  if (lista1.length !== lista2.length) return `Listas diferentes`;
  let listaUnion = lista1.concat(lista2);
  let suma = listaUnion.reduce((acumulador, actual) => acumulador + actual);
  return `La union de las dos listas: ${listaUnion.join(", ")}, da la suma de: ${suma}`;
}
let lista1 = [1, 2, 3],
  lista2 = [4, 5, 6];
sumaDosListas(lista1, lista2);

/* Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número. */
function numCuadradoLista(lista) {
  return lista.map((item) => item * item);
}
numCuadradoLista(lista1);
