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
        /*this.context.fillStyle = "lightgray";

        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);*/



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

    isInTablero=(ficha)=>{

        if(ficha.getPosX()>=this.tableroX && ficha.getPosX()<= this.tableroX+(this.columnas*this.casillaSize)){
            for(let i=1;i<=this.columnas;i++){
                if(getCirculo.getPosX()<this.tableroX+(i*this.casillaSize)){
                    ficha.setPosX(this.tableroX+ i*(this.casillaSize)-(this.casillaSize/2));
                    ficha.setPosY(535);
                    ficha.ubicada=true;
                    drawCircle();
                    break;
                }
            }
        }
    }
}
