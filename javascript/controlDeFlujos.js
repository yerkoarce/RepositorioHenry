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
        return true;
    } else {
        return false;
    }
}

puedeManejar(12)

function tienenMismaLongitud(str1, str2) {
    // Retorna true si los dos strings tienen la misma longitud.
    // De lo contrario, retorna false.
    // Tu código:
    if (str1.length === str2.length) {
       return true;
    } else {
       return false;
    }
 }
 
 tienenMismaLongitud ("hola" , "yerko")

 function elevadoAlCuadrado (num) {
    console.log(Math.pow(num,2));
 }

 elevadoAlCuadrado(3)

 function esPositivo(num) {
    console.log(Math.sign(num));
 }
 