function crearEnemigo(){
    console.log("enemigo creado");
}
function enemigos(){
    for(i=0; i<10;i++){
        console.log("Valor contador: " + i)
        crearEnemigo();
    }
}