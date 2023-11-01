

class Ficha {
    constructor(posX, posY, rad, fill, start, end,ctx) {
        this.posX = posX;
        this.posY = posY;
        this.rad = rad;
        this.fill = fill;
        this.start = start;
        this.end = end;
        this.ctx=ctx;
        this.ubicada=false;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.posX, this.posY, this.rad, this.start, this.end);
        ctx.fillStyle=this.fill;
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }

    isPointInside(x, y) {
        let _x = this.posX - x;
        let _y = this.posY - y;

        return Math.sqrt(_x * _x + _y * _y) < this.rad;
    }

    setPosX(posX) {
        this.posX = posX;
        this.draw();
    }

    setPosY(posY) {
        this.posY = posY;
        this.draw();
    }

    getPosX(){
        return this.posX;
    }

    getPosY(){
        return this.posY;
    }

    
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

const drawCircle = () => {
    clearCanvas();
    tablero.dibujarTablero(fondoImage);
    circulos.forEach(element => {
        element.draw();
    });
};
