var palabras =["ALURA", "CSS", "HTML", "ORACLE","VARIABLE","BUCLE","ITERACION","COLOMBIA","BOGOTA","CORAZON","FELICIDAD","AMISTAD","PRESENTE","OLVIDO","SEGURIDAD","PRINCESA","CREACION","RECURSO","TIEMPO","PRUEBA","RETO","DESAFIO"];
var tablero = document.querySelector("#tablero-juego").getContext("2d");
var letras=[];
var palabraCorrecta = "";
var errores = 9;
var hit=0;
var palabraAgregada = false;

// Esta funcion agrega la nueva palabra
function nuevaPalabra(){
    var newPalabra = document.querySelector("#ingresar-palabra").value;
    var palabraSecreta = newPalabra.toUpperCase();
    let reg = new RegExp("^[a-zA-Z ]*$", "g");
    if(!reg.test(palabraSecreta)){
        alert("No se aceptan letras con caracteres especiales o numeros.");
    return}
    if (palabraSecreta.length < 3){
        alert("La palabra debe tener mas de 3 letras escriba otra palabra.")
    return}
    else{
        palabraAgregada = true;
        palabras.push(palabraSecreta);
        //alert(palabras);
    return palabraSecreta;}
}



//Escojiendo la palabra aleatoria a usar
function escojerPalabraSecreta(){
    var palabra = palabras[Math.floor(Math.random() *palabras.length)]
    var palabraSecreta = palabra;
    //console.log(palabra);
    return palabraSecreta;
}


//Dibujando lineas del ahorcado

function dibujarLinea(palabra){
    palabraSecreta=palabra;
    tablero.lineWidth=6;
    tablero.lineCap= "round";
    tablero.lineJoin= "round";
    tablero.strokeStyle = "#C81D25";
    tablero.beginPath();

    var ancho =600/palabraSecreta.length;

    for(let i =0; i< palabraSecreta.length; i++){
        tablero.moveTo(300+(ancho*i),640);
        tablero.lineTo(330+(ancho*i),640);
    }

    tablero.stroke();
    tablero.closePath();
}




//Dibujando letras del ahorcado
function escribirLetrasCorrectas(index){
    tablero.font="bold 52px inter";
    tablero.lineWidth=6;
    tablero.lineCap= "round";
    tablero.lineJoin= "round";
    tablero.fillStyle = "#C81D25";
    
    var ancho =600/palabraSecreta.length;
    tablero.fillText(palabraSecreta[index],305+(ancho*index),620);
}

function escribirLetraIncorrecta(letra,erroresleft){
    tablero.font="bold 40px inter";
    tablero.lineWidth=6;
    tablero.lineCap= "round";
    tablero.lineJoin= "round";
    tablero.fillStyle = "#C81D25";
    tablero.fillText(letra, 335+(40*(10-erroresleft)),710 ,40);
}



//verificando las letras

function verificarLetras(key){
    if(letras.length<1 || letras.indexOf(key)<0){

        if (/[^a-z ]/.test(event.key)) {
        return false;}

        letras.push(key);
        return false;
    }else{
        letras.push(key);
        return true; 
    }
}


function adicionarLetraCorrecta(i){
    palabraCorrecta += palabraSecreta[i].toUpperCase()
}

function adicionarLetraIncorrecta(letter){
    if(palabraSecreta.indexOf(letter)<0){
            errores -=1;
            dibujar(errores);
            
    }
}

//verificando si el jugador gano
function haGanado (hit,palabraSecreta){
    if(hit == palabraSecreta.length){
        alert("Felicidades a ganado!! TE ATREVES A INTENTAR DE NUEVO?")
    }
}

//hacer uso del teclado para validar letras

function juegoHorca(){
document.onkeydown =(e) => {
    var letra = e.key.toUpperCase();

        if(errores !=0 && hit != palabraSecreta.length){
            if(!verificarLetras(e.key)){
                if(palabraSecreta.includes(letra)){
                    
                    //console.log(letra);
                    adicionarLetraCorrecta(palabraSecreta.indexOf(letra));
                
                    for (var i=0; i<palabraSecreta.length;i++){
                        if (palabraSecreta[i]===letra){
                            escribirLetrasCorrectas(i);
                            if(escribirLetrasCorrectas(i)!=0){
                                hit++;
                            }
                        }
                    }
                }else{
                    if(!verificarLetras(e.key))return 
                    adicionarLetraIncorrecta(letra);
                    escribirLetraIncorrecta(letra,errores);
                }
                //console.log(hit,palabraSecreta.length)
                }
            haGanado (hit,palabraSecreta);
        }  
    }
}