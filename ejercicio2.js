const colaEspera = [];
let contadorTurnos = 0;

function tomarTurno() {
    contadorTurnos++;
    colaEspera.push(contadorTurnos);
    alert(`Su turno es: ${contadorTurnos}`);
}

function llamarCliente() {
    if (colaEspera.length === 0) {
        alert("No hay clientes en espera.");
    } else {
        let turnoLlamado = colaEspera.shift();
        alert(`Cliente con turno ${turnoLlamado}, por favor acerquese.`);
    }
}

function mostrarColaEspera() {
    if (colaEspera.length === 0) {
        alert("No hay clientes en la cola de espera.");
    } else {
        let mensaje = "Turnos en espera:";
        for (let i = 0; i < colaEspera.length; i++) {
            mensaje += ` ${colaEspera[i]}`;
        }
        alert(mensaje);
    }
}

function mostrarContadorTurnos() {
    alert(`Total de turnos tomados: ${contadorTurnos}`);
}

function menu() {
    let continuar = true;
    while (continuar) {
        let opcion = prompt("Seleccione una opcion:\n1. Tomar un turno\n2. Llamar a un cliente\n3. Mostrar la cola de espera\n4. Mostrar contador de turnos\n5. Salir");
        
        switch (opcion) {
            case "1":
                tomarTurno();
                break;
            case "2":
                llamarCliente();
                break;
            case "3":
                mostrarColaEspera();
                break;
            case "4":
                mostrarContadorTurnos();
                break;
            case "5":
                continuar = false;
                alert("Saliendo del sistema de turnos.");
                break;
            default:
                alert("Opción no valida, intente nuevamente.");
        }
    }
}

menu();
