/** INICIO
 * Pruebas iniciales
 */
// const { crearArchivo } = require('./helpers/multiplicar');

// console.clear();

// const [, , arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');

// // let base = 5;

// crearArchivo(base)
//     .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
//     .catch(e => console.log('ERROR 01: =>', e));
/** FIN
 * Pruebas iniciales
 */

const argv = require('./config/yargs');
const { crearArchivo } = require('./helpers/multiplicar');
require('colors');

console.clear();

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(`${nombreArchivo} creado`.green))
    .catch(e => console.log(`ERROR 01: => ${e}`.red));