var numeroCPU = 0;
var numeroUsuario = 0;

numeroCPU = Math.floor((Math.random() * 10) + 1);

do{
    numeroUsuario = parseInt(prompt('adivina el numero que he pensado (1-10)'))
    
    if(numeroUsuario == numeroCPU){
        console.log('has acertado');
    }else{
        if(numeroCPU < numeroCPU)
        alert('El numero es mas pequeño');
        else
        alert('El numero es mas grande')
    }
}while(numeroUsuario != numeroCPU);
