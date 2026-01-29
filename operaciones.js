export function sumar(e){
   e.preventDefault();
    const inputA=parseInt(e.target.A.value);
    const inputB=parseInt(e.target.B.value);
    console.log(inputA+inputB)

    // nosotros podemos llamara cualquier funcion dentro de otra funcion, siempre y cuando esa otra funcion este siendo importada en el fichero de la funcion padre o que la otra funcion este declarada dentro del mismo fichero
    imp_console()

}




function imp_console(){
    console.log("esto es una funcion dentro de otra funcion")
}