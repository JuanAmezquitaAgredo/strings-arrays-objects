const calificaiones = prompt("Ingrese las calificaciones solo separadas por comas ',' ");
var ArrayCalificacion = calificaiones.split(',');
var ArrayCalificacionNum = ArrayCalificacion.map(numero => Number(numero));

//Promedio de calificaciones
var SumaCal = ArrayCalificacionNum.reduce((acum, i) => acum + i);
var promedio = SumaCal / ArrayCalificacion.length;
console.log(`Su promedio es: ${promedio}`)

//Calificacion maxima
var CalMayor = Math.max(...ArrayCalificacionNum);
console.log(`La calificacion mayor es: ${CalMayor}`);
//Calificacion  minima
var CalMenor = Math.min(...ArrayCalificacionNum);
console.log(`La calificacion mayor es: ${CalMenor}`);
//Numero de aprobados
var aprobados = ArrayCalificacionNum.filter((aprop) => aprop >= 70);
console.log(`Aprobaron ${aprobados.length} estudiantes`)
//Numero de reprobados
var reprobados = ArrayCalificacionNum.filter((reprop) => reprop < 70);
console.log(`Aprobaron ${reprobados.length} estudiantes`)
//Lista de calificaciones de mayor a menor