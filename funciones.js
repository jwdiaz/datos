const fs = require('fs');
listaEstudiantes = [];

const crear = (estudiante) => {
    
    let studen = {
        nombre: estudiante.nombre,
        matematicas: estudiante.matematicas,
        ingles: estudiante.ingles,
        programacion: estudiante.programacion
    };


    listaEstudiantes.push(studen);
    
    guardar();
}

const guardar =()=>{
let datos= JSON.stringify(listaEstudiantes);

fs.writeFile('bd.json',datos,(err)=>{
    if(err) throw (err);
    console.log('Datos guardados con exito');
})
}



module.exports = {
    crear 
};