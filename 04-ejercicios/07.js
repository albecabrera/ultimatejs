// Crear algoritmo que devuelva el precio del producto más impuesto

function precioConImpuesto(precio, Impuesto) {
  return precio + precio * Impuesto;
}

let resultado = precioConImpuesto(19.9, 0.15);
console.log(resultado);
