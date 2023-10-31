const canvas = document.getElementById("myCanva");
const ctx = canvas.getContext("2d");

let canvasHeight = 800;
let canvasWidth = 800;
let circulos = [];
let getCirculo = null;
let mouseDown = false;

const tablero = new TableroPosta(canvas, 7, 6, 70);

const fondoImage = new Image();
fondoImage.src = "../img/fondo-tablero.jpg";


fondoImage.onload = () => {
    // Llama a una función para dibujar el tablero con el fondo una vez que la imagen esté lista.
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
    console.log(e.offsetY);
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