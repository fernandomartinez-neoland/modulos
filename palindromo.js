export default function resta(a, b) {
    console.log("la resta es", a - b)
}
export function suma(a, b) {
    console.log(a + b)
}
export function multiplicacion(a, b) {
    console.log(a * b)
}

// es OBLIGATORIO usa la palabra export SI Y SOLO SI se desea que otros ficheros tengan acceso a una funcion, pueden existir funciones que sean de uso exclusivo del fichero en donde fueron creados
// deben determinar en cada funcion que declaren si es necesario o no que sea exportado (temas de buenas practicas, no le vas a dar un telefono movil a un bebe de 1 año porque no lo sabra usar, si exportan una funcion y esta no se usa fuera del fichero entonces estan desperdiciando espacio de memoria)

export function palindromo(palabra) {
    // console.log(palabra);
    // let palindromo = false
    // for (let i = 0; i < palabra.length; i++) {

    //     if (palabra[i] === palabra[(palabra.length - 1) - i]) {
    //         console.log(palabra[i]);
    //         // console.log(palabra.length - i)
    //         console.log(palabra[(palabra.length - 1) - i])
    //         palindromo = true;
    //         console.log("continua")
    //     } else {
    //         console.log(palabra[i]);
    //         // console.log(palabra.length - i)
    //         console.log(palabra[(palabra.length - 1) - i])
    //         palindromo = false;
    //         console.log("no continua")
    //         break;
    //     }
    // }

    // palindromo === true ? console.log("es un palindromo") : console.log("no es palindromo")
console.log(palabra)
console.log(palabra.split('').reverse().join('')===palabra)
}