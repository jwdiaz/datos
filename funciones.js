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

    let duplicado = listaEstudiantes.find(nom=> nom.nombre == estudiante.nombre);
    if(!duplicado){
     
    listaEstudiantes.push(studen);
    
    guardar();

    }else{
        console.log('ya exite el estudiante '+estudiante.nombre);
    }
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


const mostrar=()=>{
    listar();
    console.log('Nota de los estudiantes.')
    console.log('ESTUDIANTE:  Matematicas  Ingles  programacion    promedio');

    listaEstudiantes.forEach(estudiante => {
        
        console.log(estudiante.nombre +' \t  \t'
                    +estudiante.matematicas +'          '
                    +estudiante.ingles+'           '
                    +estudiante.programacion+'         '
                    +(estudiante.matematicas + estudiante.ingles+estudiante.programacion)/3                   
                    );
        
       

    });
}

const mostrarEst = (nom) =>{
    listar();

    
    let est = listaEstudiantes.find(buscar=> buscar.nombre == nom);
    if(!est){
     
        console.log('no exite el estudiante '+nom);
    
    guardar();

    }else{

        console.log('ESTUDIANTE:  Matematicas  Ingles  programacion  ');

      
            
            console.log(est.nombre +' \t  \t'
                        +est.matematicas +'          '
                        +est.ingles+'           '
                        +est.programacion+'         ');
            
        
    }

}

module.exports = {
    crear,
    mostrar,
    mostrarEst
};