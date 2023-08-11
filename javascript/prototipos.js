Array.prototype.mayoresQueTres = function() {
    var arrayModificado = [];

    for (let i = 0 ; i < this.length ; i++){
        if (this[i]>3){
            arrayModificado.push(false);
        }else {
            arrayModificado.push(this[i]);
        }
    }
    return arrayModificado;
};

var arreglo = [1,2,3,4,5,6];
var nuevoArreglo = arreglo.mayoresQueTres(); //permite realizar el cambio deseado en el array

console.log(nuevoArreglo); 

//otro ejemplo con una clase 

//lo que haremos sera crear un metodo que nos permita ingresar un pais nuevo en la propiedad llamada paises

class Latinoamerica {
    constructor(){
        this.paises = [];
    }
}

Latinoamerica.prototype.agregarPais = function (pais){
    this.paises.push(pais);
};

var continente = new Latinoamerica();
continente.agregarPais('mexico');

console.log(continente);
console.log(continente.paises);
