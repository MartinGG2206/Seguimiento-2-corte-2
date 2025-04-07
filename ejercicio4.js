const citas = [];

function convertirFechaAHoraNumero(fecha, hora) {
    const partesFecha = fecha.split("-");
    const partesHora = hora.split(":");

    
    return parseInt(partesFecha[0] + partesFecha[1] + partesFecha[2] + partesHora[0] + partesHora[1]);
}

function programarCita() {
    let nombre = prompt("Ingrese el nombre del paciente:");
    let fecha = prompt("Ingrese la fecha de la cita (YYYY-MM-DD):");
    let hora = prompt("Ingrese la hora de la cita (HH:MM):");
    let medico = prompt("Ingrese el nombre del medico:");

    citas.push({ nombre, fecha, hora, medico });

    citas.sort(function(a, b) {
        return convertirFechaAHoraNumero(a.fecha, a.hora) - convertirFechaAHoraNumero(b.fecha, b.hora);
    });

    alert("Cita programada con exito.");
}

function verCitas() {
    if (citas.length === 0) {
        alert("No hay citas programadas.");
    } else {
        let mensaje = "Citas Programadas:\n";
        for (let i = 0; i < citas.length; i++) {
            mensaje += (i + 1) + ". " + citas[i].fecha + " " + citas[i].hora + " - " + citas[i].nombre + " con Dr./Dra." + citas[i].medico + "\n";
        }
        alert(mensaje);
    }
}

function cancelarCita() {
    if (citas.length === 0) {
        alert("No hay citas para cancelar.");
        return;
    }

    let listaCitas = "";
    for (let i = 0; i < citas.length; i++) {
        listaCitas += (i + 1) + ". " + citas[i].fecha + " " + citas[i].hora + " - " + citas[i].nombre + " con " + citas[i].medico + "\n";
    }

    let indice = parseInt(prompt("Ingrese el numero de la cita a cancelar:\n" + listaCitas));

    if (indice > 0 && indice <= citas.length) {
        citas.splice(indice - 1, 1);
        alert("Cita cancelada con exito.");
    } else {
        alert("Numero de cita no valido.");
    }
}

function menu() {
    let continuar = true;
    while (continuar) {
        let opcion = prompt("Seleccione una opcion:\n1. Programar una cita\n2. Ver citas programadas\n3. Cancelar una cita\n4. Salir");

        switch (opcion) {
            case "1":
                programarCita();
                break;
            case "2":
                verCitas();
                break;
            case "3":
                cancelarCita();
                break;
            case "4":
                continuar = false;
                alert("Saliendo del sistema de citas medicas.");
                break;
            default:
                alert("Opción no valida, intente nuevamente.");
        }
    }
}

menu();
