class TableroPosta {
    constructor(canvas, filas, columnas, casillaSize) {
        this.canvas = canvas;
        this.context = this.canvas.getContext("2d");
        this.filas = filas;
        this.columnas = columnas;
        this.casillaSize = casillaSize;
        this.tablero = [];

        this.tableroX = (this.canvas.width - (casillaSize * columnas)) / 2;
        this.tableroY = 80;

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
        if(getCirculo.getPosX()>=this.tableroX && getCirculo.getPosX()<= this.tableroX+(this.columnas*this.casillaSize)){
            let ejeColumna=this.ubicarFichaColumna(getCirculo);
            let ejeFila=this.ubicarFichaFila(getCirculo);
            getCirculo.setPosX(this.tableroX+ (ejeColumna+1)*(this.casillaSize)-(this.casillaSize/2));
            getCirculo.setPosY(this.tableroY+ (ejeFila+1)*(this.casillaSize)-(this.casillaSize/2));
            getCirculo.ubicada=true;
            this.tablero[ejeFila][ejeColumna]=1;
            console.log(`la ubicacion ${ejeFila}, ${ejeColumna} en el tablero es ${this.tablero[ejeFila][ejeColumna]}` );
            drawCircle();
            hayGanador(this.tablero,ejeFila,ejeColumna);
        }
        else{
            //Si no esta sobre el x del tablero,se setea ubicacion de la ficha
            getCirculo.setPosX(15);
            getCirculo.setPosY(33);
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
        for(let j=this.filas-1;j>0;j--){
            if(this.tablero[j][posicionColumna]===0){
                return j;
            }
        }
        return -1;
    }
}

const hayGanador=(tablero,ejeFila,ejeColumna)=>{

    horizontalIzq(tablero,ejeFila,ejeColumna);
    horizontalDer(tablero,ejeFila,ejeColumna);
    verificarColumna(tablero,ejeColumna);
    diagonalDer(tablero,ejeFila,ejeColumna);
    diagonalIzq(tablero,ejeFila,ejeColumna);

}

const horizontalIzq=(tablero,ejeFila,ejeColumna)=>{
    let linea=0;

    for (let i= 0;i<=3;i++) {
        if(tablero[ejeFila][ejeColumna+i]==1){
            linea++;
        }
    }
    if(linea==4){
        alert("Ganaste!!");
    }
}

const horizontalDer=(tablero,ejeFila,ejeColumna)=>{
    let linea=0;

    for (let i= 0;i<=3;i++) {
        if(tablero[ejeFila][ejeColumna-i]==1){
            linea++;
        }
    }
    if(linea==4){
        alert("Ganaste!!");
    }
}

const diagonalDer=(tablero,ejeFila,ejeColumna)=>{

    let linea=0;

    for (let i= 0;i<=3;i++) {
        if(tablero[ejeFila-i][ejeColumna+i]==1){
            linea++;
        }
    }
    if(linea==4){
        alert("Ganaste!!");
    }

}

const diagonalIzq=(tablero,ejeFila,ejeColumna)=>{

    let linea=0;

    for (let i= 0;i<=3;i++) {
        if(tablero[ejeFila-i][ejeColumna-i]==1){
            linea++;
        }
    }
    if(linea==4){
        alert("Ganaste!!");
    }

}

const verificarColumna = (tablero, columna) => {
    const longitud = tablero.length;
    
    for (let fila = longitud - 1; fila >= 3; fila--) {
        if (
            tablero[fila][columna] === 1 &&
            tablero[fila - 1][columna] === 1 &&
            tablero[fila - 2][columna] === 1 &&
            tablero[fila - 3][columna] === 1
        ) {
            alert("Ganoooo!");
        }
    }
}
