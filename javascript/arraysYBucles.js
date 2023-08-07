 var arr = [1,2,3,4,5];  //recorrer cada elemento del array e imprimirlo con console.log

for (var i = 0; i < arr.length ; i++){
    console.log(arr[i]);
}

function encontrarLetraP(string){ 
    let letras = string.split(''); //dividimos la cadena en un array y con el parametro divisor ''

    for (var i = 0; i < letras.length ; i++){  
        if (letras[i]=== 'p'){ //se indica que al encontrar la letra p imprimira en consola que la encuentra
            console.log('si contiene la letra P');
        }
    }
}
encontrarLetraP('javascript');
encontrarLetraP('yerko');

var arr = [];

while (arr.length < 5){
    arr.push('BOOM');
}
console.log(arr);