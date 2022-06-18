var palabras =["ALURA", "CSS", "HTML", "ORACLE","VARIABLE","BUCLE","ITERACION","COLOMBIA","BOGOTA","CORAZON",
                "FELICIDAD","AMISTAD","PRESENTE","OLVIDO","SEGURIDAD","PRINCESA","CREACION","RECURSO","TIEMPO"
                ,"PRUEBA","RETO","DESAFIO","ALMA","PACIENCIA","VACIO","COMPANIA","AVANZAR","VIDA","VICTORIA","IDEA"];
var tablero = document.querySelector("#tablero-juego").getContext("2d");
var letras=[];
var palabraCorrecta = "";
var errores = 9;
var hit=0;
var palabraAgregada = false;
let reg = new RegExp("^[a-zA-Z\s]*$", "g");

// Esta funcion agrega la nueva palabra
function nuevaPalabra(){
    var textarea = document.querySelector("textarea")
    var newPalabra = document.querySelector("#ingresar-palabra").value;
    var palabraSecreta = newPalabra.toUpperCase();
    if(!reg.test(palabraSecreta)){
        alert("No se aceptan letras con caracteres especiales, espacios o numeros.");
        textarea.value="";
        textarea.focus();
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
    tablero.strokeStyle = "#7b1e22";
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
    tablero.fillStyle = "#7b1e22";
    
    var ancho =600/palabraSecreta.length;
    tablero.fillText(palabraSecreta[index],305+(ancho*index),620);
}

function escribirLetraIncorrecta(letra,erroresleft){
    tablero.font="bold 40px inter";
    tablero.lineWidth=6;
    tablero.lineCap= "round";
    tablero.lineJoin= "round";
    tablero.fillStyle = "#7b1e22";
    tablero.fillText(letra, 335+(40*(10-erroresleft)),710 ,40);
}



//verificando las letras

function verificarLetras(key){
    if(letras.length<1 || letras.indexOf(key)<0){	  
       
        if(!(/[A-ZÑ]/i.test(event.key))){
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
        alert("Felicidades a ganado!!\nTE ATREVES A INTENTAR DE NUEVO?");
    }
}

function haPerdido (errores){
    if(errores == 0){
        alert("Eres un HANGMAN!!\n TE ATREVES A INTENTAR DE NUEVO??");
}}
//creando nuevas variables para el juego
function nuevasVariable(){
    hit=0
    errores=9
    letras=[]
}
//hacer uso del teclado para validar letras

function juegoHorca(){
    nuevasVariable();
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
            setTimeout(haPerdido (errores),2000);

        }  
    }
}