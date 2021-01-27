//INICIALIZACION DE ESTADISTICAS
var vida = 100;

//ESTADO DEL JUGADOR
var vivo = true;
var envenenado = false;
var quemado = false;

//JUGADAS CPU
var atacar = 0;
var quemar = 1;
var envenenar = 2;
var fallar = 3;

//OBJETOS
var pocion = 0;
var colaFenix = 1;
var pocionQuemadura = 2;
var pocionVeneno = 3;

function muestraEstadoJugador(){
    if (vivo == true){
        console.log('Vida: ' + vida);
        if (envenenado == true){
            console.log('Envenenado');
        }
        if (quemado == true){
            console.log('Quemado');
        } 
    }else{
        console.log("Has muerto");
    }
}


function JuegaTurno(){
    var jugadaCPU = Math.floor(Math.random() * 4);

    if(vida <= 0 ){
        vivo = false;
    }
    if (vida > 0){
        if(jugadaCPU == atacar){
            vida -= 10;
            console.log('He atacado al jugador');
        }
        if(jugadaCPU == quemar){
            quemado = true;
            console.log('He quemado al jugador');
        }
        if(jugadaCPU == envenenar){
            envenenado = true
            console.log('He envenenado al jugador');
        }
        if(jugadaCPU == fallar){
            console.log('He fallado miserablemente');
        }
    }
    muestraEstadoJugador();
}

function UsarItem(objeto){
    if (objeto == pocion){
        vida += 50;
    }
    if (objeto == colaFenix){
        if(vivo == false){
            vivo = true;
            vida = 30;
        }else{
            console.log("Ya estas vivo! No se puede usar")
        }
    }
    if (objeto == pocionQuemadura){
        if(quemado==true){
            quemado = false;
        }else{
            console.log("No estas quemado. No se puede usar")
        }
        
    }
    if (objeto == pocionVeneno){
        if(envenenado==true){
            envenenado = false;
        }else{
            console.log("No estas envenenado. No se puede usar.")
        }
    }
    muestraEstadoJugador();
} 