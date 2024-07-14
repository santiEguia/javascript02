let stockBsAs = [];
let stockCordoba = [];
let stockMendoza = [];

function agregarProducto(stock, nombre, cantidad, precio, tipo, marca, id) {
    let producto = { nombre, cantidad, precio, tipo, marca, id };
    stock.push(producto);
}

function agregarProductoBsAs(nombre, cantidad, precio, tipo, marca, id) {
    agregarProducto(stockBsAs, nombre, cantidad, precio, tipo, marca, id);
}

function agregarProductoCordoba(nombre, cantidad, precio, tipo, marca, id) {
    agregarProducto(stockCordoba, nombre, cantidad, precio, tipo, marca, id);
}

function agregarProductoMendoza(nombre, cantidad, precio, tipo, marca, id) {
    agregarProducto(stockMendoza, nombre, cantidad, precio, tipo, marca, id);
}

//? Sucursal Buenos Aires.
agregarProductoBsAs("iphone xs", 13, "$650.000", "celular", "apple", "001");
agregarProductoBsAs("galaxy Book 3 Pro", 15, "$2.100.000", "notebook", "samsung","002");
agregarProductoBsAs("idea Pad 15", 25, "$1.120.000", "notebook", "lenovo", "003");
agregarProductoBsAs("redmi Note 13", 10, "$915.000", "celular", "xiaomi", "004");
agregarProductoBsAs("moto G 23", 21, "$327.999", "celular", "motorola", "005");
agregarProductoBsAs("hp 14-em0003la", 5, "$1.145.000", "notebook", "hp", "006");

//? Sucursal Cordoba.
agregarProductoCordoba("iphone 15 Pro Max", 7, "$4.550.000", "celular", "apple", "007");
agregarProductoCordoba("galaxy Book 3 Pro", 4, "$2.100.000", "notebook", "samsung", "002");
agregarProductoCordoba("inspiron 3520", 26, "$1.440.000", "notebook", "dell", "008");
agregarProductoCordoba("redmi Note 13", 25, "$915.000", "celular", "xiaomi", "004");
agregarProductoCordoba("poco m5s", 14, "$387.000", "celular", "xiaomi", "009");
agregarProductoCordoba("v14", 35, "$765.000", "notebook", "lenovo", "010");

//? Sucursal Mendoza.
agregarProductoMendoza("iphone 11", 22, "$720.000", "celular", "apple", "011");
agregarProductoMendoza("galaxy Book 3 Pro", 21, "$2.100.000", "notebook", "samsung", "002");
agregarProductoMendoza("idea Pad 15", 4, "$1.120.000", "notebook", "lenovo", "003");
agregarProductoMendoza("galaxy s23 ultra", 22, "$1.930.000", "celular", "samsung", "012");
agregarProductoMendoza("moto g24 power", 26, "$327.999", "celular", "motorola", "013");
agregarProductoMendoza("hp 14-em0003la", 7, "$1.145.000", "notebook", "hp", "006");

function filtrarPorModelo(stock) {
    let modelo = prompt("Ingrese el nombre del producto que desea comprar").toLowerCase();
    const productoEncontrado = stock.find(producto => producto.nombre.toLowerCase() === modelo);
    if (productoEncontrado) {
        alert(`Producto encontrado:\nNombre: ${productoEncontrado.nombre}\nMarca: ${productoEncontrado.marca}\nDisponibles: ${productoEncontrado.cantidad}\nPrecio: ${productoEncontrado.precio}`);
    } else {
        alert(`No se encontró ningún producto con el nombre '${modelo}'.`);
    }
    inicio();
}

function mostrarCatalogo(stock) {
    console.log(stock);
    inicio();
}

function modificarPrecio(stock) {
    let id = prompt("Ingrese el ID del producto cuyo precio desea modificar:");
    let producto = stock.find(producto => producto.id === id);
    if (producto) {
        let nuevoPrecio = prompt("Ingrese el nuevo precio:");
        producto.precio = nuevoPrecio;
        alert("Precio modificado exitosamente.");
    } else {
        alert("No se encontró ningún producto con el ID proporcionado.");
    }
    inicio();
}

function modificarCantidad(stock) {
    let id = prompt("Ingrese el ID del producto cuya cantidad desea modificar:");
    let producto = stock.find(producto => producto.id === id);
    if (producto) {
        let nuevaCantidad = prompt("Ingrese la nueva cantidad:");
        producto.cantidad = nuevaCantidad;
        alert("Cantidad modificada exitosamente.");
    } else {
        alert("No se encontró ningún producto con el ID proporcionado.");
    }
    inicio();
}

