var maximo,
   barra,
   progreso,
   estado,
   repetir,
   favorito,
   pista,
   icono,
   dur,
   tiempo,
   fav,
   minuto =0,
   segundos = 0,
   horas = 0,
   duracion,
   minutosw2,
   segundos2,
   horas2,
   duracion2,
   r = false,
   maximo = 346,
   f = false,
   sef = 0;
function elementos(){
    barra = document.getElementById('barra');
    progreso = document.getElementById('progreso');
    icono = document.getElementById('estado');
    estado = document.getElementById('max')[0];
    repetir = document.getElementById('rep')[0];
    favorito= document.getElementById('favorito')[0];
    pista = document.getElementById('audio')[0];
    dur = document.getElementById('dur')[0];
    tiempo = document.getElementById('pro')[0];
    fav = document.getElementById('fav');

    estado.addEventListener('click', reproduccion, false);
    repetir.addEventListener('click', bucle,false);
    favorito.addEventListener('click', agregar, false);
}
function reproduccion(){
    if((pista.paused==false) && (pista.ended==false)){
        pista.pause();
        icono.className="fas fa-play";
    } else {
        pista.play();
        icono.className="fas fa-pause-play";

        load = setInterval (rep, 1);
    }
}

function agregar(){
    if(f==false){
        fav.className="fa-thin fa-heart";
        f = true;
        alert('Cancion Agregada')
    } else{
        fav.className="fa-thin fa-heart";
        f = false;
        alert('Cancion eliminada')
    }
}
function bucle(){
    if(r==false){
        repetir.style.color= "#53DC0O";
        r = true;
    } else{
        repetir.style.color="#FFF";
        r = false; 
    }
}

window.addEventListener('load',elementos, false)
