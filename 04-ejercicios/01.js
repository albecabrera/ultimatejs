// Ejercicio 1 para comprobar cual de los dos números es mayor.
// Esta primera opción funciona pero la segundo es mejor práctica.

// function cualEsMayor(a, b) {
//   if (a > b) {
//     return a;
//   } else {
//     return b;
//   }
// }

function cualEsMayor(a, b) {
  return a > b ? a : b;
}

let mayor = cualEsMayor(15, 9);

console.log(mayor);
