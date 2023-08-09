var deportes = {conBalon: ['futbol','Basquetball','Golf'] , sinBalon:['Boxeo','Surf','Trekking']} // array como valor de un objeto

var persona = {nombre:'Yerko', //string como valor de un objeto
edad: 28, // numero como valor de un objeto 
estudios: {esProgramador: true}};  //objeto dentro de un objeto}
//las claves de un objeto nunca van a poder ser iguales pero si los valores de lo sobjetos 

console.log(persona.edad); //consultando el valor de cierta clave del objeto

persona.nombre = 'Martin' //cambiando el valor de la clave nombre dentro del objeto persona 
console.log(persona.nombre);

//crear valor dentro de un objeto
var autos = {};
autos.marcas = ['Audi','Ford','Ferrari'];
console.log(autos);

// borrar propiedad de un objeto

delete autos.marcas;
console.log(autos);

// diferencia entre dot-notation y bracket-notation 

var comidas = {};
var diferenciaDeNotaciones = function (propUno,propDos){
    comidas.propUno = ['Frutas', 'Vegetales']; //como se ve mas abajo al usar la notacion con punto la variable no cambia
    comidas[propDos] = ['Hamburguesa','Papas Fritas'];
};
diferenciaDeNotaciones('Saludable','noSaludable');
console.log(comidas);     //propUno: [ 'Frutas', 'Vegetales' ],
                          //noSaludable: [ 'Hamburguesa', 'Papas Fritas

// has own property 
var libro = {autor:'Borges', genero:'Policial', año: 1990}
var tienePropiedad = libro.hasOwnProperty('nombre'); //pregunta si tiene la propiedad

console.log(tienePropiedad); //responde con booleano

//keys 
var todasLasPropiedades = Object.keys(libro); //pregunta todas las claves o propiedades de un objeto
console.log(todasLasPropiedades);

//for in -----> solo en objetos 
for (var i in libro){ //se recorres las propiedades del objeto
    console.log('esta es la propiedad ' + i) // con esto se entrega cada propiedad 
    console.log('este es el valor '+ libro[i]) // con esto se entrega cada valor
}

// this 
var mascota = {
    animal:'perro',
    raza:'kiltro',
    amistoso:true,
    dueño:'yerko',
    info: function (){
        console.log('mi perro es un '+ this.raza); //con el this indicamos que nos referimos en el contexto de este objeto.
    },
};

