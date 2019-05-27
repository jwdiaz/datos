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
    case 'mostrarmat':
        funcion.mostrarmat();
    break;
    case 'mostrarpro':
            funcion.mostrarpro();
        break;

    default:
        console.log('No ingreso, una funcion valida.. \n crear,  mostrar,  mostrarest,  mostrarmat,  mostrarpro..');

}

