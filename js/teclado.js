var  teclas = document.querySelectorAll("#tecla");//Variable
var tecladoActivo=false;



function mostrarTeclado(){//poniendo condiciones para que el teclado aparesca solo a los 800 px
    var ventana = window.innerWidth;
    if(ventana<800){
        teclado=document.querySelector(".botones-letras");
        teclado.classList.remove("invisible");
        tecladoActivo=true;
    }else{
        tecladoActivo=false;
    }
}

function juegoHorcaMovil(tecla){//juego de la horca configurado a movil
    nuevasVariable();//nuevas variables
    if(tecladoActivo){//condicional que valida que el teclado movil este activo
        for(var i=0;i < teclas.length; i++){// itera la letras virtuales
            teclas[i].addEventListener("click",function(e){
                e.preventDefault;
                this.classList.add("invisible");
                tecla= this.value;//captura las letras virtuales
                //alert(tecla)    

                var letra = tecla;
                //console.log(letra)

                if(errores !=0 && hit != palabraSecreta.length){
                    if(!verificarLetras(letra)){
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
                            if(!verificarLetras(letra))return 
                                adicionarLetraIncorrecta(letra);
                                escribirLetraIncorrecta(letra,errores);
                        }
                            //console.log(hit,palabraSecreta.length)
                    }
                }
            })
        } 
        haGanado (hit,palabraSecreta);
        setTimeout(haPerdido (errores),2000);   
         
    }
}
