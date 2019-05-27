const { argv } = require('./yargs');
const funcion = require('./funciones');

let conmando = argv._[0];

if (argv._[0]=='crear'){
    funcion.crear(argv);


}
