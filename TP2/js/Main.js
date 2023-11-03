const canvas = document.getElementById("myCanva");
const ctx = canvas.getContext("2d");

let canvasHeight = 800;
let canvasWidth = 800;
let circulos = [];
let getCirculo = null;
let mouseDown = false;

const tablero = new TableroPosta(canvas, 6, 7, 65,4);

const fondoImage = new Image();
fondoImage.src = "https://s2.best-wallpaper.net/wallpaper/1920x1080/1307/Plants-vs-Zombies-2_1920x1080.jpg";

fondoImage.onload = () => {
    tablero.dibujarTablero(fondoImage);

    //Fichas del jugador 1
    const c1 = new Ficha(280, 100, 30, "white", 0, 2 * Math.PI,ctx,280,100,true,1);
    const c2 = new Ficha(280, 120, 30, "white", 0, 2 * Math.PI,ctx,280,120,true,1);
    const c3 = new Ficha(280, 140, 30, "white", 0, 2 * Math.PI,ctx,280,140,true,1);
    const c4 = new Ficha(280, 160, 30, "white", 0, 2 * Math.PI,ctx,280,160,true,1); 
    const c5 = new Ficha(280, 180, 30, "white", 0, 2 * Math.PI,ctx,280,180,true,1); 
    const c6 = new Ficha(280, 200, 30, "white", 0, 2 * Math.PI,ctx,280,200,true,1); 
    const c7 = new Ficha(280, 220, 30, "white", 0, 2 * Math.PI,ctx,280,220,true,1);    
    const c8 = new Ficha(280, 240, 30, "white", 0, 2 * Math.PI,ctx,280,240,true,1);    
    const c9 = new Ficha(280, 260, 30, "white", 0, 2 * Math.PI,ctx,280,260,true,1);    
    const c10 = new Ficha(280, 280, 30, "white", 0, 2 * Math.PI,ctx,280,280,true,1);
    const c11 = new Ficha(280, 300, 30, "white", 0, 2 * Math.PI,ctx,280,300,true,1);    
    const c12 = new Ficha(280, 320, 30, "white", 0, 2 * Math.PI,ctx,280,320,true,1);    
    const c13 = new Ficha(280, 340, 30, "white", 0, 2 * Math.PI,ctx,280,340,true,1);    
    const c14 = new Ficha(280, 360, 30, "white", 0, 2 * Math.PI,ctx,280,360,true,1);    
    const c15 = new Ficha(280, 380, 30, "white", 0, 2 * Math.PI,ctx,280,380,true,1);    
    const c16 = new Ficha(280, 400, 30, "white", 0, 2 * Math.PI,ctx,280,400,true,1);    
    const c17 = new Ficha(280, 420, 30, "white", 0, 2 * Math.PI,ctx,280,420,true,1);    
    const c18 = new Ficha(280, 440, 30, "white", 0, 2 * Math.PI,ctx,280,440,true,1);    
    const c19 = new Ficha(280, 460, 30, "white", 0, 2 * Math.PI,ctx,280,460,true,1);    
    const c20 = new Ficha(280, 480, 30, "white", 0, 2 * Math.PI,ctx,280,480,true,1);
    
    //Fichas del jugador 2
    const c21 = new Ficha(1020, 100, 30, "yellow", 0, 2 * Math.PI,ctx,1000,100,false,2);
    const c22 = new Ficha(1020, 120, 30, "yellow", 0, 2 * Math.PI,ctx,1000,120,false,2);
    const c23 = new Ficha(1020, 140, 30, "yellow", 0, 2 * Math.PI,ctx,1000,140,false,2);
    const c24 = new Ficha(1020, 160, 30, "yellow", 0, 2 * Math.PI,ctx,1000,160,false,2); 
    const c25 = new Ficha(1020, 180, 30, "yellow", 0, 2 * Math.PI,ctx,1000,180,false,2); 
    const c26 = new Ficha(1020, 200, 30, "yellow", 0, 2 * Math.PI,ctx,1000,200,false,2); 
    const c27 = new Ficha(1020, 220, 30, "yellow", 0, 2 * Math.PI,ctx,1000,220,false,2);    
    const c28 = new Ficha(1020, 240, 30, "yellow", 0, 2 * Math.PI,ctx,1000,240,false,2);    
    const c29 = new Ficha(1020, 260, 30, "yellow", 0, 2 * Math.PI,ctx,1000,260,false,2);    
    const c30 = new Ficha(1020, 280, 30, "yellow", 0, 2 * Math.PI,ctx,1000,280,false,2);
    const c31 = new Ficha(1020, 300, 30, "yellow", 0, 2 * Math.PI,ctx,1000,300,false,2);    
    const c32 = new Ficha(1020, 320, 30, "yellow", 0, 2 * Math.PI,ctx,1000,320,false,2);    
    const c33 = new Ficha(1020, 340, 30, "yellow", 0, 2 * Math.PI,ctx,1000,340,false,2);    
    const c34 = new Ficha(1020, 360, 30, "yellow", 0, 2 * Math.PI,ctx,1000,360,false,2);    
    const c35 = new Ficha(1020, 380, 30, "yellow", 0, 2 * Math.PI,ctx,1000,380,false,2);    
    const c36 = new Ficha(1020, 400, 30, "yellow", 0, 2 * Math.PI,ctx,1000,400,false,2);    
    const c37 = new Ficha(1020, 420, 30, "yellow", 0, 2 * Math.PI,ctx,1000,420,false,2);    
    const c38 = new Ficha(1020, 440, 30, "yellow", 0, 2 * Math.PI,ctx,1000,440,false,2);    
    const c39 = new Ficha(1020, 460, 30, "yellow", 0, 2 * Math.PI,ctx,1000,460,false,2);    
    const c40 = new Ficha(1020, 480, 30, "yellow", 0, 2 * Math.PI,ctx,1000,480,false,2);    

        
    circulos.push(c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15,c16,c17,c18,c19,c20,c21,c22,c23,c24,c25,c26,c27,c28,c29,c30,c31,c32,c33,c34,c35,c36,c37,c38,c39,c40);
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
    if (getCirculo != null && mouseDown == true && getCirculo.ubicada==false && getCirculo.turno==true) {
        getCirculo.setPosX(x);
        getCirculo.setPosY(y);
        drawCircle();
    }
});