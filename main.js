// Cambiar la cantidad de la variable sueldo para probar todos los aumentos
var sueldo = Number(prompt('INTRODUCE UN SUELDO'));
var porcentaje;

console.log(`Sueldo anterior: $${sueldo}`);

if (sueldo >= 0 && sueldo <= 1000) {
  porcentaje = 0.15;
  sueldo = sueldo + sueldo * porcentaje;
} else if (sueldo >= 1001 && sueldo <= 1200) {
  porcentaje = 0.12;
  sueldo = sueldo + sueldo * porcentaje;
} else if (sueldo >= 1201 && sueldo <= 1400) {
  porcentaje = 0.1;
  sueldo = sueldo + sueldo * porcentaje;
} else if (sueldo >= 1401 && sueldo <= 1500) {
  porcentaje = 0.08;
  sueldo = sueldo + sueldo * porcentaje;
} else if (sueldo > 1500) {
  porcentaje = 0.05;
  sueldo = sueldo + sueldo * porcentaje;
}

console.log(`Su nuevo sueldo es de: $${sueldo}`);
