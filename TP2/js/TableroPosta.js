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
            /*for(let i=1;i<=this.columnas;i++){
                if(getCirculo.getPosX()<this.tableroX+(i*this.casillaSize)){
                    ficha.setPosX(this.tableroX+ i*(this.casillaSize)-(this.casillaSize/2));
                    ficha.setPosY(535);
                    ficha.ubicada=true;
                    drawCircle();
                    break;
                }
            }*/
            let ejeX=this.ubicarFichaX(getCirculo);
            let ejeY=this.ubicarFichaY(getCirculo);
            getCirculo.setPosX(this.tableroX+ ejeX*(this.casillaSize)-(this.casillaSize/2));
            getCirculo.setPosY(this.tableroY+ (ejeY)*(this.casillaSize)-(this.casillaSize/2));
            getCirculo.ubicada=true;
            this.tablero[ejeX][ejeY]=1;
            console.log(ejeX);
            console.log(ejeY);
            console.log(this.tablero[1][6]);
            drawCircle();
            //hayGanador(this.tablero,ejeX,ejeY-1);
        }
        else{
            //Si no esta sobre el x del tablero,se setea ubicacion de la ficha
            getCirculo.setPosX(15);
            getCirculo.setPosY(33);
            drawCircle();
        }
    }

    ubicarFichaX=(getCirculo)=>{
        console.log(this.columnas);
        for(let i=0;i<this.columnas;i++){
            if(getCirculo.getPosX()<this.tableroX+(i*this.casillaSize)){
                console.log("columna "+i);
                return i;
            }
        }
        return -1;
    }

    ubicarFichaY=(getCirculo)=>{
        console.log("cantidad de filas "+ this.filas);
        let x=this.ubicarFichaX(getCirculo);
        for(let j=this.filas;j>0;j--){
            console.log(j);
            if(this.tablero[x][j]==0){
                return j;
            }
        }
        return -1;
    }

}

/*const hayGanador=(tablero,ejeX,ejeY)=>{

    let contador=0;
    //console.log(tablero[1][7]);


    for(let i=7;i<=4;i--){
        console.log("entro");
        if(tablero[1][i]==1){
            contador++;
            console.log(contador);
        }
    }

    if(contador==4){
        alert("Hay ganador!!!");
    }
    else{
        console.log("Segui participando");
    }
}*/