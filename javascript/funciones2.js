function cuidadoConElConsoleLog(nombre) {
    console.log(nombre);
    return nombre;
}
// El dato que importa es el que se retorna con return... el console log es solo de ayuda y no servira para el codigo 

function otraFuncion() {
    return (
        "El nombre retornado por la funcion 'cuidadoConElConsoleLog' es: " +
        cuidadoConElConsoleLog('camilo')
    )
}

function cuidadoConElReturn(nombre) {     //todo lo que esta por debajo del return no se ejecutara.
    return nombre;
    console.log(nombre);
}