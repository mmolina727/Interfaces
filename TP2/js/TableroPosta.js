class TableroPosta {
    constructor(canvas, filas, columnas, casillaSize,lineas) {
        this.canvas = canvas;
        this.context = this.canvas.getContext("2d");
        this.filas = filas;
        this.columnas = columnas;
        this.casillaSize = casillaSize;
        this.lineas=lineas;
        this.tablero = [];

        this.tableroX = (this.canvas.width - (casillaSize * columnas)) / 2;
        this.tableroY = 69;

        for (let i = 0; i < filas; i++) {
            this.tablero[i] = [];
            for (let j = 0; j < columnas; j++) {
                this.tablero[i][j] = 0;
            }
        }
    }

    dibujarTablero(fondoImage) {
  
        this.context.drawImage(fondoImage,0,0,this.canvas.width,this.canvas.height);

        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                const x = this.tableroX + j * this.casillaSize;
                const y = this.tableroY + i * this.casillaSize;
                const cuadrado = new Cuadrado(x, y, this.casillaSize,"red",this.context);
                cuadrado.draw();

                // Dibuja el círculo en el centro del cuadrado
                const centerX = x + this.casillaSize / 2;
                const centerY = y + this.casillaSize / 2;
                const ficha = new Ficha(centerX, centerY, 30, "black", 0, 2 * Math.PI,this.context);
                ficha.draw();
            }
        }
    }

    isInTablero=(getCirculo)=>{
        if(getCirculo.getPosX()>=this.tableroX && getCirculo.getPosX()<= this.tableroX+(this.columnas*this.casillaSize)&&getCirculo.getPosY()<this.tableroY){
            let ejeColumna=this.ubicarFichaColumna(getCirculo);
            let ejeFila=this.ubicarFichaFila(getCirculo);
            getCirculo.setPosX(this.tableroX+ (ejeColumna+1)*(this.casillaSize)-(this.casillaSize/2));
            getCirculo.setPosY(this.tableroY+ (ejeFila+1)*(this.casillaSize)-(this.casillaSize/2));
            getCirculo.ubicada=true;
            this.tablero[ejeFila][ejeColumna]=getCirculo.valor;
            drawCircle();
            hayGanador(this.tablero,ejeFila,ejeColumna,getCirculo,this.lineas);
            cambiarTurno();
        }
        else{
            //Si no esta sobre el x,y del tablero,se setea la ficha a su ubicacion inicial
            getCirculo.setPosX(getCirculo.xIni);
            getCirculo.setPosY(getCirculo.yIni);
            drawCircle();
        }
    }

    ubicarFichaColumna=(getCirculo)=>{

        let valor= getCirculo.getPosX()-this.tableroX;
        let posicion= Math.floor(valor/this.casillaSize);
        return posicion;
    }

    ubicarFichaFila=(getCirculo)=>{

        let posicionColumna=this.ubicarFichaColumna(getCirculo);
        for(let j=this.filas-1;j>=0;j--){
            if(this.tablero[j][posicionColumna]===0){
                return j;
            }
        }
        return -1;
    }
}

const hayGanador=(tablero,ejeFila,ejeColumna,getCirculo,lineas)=>{

    horizontalIzq(tablero,ejeFila,ejeColumna,getCirculo,lineas);
    horizontalDer(tablero,ejeFila,ejeColumna,getCirculo,lineas);
    verificarColumna(tablero,ejeFila,ejeColumna,getCirculo,lineas);
    diagonalDerAsc(tablero,ejeFila,ejeColumna,getCirculo,lineas); 
    diagonalDerDesc(tablero,ejeFila,ejeColumna,getCirculo,lineas); 
    diagonalIzqDesc(tablero,ejeFila,ejeColumna,getCirculo,lineas);

}

