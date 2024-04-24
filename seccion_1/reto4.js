var coleccion = [];
let cont = 0;
do {
    let opcion = prompt("Ingrese: \n1 para crear eventos \n2 para ver eventos \n3 para buscar \n4 para actualizar \n5 para eliminar \n6 para salir del programa");
    if (opcion == 1) {
        let nombre = prompt("Ingrese el nombre del evento").toLowerCase();
        let fecha = prompt("Ingrese la fecha del evento");
        let descrip = prompt("Ingrese la descripción del evento");
        const evento = {
            id: cont++,
            nom: nombre,
            date: fecha,
            description: descrip
        }
        coleccion.push(evento);
    }
    if (opcion == 2) {
        coleccion.forEach((evento, index) => {
            console.log(`Evento: ${index + 1}: ${evento.nom} - ${evento.date} - ${evento.description}`);
        });
    }
    if (opcion == 3) {
        const buscar = prompt("Ingrese el nombre del evento a buscar");
        const listafiltrada = coleccion.filter((word) => word.nom == buscar);
        if (listafiltrada.length == 0) {
            alert("No se encontro el evento ingresado");
        }
        listafiltrada.forEach((evento, index) => {
            console.log(`El evento encontrado fue: ${index + 1}: ${evento.nom} - ${evento.date} - ${evento.description}`);
        });
    }
    if (opcion == 4) {
        coleccion.forEach((evento, index) => {
            console.log(`Evento: ${index + 1}: ${evento.nom} - ${evento.date} - ${evento.description}`);
        });
        const editarelemento = prompt("Ingrese el ID de la lista de eventos que desea actualizar");
        const nuevoNombre = prompt("Ingrese el nuevo nombre");
        const nuevoFecha = prompt("Ingrese nueva fecha");
        const nuevaDescripcion = prompt("Ingrese nueva descripcion");

        if (nuevoNombre) {
            coleccion[editarelemento - 1].nom = nuevoNombre;
        }
        if (nuevoFecha) {
            coleccion[editarelemento - 1].date = nuevoFecha;
        }
        if (nuevaDescripcion) {
            coleccion[editarelemento - 1].description = nuevaDescripcion;
        }
    }
    if (opcion == 5) {
        coleccion.forEach((evento, index) => {
            console.log(`Evento: ${index + 1}: ${evento.nom} - ${evento.date} - ${evento.description}`);
        });
        const eliminarElemento = prompt("Ingrese el ID de la lista de eventos que desea actualizar");
        coleccion.splice(eliminarElemento - 1, 1);
    }
    else if (opcion == 6) {
        break;
    }
} while (true);

console.log(coleccion);