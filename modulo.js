// esta es una importacion por defecto, la cual se caracteriza porque el nombre que se le da en la importacion, no necesariamente debe tener el mismo nombre que la funcion que se desea importar (la cual durante la declaracion dice "export default")
// el nombre que se le da despues de la palabra "import"  se usa como una variable que viene en representacion de la funcion o clase exportada por defecto

import algo from './palindromo.js';

// las importaciones normales se caracterizan porque despues de la palabra "import" se coloca dentro de llaves "{}" el nombre EXACTO de las funciones que han sido exportadas y que se desean usar en el modulo
// se pueden colocar dentro de las llaves todas las funciones que se desean agrupadas por el fichero de importacion, es decir que si tenemos 2 ficheros js ademas del modulo y ambos son importados en el modulo, en cada importacion se colocara dentro de las llaves UNICAMENTE las funciones exportadas pertenecientes a ese fichero
// si en el fichero que esta siendo importado no se le coloca la palabra reservada "export" al inicio de la declaracion de la funccion, entonces no podra ser importada en el modulo (para usar un producto importado, este primero debe ser exportado de su pais de origen)
// UNICAMENTE los modulos pueden hacer importaciones, no puedes importar nada a un fichero js que no sea tratado como tipo modulo desde html (regla valida SOLO si se trabaja con html, css y js puro)
import { suma, multiplicacion, palindromo } from './palindromo.js'

algo(5, 1);
suma(2, 3);
multiplicacion(4, 2);
palindromo("ama")