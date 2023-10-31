class Cuadrado {
    constructor(x, y, size,fill,ctx) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.fill= fill;
        this.ctx=ctx;
    }

    draw() {
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.size, this.size);
        ctx.fillStyle= this.fill;
        ctx.fill();
        ctx.strokeStyle = "black";
        ctx.stroke();
    }
}