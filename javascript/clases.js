// clase declarada por funcion constructora

function Autos(puertas,color,marca,año){
    this.puerta = puertas;
    this.color = color;
    this.marca = marca;
    this.año = año;

    this.informacion = function(){ //agregando un metodo dentro de la clase 
        console.log('Éste es un '+ this.marca + ' del año '+ this.año);
    }
}

var miAuto = new Autos(4,'Blanco','Ferrari',2020); //agregamos un auto a la clase ¿, asi puede ser con muchos 

console.log(miAuto);  // llamamos a la variable miAuto para ver la informacion con la clase 

miAuto.informacion(); // llamamos al metodo creado dentro de la funcion 

// clase creada con expresion de clase 

class Autitos{
    constructor(puertas,color,marca,año){
        this.puerta = puertas;
        this.color = color;
        this.marca = marca;
        this.año = año; 
    }
    informacion1(){ //aca el parametro se lo tenemos que pasar fuera del constructor 
        console.log('Este es un '+ this.marca + ' del año '+ año);
    }
}

var miAutito = new Autitos(4,'Blanco','Ferrari',2020); //de la misma manera se asigna un auto 

console.log(miAutito); 
console.log(miAutito.color);


