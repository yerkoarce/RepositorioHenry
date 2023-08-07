function esMayorYMenorYpar (num){
    if (num < 10 && num > 0 && num % 2 ===0) {
        console.log(true);
    } else {
        console.log(false);
    }
}

esMayorYMenorYpar(7)
esMayorYMenorYpar(8)

function operadorOr (str) {
    if (str === 'henry' || str.length<2 ) console.log(true);
    else console.log(false);
}

operadorOr('henry')
operadorOr('javascript')

// NOT
function negacion(permiso) {
    if (!permiso) console.log('Tiene permiso');
 }
 negacion(true);
 negacion(false);