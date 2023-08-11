var devuelvoFrase = function (comida){
    return 'Hoy quiero comer '+ comida;
};
var hablar = function (comida, cb){ //se repite comida que es un argumento de la primera funcion 
    return cb(comida);
};

var fraseFinal = hablar('Pizza', devuelvoFrase); //aca se invoca la funcion hablar con los parametros requeridos
console.log(fraseFinal); 

//otro ejemplo mas simple ya que se da una funcion para cada parametro

var devuelvoUsuario = function(){
    return 'Camilo';
}
function devuelvoSaludo (){ //se utiluza otra forma de escribir funciones pero da igual cuall se ultilice
    return 'Hola';
}

var saludar = function (cb1,cb2){
    return cb1() + ' '+ cb2();
}

var resultado = saludar(devuelvoSaludo,devuelvoUsuario); 
console.log(resultado);