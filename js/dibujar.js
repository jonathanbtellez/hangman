function dibujarfigurasRect(color,a,b,c,d){
    tablero.fillStyle = color;
        tablero.fillRect(a,b,c,d);
        tablero.strokeStyle = "black";
        tablero.strokeRect(a,b,c,d);
}

function dibujar (errores){
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
        dibujarfigurasRect("#f7b05b",680,270,10,80);
        alert("la letra pulsada no es parte de la palabra tiene disponibles " +errores+ " intentos");
    }else if(errores == 3){//dibujando circunferencia
        tablero.fillStyle = "#f7b05b";
        tablero.beginPath();
        tablero.arc(660,260,35,0,2*3.14);
        tablero.fill();
        alert("la letra pulsada no es parte de la palabra tiene disponibles " +errores+ " intentos");
    }else if(errores == 2){
        dibujarfigurasRect("#f7b05b",690,285,8,70);
        alert("la letra pulsada no es parte de la palabra tiene disponibles " +errores+ " intentos");
    }else if(errores == 1){
        dibujarfigurasRect("#f7b05b",680,340,8,70);
        alert("la letra pulsada no es parte de la palabra tiene disponibles " +errores+ " intentos");
    }else if(errores == 0){
        dibujarfigurasRect("#a5402d",660,290,40,10);
        alert("Ha perdido la palabra es: " +palabraSecreta);
    }
}



