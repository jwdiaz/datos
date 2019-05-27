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
const muestraest={
    nombre
}

const argv = require("yargs")
            .command('crear', "Crear un estudiante", creacion)
            .command('mostrar','muestra los estudiantes y  sus notas ')
            .command('mostrarest','muestra los datos de estudiante ',muestraest)
  .argv;

module.exports = { argv };
