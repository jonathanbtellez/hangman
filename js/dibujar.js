function dibujarfigurasRect(color,a,b,c,d){//crea las figura rectangulares del hangman
    tablero.fillStyle = color;
        tablero.fillRect(a,b,c,d);
        tablero.strokeStyle = "black";
        tablero.strokeRect(a,b,c,d);
}

function dibujarCiculo(color,a,b,c,d,tamaño){//crea las figuras circulares del hangman
    tablero.fillStyle = color;
    tablero.beginPath();
    tablero.arc(a,b,c,d,tamaño*3.14);
    tablero.fill();
}



function dibujar (errores){//Condicionales que dibujan el hangman en el codigo
    if(errores == 8){
        dibujarfigurasRect("#1f1300",300,520,550,50);
        alert("la letra pulsada no es parte de la palabra tiene disponibles " +errores+ " intentos");
    }else if(errores == 7){
        dibujarfigurasRect("#1f1300",410,150,50,370);
        alert("la letra pulsada no es parte de la palabra tiene disponibles " +errores+ " intentos");
    }else if(errores == 6){
        dibujarfigurasRect("#1f1300",460,150,250,20);
        alert("la letra pulsada no es parte de la palabra tiene disponibles " +errores+ " intentos");
    }else if(errores == 5){
        dibujarfigurasRect("#a5402d",680,170,15,80);
        alert("la letra pulsada no es parte de la palabra tiene disponibles " +errores+ " intentos");
    }else if(errores == 4){
        dibujarfigurasRect("#343F3E",670,265,20,80);
        alert("la letra pulsada no es parte de la palabra tiene disponibles " +errores+ " intentos");
    }else if(errores == 3){//dibujando circunferencia
        dibujarCiculo("#f7b05b",660,260,35,0,2);
        dibujarCiculo("#000",640,260,8,5,6);
        dibujarCiculo("#000",645,289,8,10,2);
        alert("la letra pulsada no es parte de la palabra tiene disponibles " +errores+ " intentos");
    }else if(errores == 2){
        dibujarfigurasRect("#343F3E",680,350,9,70);
        dibujarCiculo("#000",680,420,8,0,1);
        alert("la letra pulsada no es parte de la palabra tiene disponibles " +errores+ " intentos");
    }else if(errores == 1){
        dibujarfigurasRect("#343F3E",680,290,12,70);
        dibujarCiculo("#f7b05b",685,354,8,0,1);
        alert("la letra pulsada no es parte de la palabra tiene disponibles " +errores+ " intentos");
    }else if(errores == 0){
        dibujarfigurasRect("#a5402d",660,290,40,10);
        dibujarCiculo("#FFC8FB",660,260,35,0,2);
        dibujarfigurasRect("#000",635,260,7,0);
        dibujarCiculo("#000",645,289,8,10,2);
        alert("Ha perdido la palabra es: " +palabraSecreta);
    }
}



