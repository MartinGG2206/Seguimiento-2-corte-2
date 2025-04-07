const atenciones = new Map();
const estadisticas = {
    total: 0,
    llamadas: 0,
    asesorias: 0,
    estudiantes: 0,
    directivos: 0
};

function registrarAtencion() {
    let cedula = prompt("Ingrese el numero de cedula:");
    let tipo = prompt("Ingrese el tipo de atencion (llamada / asesoria):").toLowerCase();
    let categoria = null;
    
    if (tipo === "asesoria") {
        categoria = prompt("Ingrese la categoria (estudiante / directivo):").toLowerCase();
    }
    
    atenciones.set(cedula, { tipo, categoria });
    actualizarEstadisticas(tipo, categoria);
    alert("Atencion registrada con exito.");
}

function actualizarEstadisticas(tipo, categoria) {
    estadisticas.total++;
    if (tipo === "llamada") {
        estadisticas.llamadas++;
    } else if (tipo === "asesoria") {
        estadisticas.asesorias++;
        if (categoria === "estudiante") {
            estadisticas.estudiantes++;
        } else if (categoria === "directivo") {
            estadisticas.directivos++;
        }
    }
}

function transferirAsesoriaALlamada() {
    let cedula = prompt("Ingrese la cedula del usuario a transferir:");
    if (atenciones.has(cedula)) {
        atenciones.set(cedula, { tipo: "llamada", categoria: null });
        estadisticas.llamadas++;
        estadisticas.total++;
        alert("La asesoria ha sido transferida a llamada telefonica.");
    } else {
        alert("No se encontro un registro con esa cedula.");
    }
}

function mostrarEstadisticas() {
    alert(`Estadisticas de Atencion:\n` +
          `Total de atenciones: ${estadisticas.total}\n` +
          `Atenciones por llamada: ${estadisticas.llamadas}\n` +
          `Asesorias totales: ${estadisticas.asesorias}\n` +
          `Asesorias a estudiantes: ${estadisticas.estudiantes}\n` +
          `Asesorias a directivos: ${estadisticas.directivos}`);
}

function menu() {
    let continuar = true;
    while (continuar) {
        let opcion = prompt("Seleccione una opcion:\n1. Registrar atencion\n2. Transferir asesoria a llamada\n3. Mostrar estadisticas\n4. Salir");
        
        switch (opcion) {
            case "1":
                registrarAtencion();
                break;
            case "2":
                transferirAsesoriaALlamada();
                break;
            case "3":
                mostrarEstadisticas();
                break;
            case "4":
                continuar = false;
                alert("Saliendo del sistema.");
                break;
            default:
                alert("Opcion no valida, intente nuevamente.");
        }
    }
}

menu();