const horizontalIzq=(tablero,ejeFila,ejeColumna,getCirculo,lineas)=>{
    let linea=0;

    for (let i= 0;i<=lineas-1;i++) {
        if(tablero[ejeFila][ejeColumna+i]==getCirculo.valor){
            linea++;
        }
    }
    if(linea==lineas){
        finalizarJuego();
        alert("Ganaste!!");
    }
}

const horizontalDer=(tablero,ejeFila,ejeColumna,getCirculo,lineas)=>{
    let linea=0;

    for (let i= 0;i<=lineas-1;i++) {
        if(tablero[ejeFila][ejeColumna-i]==getCirculo.valor){
            linea++;
        }
    }
    if(linea==lineas){
        finalizarJuego();
        alert("Ganaste!!");
    }
}

const diagonalDerAsc=(tablero,ejeFila,ejeColumna,getCirculo,lineas)=>{

    let linea=0;

    for (let i= 0;i<=lineas-1;i++) {
        if ((
            ejeFila >= 0 && ejeFila < tablero.length &&
            ejeColumna >= 0 && ejeColumna < tablero[0].length &&
            (ejeFila + i) >= 0 && (ejeFila + i) < tablero.length &&
            (ejeColumna - i) >= 0 && (ejeColumna - i) < tablero[0].length
        )){
            if(tablero[ejeFila+i][ejeColumna-i]==getCirculo.valor){
                linea++;
            }
        }
    }
    if(linea==lineas){
        finalizarJuego();
        alert("Ganaste!!");
    }

}

const diagonalDerDesc=(tablero,ejeFila,ejeColumna,getCirculo,lineas)=>{

    let linea=0;

    for (let i= 0;i<=lineas-1;i++) {
        if ((
            ejeFila >= 0 && ejeFila < tablero.length &&
            ejeColumna >= 0 && ejeColumna < tablero[0].length &&
            (ejeFila - i) >= 0 && (ejeFila - i) < tablero.length &&
            (ejeColumna + i) >= 0 && (ejeColumna + i) < tablero[0].length
        )){
            if(tablero[ejeFila-i][ejeColumna+i]==getCirculo.valor){
                linea++;
            }
        }
    }
    if(linea==lineas){
        finalizarJuego();
        alert("Ganaste!!");
    }

}

const diagonalIzqDesc=(tablero,ejeFila,ejeColumna,getCirculo,lineas)=>{

    let linea=0;

    for (let i= 0;i<=lineas-1;i++) {
        if ((
            ejeFila >= 0 && ejeFila < tablero.length &&
            ejeColumna >= 0 && ejeColumna < tablero[0].length &&
            (ejeFila - i) >= 0 && (ejeFila - i) < tablero.length &&
            (ejeColumna - i) >= 0 && (ejeColumna - i) < tablero[0].length
        ))
        if(tablero[ejeFila-i][ejeColumna-i]==getCirculo.valor){
            linea++;
        }
    }
    if(linea==lineas){
        finalizarJuego();
        alert("Ganaste!!");
    }

}

const verificarColumna = (tablero,ejeFila,ejeColumna,getCirculo,lineas) => {
    
    let linea=0;

    for (let i= 0;i<=lineas-1;i++) {
        if (
            ejeFila >= 0 && ejeFila < tablero.length &&
            (ejeFila + i) >= 0 && (ejeFila + i) < tablero.length
        ) {
            if(tablero[ejeFila+i][ejeColumna]==getCirculo.valor){
                linea++;
            }
        }
    }
    if(linea==lineas){
        finalizarJuego();
        alert("Ganaste!!");
    }
}

const cambiarTurno=()=>{
    for(let i=0;i<circulos.length;i++){
        if(circulos[i].turno==true){
            circulos[i].turno=false;
        }
        else{
            circulos[i].turno=true;
        }
    }
}

const finalizarJuego=()=>{
    for(let i=0;i<circulos.length;i++){
            circulos[i].turno=false;
            circulos[i].ubicada=true;
    }
}