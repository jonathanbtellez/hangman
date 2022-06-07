//capturando elementos del DOM
var botonesInicio = document.querySelector(".botones-inicio");
var insertarPalabra = document.querySelector(".insertar-palabra-nueva");
var tableroJuego =document.querySelector(".tablero");
var btnComenzar = document.querySelector("#comenzar-juego");
var btnNuevaPalabra = document.querySelector("#nueva-Palabra");
var btnGuardarEmpezar = document.querySelector("#guardar-empezar");
var btnCancelar = document.querySelector("#cancelar");
var btnNuevoJuego = document.querySelector("#nuevo-juego");
var btnDesistir=document.querySelector("#desistir");
var btnletras = document.querySelector("#letra");



//boton comenzar partida
btnComenzar.addEventListener("click", function(){
        botonesInicio.classList.add("invisible");
        botonesInicio.classList.remove("iniciar-juego");
        insertarPalabra.classList.add("invisible");
        tableroJuego.classList.remove("invisible");
        dibujarLinea(escojerPalabraSecreta());
        juegoHorca();    
})  

//boton nueva palabra
btnNuevaPalabra .addEventListener("click", function(){
        botonesInicio.classList.add("invisible");
        insertarPalabra.classList.remove("invisible");
    }
)


//guarda nueva palabra y emperar
btnGuardarEmpezar.addEventListener("click", function(){
    dibujarLinea(nuevaPalabra());
    if(palabraAgregada === true){   
        botonesInicio.classList.add("invisible");
        insertarPalabra.classList.add("invisible");
        tableroJuego.classList.remove("invisible");
        juegoHorca();}
})

//cancela la opcion de agregar una nueva palabra
btnCancelar.addEventListener("click", function(){
    location.reload();
})

//Envia al usuario a la pagina de inico para que escoja si desea jugar con una palabra o insertar una.
btnNuevoJuego.addEventListener("click", function(){
    location.reload();
})


//Invita al usuario a seguir hasta que tenga almenos 6 aciertos
btnDesistir.addEventListener("click", function(){

    if(errores>6){
        alert("No te rindas, puedes lograrlo, rendirse ante los retos es peor que ser el HANGMAN. !!")
        return
    }
    if(hit != palabraSecreta.length){
        alert("La palabra secreta es "+palabraSecreta+" intenta nuevamente tal vez aciertes en un nuevo juego.");
        location.reload();
        return
    }
})
