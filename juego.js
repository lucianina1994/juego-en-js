var vida = 100;
var ataque = 10;
var pocion = 20;

function ataqueEnemigo(potencia,nombreAtaque){
    vida -= potencia;
    muestraVida(nombreAtaque);
}

function bebePocion(){
    vida += pocion;
    muestraVida();
}

function muestraVida(nombreAtaque){
    console.log("Has sido atacado con: " + nombreAtaque)
    console.log("Vida: " + vida);
}

function suma(num1,num2){
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    
    valor= num1 + num2;

    return(valor);
}

function accion(){
    numero1 = prompt('Introduc el primer numero');
    numero2 = prompt('Introduc el segundo numero');
    resultado = suma(numero1,numero2);
    console.log(resultado);
}

