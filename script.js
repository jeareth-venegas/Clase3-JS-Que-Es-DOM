/**
 * Ejercicio #3:
 * Usando querySelector y querySelectorAll
 *
 * ¿Que voy a evaluar?
 * 1. Que funcione
 * 2. Buenas practicas
 *
 * NOTA: no se puede modificar el codigo HTML de la pagina
 */

/*
  EJERCICIO A: --------------------------------------------
  
  Selecciona y console.log el <h3> que dice "Esto
  es una lista"
*/
const titulo = document.querySelector('h3');
console.log(titulo.innerText);

/*
  EJERCICIO B: --------------------------------------------
  
  Selecciona y loguea el primer y el ultimo elemento
  de la lista
*/
/*const uno = document.querySelector('ul li:nth-child()');*/
const uno = document.querySelector('ul li:first-child');
const cuatro = document.querySelector('ul li:last-child');
console.log(uno, cuatro);
/*
  EJERCICIO C: --------------------------------------------
  
  Selecciona y loguea el input de tipo "email" del
  formulario
*/
const email = document.querySelector('input[type=email]');
console.log(email);
/*
  EJERCICIO D: --------------------------------------------
  
  Selecciona y loguea la fila de la tabla que tiene "JavaScript"
*/
const filaJS = document.querySelector('tr:nth-child(3) td:nth-child(1)');
console.log(filaJS);
/*
  EJERCICIO E: --------------------------------------------
  
  Selecciona y loguea la celda que dice CSS
*/
const filaCSS = document.querySelector('tr:nth-child(4) td:nth-child(1)');
console.log(filaCSS);
/*
  EJERCICIO F: --------------------------------------------
  
  Investiga un metodo de algun elemento y trae un ejemplo de
  para que lo usarias
*/
