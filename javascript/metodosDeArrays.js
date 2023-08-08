var colores = ["amarillo", "azul"];

colores.push("rojo"); //arreglo para agregar un elemento al finar del array
console.log(colores); //[ 'amarillo', 'azul', 'rojo' ]

colores.unshift("verde"); //agregar un elemento al comienzo del array
console.log(colores); //[ 'verde', 'amarillo', 'azul', 'rojo' ]

colores.pop(); //eliminar el ultimo elemento del array
console.log(colores); //[ 'verde', 'amarillo', 'azul' ]

colores.shift(); //eliminar el primer elemento del array
console.log(colores); //[ 'amarillo', 'azul' ]

var pintores = ["Picasso", "Velazquez", "Van Gogh", "Dali"];

var incluyeDali = pintores.includes("Dali"); //para saber si el array pintores incluye el elemento consultado... devuelve un booleano
console.log(incluyeDali); //true
var incluyeMonet = pintores.includes("Monet");
console.log(incluyeMonet); //false

var numeros = [2, 6, 8, 6];
var cumpleCondicion = numeros.every((num) => {
  // every es para todos los elementos dentro de la lista y dentro de los parentesis de every se inserta la funcion con la condicion
  return num > 5;
});
console.log(cumpleCondicion); //false

var palabra = "henri";
var palabraSeparada = palabra.split(""); // se ponen dos comillas para indicar que queremos que separe el elemento en cada caracter. separa la palabra por lo que se ponga en esos parentesis.
// si ponemos la letra 'a' por ejemplo esta nos separara la palabra cada vez que encuentre la palabra a
console.log(palabraSeparada); //[ 'h', 'e', 'n', 'r', 'i' ]

palabraSeparada.pop(); //eliminar ultimo elemento del array
palabraSeparada.push("y"); //agregar elemento al final del array
console.log(palabraSeparada);
["h", "e", "n", "r", "y"];

var palabraArreglada = palabraSeparada.join(""); //.join para juntar el array y convertirlo en string nuevamente. SE DEJAN 2COMILLAS JUNTAS PARA QUE JUNTE TODOS LOS CARACTERES Y NO DEJA ESPACIOS VACIOS
console.log(palabraArreglada); //henry

var numeros = [1, 2, 3, 4]; //si queremos hacer un console log de cada uno de los elementos utilizamos el metodo forEach(para cada uno)
numeros.forEach((num) => console.log(num)); // responde cada numero de manera individual

numeros.forEach((num) => {   // el arreglo forEach realizara alguna accion sobre el array pero NO realizara cambios 
  if (num === 3) {
    console.log(num);
  }
});

var masUno = numeros.map(num => {
    return num+1;
}); // si queremos realizar cambios se utiliza .map... con esto sumamos 1 a cada elemento del array numeros 
console.log(masUno); //[ 2, 3, 4, 5 ]

var comidas = ['pizza', 'hamburguesa', 'hot dog' , 'lasagna'];

for (var i = 0; i < comidas.length ; i++){ //utilizando el bucle for para iterar dentro del array
    console.log(comidas[i]); // se imprime en consola el elemento del array indicado por i 
}

for (var comida of comidas){   // la variable 'comida' de a quien se va a iterar, en este caso 'comidas'
    console.log(comida) // imprime en consola cada elemento del array al igual que en anterior bucle for 
} 