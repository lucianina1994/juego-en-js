
function tablas(){

    for(tabla=0; tabla<10;tabla++){
        console.log("Tabla del: " + tabla);
        for(multiplicador=0; multiplicador<10;multiplicador++){
            var resultado = tabla*multiplicador;
            console.log(tabla + "x" + multiplicador + "=" + resultado);
        }
    }
}