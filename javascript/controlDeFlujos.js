function viajar (destino) {
    if (destino === 'Brasil') {
        console.log("Gire a la izquierda");
    } else if (destino === 'Argentina') {
        console.log('Gire a la derecha');
    } else {
        console.log('Nos perdimos');
    }
}

viajar('Argentina');

function puedeManejar (edad) {
    if (edad >= 18) {
        console.log('Puede manejar');
    } else {
        console.log('no puede manejar');
    }
}

puedeManejar(12)
