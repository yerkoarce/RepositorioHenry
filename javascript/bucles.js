

function esPrimo(num){
    for (var i = 2; i < num; i++){
        if (num % i === 0){
            console.log(false);
            return false;
        }
    } 
    if (num === 1){
        console.log(false);
    } else {
        console.log(true)
    }
}
esPrimo(2)
esPrimo(8)
esPrimo(11)
esPrimo(5)
esPrimo(233)
