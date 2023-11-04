const canvas = document.getElementById("myCanva");
const ctx = canvas.getContext("2d");
const menu= document.getElementById("main-menu");
const menuConfig= document.getElementById("game-configuration");

const FICHASJUGADOR = 20;
const RADIO = 30;

let tablero;
let fondoImage;

let circulos = [];
let getCirculo = null;
let mouseDown = false;

let lineaSeleccionada;
let ff;
let cc;

const instanciarTablero=(ff,cc,lineaSeleccionada)=>{
    tablero= new TableroPosta(canvas,ff,cc,65,lineaSeleccionada);
    return tablero;
}

menuConfig.addEventListener("submit",(e)=>{
    e.preventDefault();

    lineaSeleccionada= document.querySelector('input[name="lineas"]:checked').value;
    let ff=8;
    let cc=9;
    const tablero=instanciarTablero(ff,cc,lineaSeleccionada);

    fondoImage = new Image();
    fondoImage.src = '../img/fondo-tablero.jpg';
    //fondoImage.src = "https://s2.best-wallpaper.net/wallpaper/1920x1080/1307/Plants-vs-Zombies-2_1920x1080.jpg";

fondoImage.onload = () => {
    tablero.dibujarTablero(fondoImage);

     // Cargar imágenes para las fichas
     let imagenFichasPlantas = new Image();
    imagenFichasPlantas.src = '../img/ficha-planta.png';
 
    let imagenFichasZombies = new Image();
    imagenFichasZombies.src = '../img/ficha-zombie.png';

    imagenFichasPlantas.onload = imagenFichasZombies.onload = function () {
        const fichas = [];

        for (let i = 0; i < FICHASJUGADOR; i++) {
            const x1 = 280;
            const x2 = 1020;
            const y = 100 + (i * 20);

            // Crear fichas para el jugador 1 (amarillas/plantas)
            const jugador1 = new Ficha(x1, y, RADIO, '#FFFF00',  0, 2 * Math.PI,ctx,280,100,true,1, imagenFichasPlantas);
            // Crear fichas para el jugador 2 (moradas/zombies)
            const jugador2 = new Ficha(x2, y, RADIO, '#800080', 0, 2 * Math.PI,ctx,280,100,false,2, imagenFichasZombies);

            fichas.push(jugador1, jugador2);
        }      
        for (const ficha of fichas) {
            circulos.push(ficha);
        }
        
        drawCircle();
    };
    
};

    tablero.dibujarTablero(fondoImage);
    menu.style.display='none';

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

});