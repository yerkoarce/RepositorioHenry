class Persona {
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar(){
        console.log('Mi nombre es '+ this.nombre + ' y tengo '+ this.edad);
    }
};

class Programador extends Persona {  //aca se extiende la clase con la palabra reservada extends 
    constructor(nombre,edad,añosDeExperiencia){
        super(nombre,edad);  // podemos ocupar los parametros de la clase Persona para no tener que escribir mucho codigo
        this.añosDeExperiencia = añosDeExperiencia;
    }
    codear(){
        console.log('Soy '+ this.nombre + ' codeo hace '+ this.añosDeExperiencia + ' años');
    }
}

var martin = new Persona('martin',24);
var programador = new Programador('Maria',37,4);
martin.saludar();
programador.codear();
programador.saludar(); //esta en la clase programador pero como comparte las propiedades con la clase Persona podemos llamar este metodo.