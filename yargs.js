const nombre = {
  demannd: true,
  alias: "n"
};

const matematicas = {
  demannd: true,
  alias: "m"
};
const ingles = {
  demannd: true,
  alias: "i"
};
const programacion = {
  demannd: true,
  alias: "p"
};

const creacion = {
  nombre,
  matematicas,
  ingles,
  programacion
};

const argv = require("yargs").command('crear', "Crear un estudiante", creacion)
  .argv;

module.exports = { argv };
