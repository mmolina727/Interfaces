const canvas = document.getElementById("myCanva");
const ctx = canvas.getContext("2d");

let canvasHeight = 800;
let canvasWidth = 800;
let circulos = [];
let getCirculo = null;
let mouseDown = false;

const tablero = new TableroPosta(canvas, 6, 7, 70);

console.log(tablero.tablero[2][5]);

const fondoImage = new Image();
fondoImage.src = "https://s2.best-wallpaper.net/wallpaper/1920x1080/1307/Plants-vs-Zombies-2_1920x1080.jpg";


fondoImage.onload = () => {
    tablero.dibujarTablero(fondoImage);
    const c1 = new Ficha(50, 70, 30, "white", 0, 2 * Math.PI,ctx);
    const c2 = new Ficha(50, 200, 30, "white", 0, 2 * Math.PI,ctx);
    const c3 = new Ficha(80, 400, 30, "white", 0, 2 * Math.PI,ctx);
    const c4 = new Ficha(80, 500, 30, "white", 0, 2 * Math.PI,ctx);    
    
    circulos.push(c1,c2,c3,c4);
    
    drawCircle();
};

tablero.dibujarTablero(fondoImage);

canvas.addEventListener("mouseup", (e) => {
    if(getCirculo!=null){
        tablero.isInTablero(getCirculo);
    }
    mouseDown = false;
    getCirculo = null;
    
});

canvas.addEventListener("mousedown", (e) => {
    mouseDown = true;
    let x = e.offsetX;
    let y = e.offsetY;
    //console.log(e.offsetY);
    circulos.forEach(element => {
        if (element.isPointInside(x, y)) {
            getCirculo = element;
        }
    });
});

canvas.addEventListener("mousemove", (e) => {
    let x = e.offsetX;
    let y = e.offsetY;
    if (getCirculo != null && mouseDown == true && getCirculo.ubicada==false) {
        getCirculo.setPosX(x);
        getCirculo.setPosY(y);
        drawCircle();
    }
});