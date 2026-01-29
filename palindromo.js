export default function resta(a, b) {
    console.log("la resta es", a - b)
}
export function suma(a, b) {
    console.log(a + b)
}
export function multiplicacion(a, b) {
    console.log(a * b)
}

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