

const { crearArchivo,listarTabla } = require('./multiplicar/multiplicar');

const argv  = require('./config/yargs').argv;
var colors = require('colors');
//let base = 7;


let comando= argv._[0];
let argv2 = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1];


switch (comando) {
    case 'listar':

         listarTabla(argv.base,argv.limite)

        break;
    case 'crear':
        
    
            crearArchivo(argv.base,argv.limite).then(
               archivo => console.log(`Archivo creado:  ${ archivo} ` )
            );

        break;



    default:

           console.log('Comando no reconocido')
        break;
}




