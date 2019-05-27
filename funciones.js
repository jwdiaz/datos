const fs = require('fs');
listaEstudiantes = [];

const crear = (estudiante) => {
    listar();
    let studen = {
        nombre: estudiante.nombre,
        matematicas: estudiante.matematicas,
        ingles: estudiante.ingles,
        programacion: estudiante.programacion
    };


    listaEstudiantes.push(studen);
    
    guardar();
}
const listar =() =>{
    try{

    
    listaEstudiantes = require('./db.json');
    //listaEstudiantes = JSON.parse(fs.readFileSync('db.json'));
}catch(error){
    listaEstudiantes = [];

}
}

const guardar =()=>{
let datos= JSON.stringify(listaEstudiantes);

fs.writeFile('db.json',datos,(err)=>{
    if(err) throw (err);
    console.log('Datos guardados con exito');
})
}



module.exports = {
    crear 
};