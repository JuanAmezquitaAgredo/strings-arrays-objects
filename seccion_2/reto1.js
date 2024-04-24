const calificaiones = prompt("Ingrese las calificaciones solo separadas por comas ',' ");
var ArrayCalificacion = calificaiones.split(',');
var ArrayCalificacionNum = ArrayCalificacion.map(numero =>  Number(numero));
var SumaCal = ArrayCalificacionNum.reduce((acum, i) => acum + i);
var promedio = SumaCal / ArrayCalificacion.length;
console.log(`Su promedio es: ${promedio}`)
