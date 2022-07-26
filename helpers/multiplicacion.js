const fs = require('fs');

const createFile = async(base, listar=false, hasta=10) => {

    try{
        
        let salida = "";
        for(let x = 1; x <=hasta; x++){
            salida += `${base} x ${x} = ${base*x}\n`;
        }

        if( listar ){
            console.log(salida.blue);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
        return `Tabla de ${base} creada`;

    } catch(err){
        throw `Error al generar fichero ${err}`;
    }

}

module.exports = {
    createFile
}