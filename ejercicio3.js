const productos = [
    { nombre: "Laptop", precio: 800, stock: 5 },
    { nombre: "Teléfono", precio: 500, stock: 10 },
    { nombre: "Tablet", precio: 300, stock: 7 }
];

const carrito = [];

function mostrarProductos() {
    let mensaje = "Productos disponibles:\n";
    for (let i = 0; i < productos.length; i++) {
        mensaje += `${i + 1}. ${productos[i].nombre} - $${productos[i].precio} - Stock: ${productos[i].stock}\n`;
    }
    return mensaje;
}

function agregarAlCarrito() {
    let seleccion = parseInt(prompt(mostrarProductos() + "\nIngrese el numero del producto que desea agregar:"));
    if (seleccion > 0 && seleccion <= productos.length) {
        let cantidad = parseInt(prompt("Ingrese la cantidad que desea comprar:"));
        let producto = productos[seleccion - 1];
        
        if (cantidad > 0 && cantidad <= producto.stock) {
            carrito.push({ nombre: producto.nombre, precio: producto.precio, cantidad });
            producto.stock -= cantidad;
            alert("Producto agregado al carrito");
        } else {
            alert("Cantidad no valida o sin stock suficiente");
        }
    } else {
        alert("Selección no válida");
    }
}

function mostrarCarrito() {
    if (carrito.length === 0) {
        alert("El carrito está vacío.");
    } else {
        let mensaje = "Carrito de compras:\n";
        let total = 0;
        for (let i = 0; i < carrito.length; i++) {
            let subtotal = carrito[i].precio * carrito[i].cantidad;
            mensaje += `${carrito[i].nombre} - ${carrito[i].cantidad} unidades - Subtotal: $${subtotal}\n`;
            total += subtotal;
        }
        mensaje += `\nTotal de la compra: $${total}`;
        alert(mensaje);
    }
}

function menu() {
    let continuar = true;
    while (continuar) {
        let opcion = prompt("Seleccione una opcion:\n1. Agregar producto al carrito\n2. Mostrar carrito\n3. Salir");
        
        switch (opcion) {
            case "1":
                agregarAlCarrito();
                break;
            case "2":
                mostrarCarrito();
                break;
            case "3":
                continuar = false;
                alert("Saliendo del sistema de compras");
                break;
            default:
                alert("Opcion no valida, intente nuevamente");
        }
    }
}

// Iniciar el menú del carrito de compras
menu();