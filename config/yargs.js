const argv = require("yargs")
    .options({
        'b': {
            alias: 'base', // alias por el que se podra reconocer el comando
            demandOption: true, // indica si es requerido
            // default: 5, // valor por defecto que tendra si no es pasado
            describe: 'Base de la tabla a procesar', // Descripcion para la ayuda del --help
            type: 'number', // El tipo de dato que sera
        },
        'l': {
            alias: 'listar',
            default: false, // valor por defecto que tendra si no es pasado
            describe: 'Muestra la tabla en consola',
            type: 'boolean',
        },
        'h': {
            alias: 'hasta',
            default: 10,
            describe: 'Indica el limite de iteraciones para la base',
            type: 'number',
        },
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un numero'
        }
        if (isNaN(argv.h)) {
            throw 'El hasta tiene que ser un numero'
        }
        return true;
    })
    .argv;

module.exports = argv;