function agregarNuevoProducto(stock) {
    let nombre = prompt("Ingrese el nombre del producto:");
    let cantidad = prompt("Ingrese la cantidad del producto:");
    let precio = prompt("Ingrese el precio del producto:");
    let tipo = prompt("Ingrese el tipo del producto:");
    let marca = prompt("Ingrese la marca del producto:");
    let id = prompt("Ingrese el ID del producto:");
    agregarProducto(stock, nombre, cantidad, precio, tipo, marca, id);
    alert("Producto agregado exitosamente.");
    inicio();
}

function eliminarProducto(stock) {
    let id = prompt("Ingrese el ID del producto que desea eliminar:");
    let indice = stock.findIndex(producto => producto.id === id);
    if (indice !== -1) {
        stock.splice(indice, 1);
        alert("Producto eliminado exitosamente.");
    } else {
        alert("No se encontró ningún producto con el ID proporcionado.");
    }
    inicio();
}

function inicio() {
    let inicio = prompt("Bienvenido \nPara ingresar como cliente ingrese: 1\nPara ingresar como empleado ingrese: 2");
    if (inicio == 1) {
        let seleccionSucursal = prompt("Seleccione una sucursal\n Buenos Aires: 1\n Córdoba: 2\n Mendoza: 3");
        if (seleccionSucursal == 1) {
            let opcion = prompt("¿Qué desea consultar?\nVer catálogo: 1\nBuscar un producto: 2");
            if (opcion == 1) {
                mostrarCatalogo(stockBsAs);
            } else {
                filtrarPorModelo(stockBsAs);
            }
        } else if (seleccionSucursal == 2) {
            let opcion = prompt("¿Qué desea consultar?\nVer catálogo: 1\nBuscar un producto: 2");
            if (opcion == 1) {
                mostrarCatalogo(stockCordoba);
            } else {
                filtrarPorModelo(stockCordoba);
            }
        } else if (seleccionSucursal == 3) {
            let opcion = prompt("¿Qué desea consultar?\nVer catálogo: 1\nBuscar un producto: 2");
            if (opcion == 1) {
                mostrarCatalogo(stockMendoza);
            } else {
                filtrarPorModelo(stockMendoza);
            }
        }
    } else if (inicio == 2) {
        let seleccionSucursal = prompt("Seleccione una sucursal\n Buenos Aires: 1\n Córdoba: 2\n Mendoza: 3");
        if (seleccionSucursal == 1) {
            let opcion = prompt("¿Qué desea consultar?\nVer catálogo: 1\nModificar un precio: 2\nModificar una cantidad: 3\nAgregar un producto: 4\nEliminar un producto: 5");
            if (opcion == 1) {
                mostrarCatalogo(stockBsAs);
            } else if (opcion == 2) {
                modificarPrecio(stockBsAs);
            } else if (opcion == 3) {
                modificarCantidad(stockBsAs);
            } else if (opcion == 4) {
                agregarNuevoProducto(stockBsAs);
            } else if (opcion == 5) {
                eliminarProducto(stockBsAs);
            }
        } else if (seleccionSucursal == 2) {
            let opcion = prompt("¿Qué desea consultar?\nVer catálogo: 1\nModificar un precio: 2\nModificar una cantidad: 3\nAgregar un producto: 4\nEliminar un producto: 5");
            if (opcion == 1) {
                mostrarCatalogo(stockCordoba);
            } else if (opcion == 2) {
                modificarPrecio(stockCordoba);
            } else if (opcion == 3) {
                modificarCantidad(stockCordoba);
            } else if (opcion == 4) {
                agregarNuevoProducto(stockCordoba);
            } else if (opcion == 5) {
                eliminarProducto(stockCordoba);
            }
        } else if (seleccionSucursal == 3) {
            let opcion = prompt("¿Qué desea consultar?\nVer catálogo: 1\nModificar un precio: 2\nModificar una cantidad: 3\nAgregar un producto: 4\nEliminar un producto: 5");
            if (opcion == 1) {
                mostrarCatalogo(stockMendoza);
            } else if (opcion == 2) {
                modificarPrecio(stockMendoza);
            } else if (opcion == 3) {
                modificarCantidad(stockMendoza);
            } else if (opcion == 4) {
                agregarNuevoProducto(stockMendoza);
            } else if (opcion == 5) {
                eliminarProducto(stockMendoza);
            }
        }
    }
}

inicio();
