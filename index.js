const { argv } = require('./yargs');
const funcion = require('./funciones');

let conmando = argv._[0];

switch(conmando){

    case 'crear':
            funcion.crear(argv);

    break;

    case 'mostrar':
        funcion.mostrar();
    break;

    case 'mostrarest':
        funcion.mostrarEst(argv.nombre);
    break;

    default:
        console.log('no ingreso un funcion validad.. crear o mostrar');

}

