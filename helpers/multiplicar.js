const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 1, listar = false, hasta = 10) => {
    try {
        let salida = '';
        let consola = '';
        let nombreArch = `./documents/tabla-${base}.txt`;

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${colors.brightCyan(base)} ${'x'.magenta.bold} ${colors.brightCyan(i)} ${'='.magenta.bold} ${colors.brightCyan(base * i)}\n`;
        }

        if (listar) {
            console.log('==============================='.magenta.bold);
            console.log('        Tabla del:'.magenta.bold, `${base}`.brightCyan.bold);
            console.log('==============================='.magenta.bold)
            console.log(consola);
        }


        // Si no se especifica el path toma el de la carpeta actual
        // fs.writeFile(`tabla-${tabla}.txt`, salida, (err) => {
        //     if (err) throw err;
        //     console.log(`tabla-${tabla}.txt creado`);
        // });

        fs.writeFileSync(nombreArch, salida);
        // console.log(nombreArch);

        return nombreArch;
    } catch (e) { throw e; }
}

module.exports = {
    crearArchivo
}
