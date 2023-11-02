const canvas = document.getElementById("myCanva");
const ctx = canvas.getContext("2d");

let canvasHeight = 800;
let canvasWidth = 800;
let circulos = [];
let getCirculo = null;
let mouseDown = false;

const tablero = new TableroPosta(canvas, 6, 7, 70);

const fondoImage = new Image();
fondoImage.src = "https://s2.best-wallpaper.net/wallpaper/1920x1080/1307/Plants-vs-Zombies-2_1920x1080.jpg";

fondoImage.onload = () => {
    tablero.dibujarTablero(fondoImage);

    
    const c1 = new Ficha(280, 100, 30, "white", 0, 2 * Math.PI,ctx,280,100);
    const c2 = new Ficha(280, 120, 30, "white", 0, 2 * Math.PI,ctx,280,120);
    const c3 = new Ficha(280, 140, 30, "white", 0, 2 * Math.PI,ctx,280,140);
    const c4 = new Ficha(280, 160, 30, "white", 0, 2 * Math.PI,ctx,280,160); 
    const c5 = new Ficha(280, 180, 30, "white", 0, 2 * Math.PI,ctx,280,180); 
    const c6 = new Ficha(280, 200, 30, "white", 0, 2 * Math.PI,ctx,280,200); 
    const c7 = new Ficha(280, 220, 30, "white", 0, 2 * Math.PI,ctx,280,220);    
    const c8 = new Ficha(280, 240, 30, "white", 0, 2 * Math.PI,ctx,280,240);    
    const c9 = new Ficha(280, 260, 30, "white", 0, 2 * Math.PI,ctx,280,260);    
    const c10 = new Ficha(280, 280, 30, "white", 0, 2 * Math.PI,ctx,280,280);
    const c11 = new Ficha(280, 300, 30, "white", 0, 2 * Math.PI,ctx,280,300);    
    const c12 = new Ficha(280, 320, 30, "white", 0, 2 * Math.PI,ctx,280,320);    
    const c13 = new Ficha(280, 340, 30, "white", 0, 2 * Math.PI,ctx,280,340);    
    const c14 = new Ficha(280, 360, 30, "white", 0, 2 * Math.PI,ctx,280,360);    
    const c15 = new Ficha(280, 380, 30, "white", 0, 2 * Math.PI,ctx,280,380);    
    const c16 = new Ficha(280, 400, 30, "white", 0, 2 * Math.PI,ctx,280,400);    
    const c17 = new Ficha(280, 420, 30, "white", 0, 2 * Math.PI,ctx,280,420);    
    const c18 = new Ficha(280, 440, 30, "white", 0, 2 * Math.PI,ctx,280,440);    
    const c19 = new Ficha(280, 460, 30, "white", 0, 2 * Math.PI,ctx,280,460);    
    const c20 = new Ficha(280, 480, 30, "white", 0, 2 * Math.PI,ctx,280,480);    
        
    circulos.push(c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15,c16,c17,c18,c19,c20);
    drawCircle();
    
};

tablero.dibujarTablero(fondoImage);


canvas.addEventListener("mouseup", (e) => {
    if(getCirculo!=null&&getCirculo.ubicada!=true){
        tablero.isInTablero(getCirculo);
    }
    mouseDown = false;
    getCirculo = null;
    
});

canvas.addEventListener("mousedown", (e) => {
    mouseDown = true;
    let x = e.offsetX;
    let y = e.offsetY;
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