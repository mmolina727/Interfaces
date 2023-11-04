const canvas = document.getElementById("myCanva");
const ctx = canvas.getContext("2d");
const menu = document.getElementById("main-menu");
const menuConfig = document.getElementById("game-configuration");
const divTimer= document.getElementById("timer");
const numberTimer= document.getElementById("number");


const FICHASJUGADOR = 20;
const RADIO = 30;
let timer=101;

let tablero;
let fondoImage;

let circulos = [];
let getCirculo = null;
let mouseDown = false;

let lineaSeleccionada;

const instanciarTablero = (lineaSeleccionada) => {
    tablero = new TableroPosta(canvas,parseInt(lineaSeleccionada)+2, parseInt(lineaSeleccionada)+3, 65, lineaSeleccionada);
    return tablero;
}

const timerGame=()=>{setInterval(()=>{
    if(timer>0){
        timer--;
        numberTimer.innerHTML= "TIME: "+timer;
    }
    else{
        alert("Tiempo terminado. Empate!");
        finalizarJuego();
    }
},1000);
}

menuConfig.addEventListener("submit", (e) => {
    e.preventDefault();

    lineaSeleccionada = document.querySelector('input[name="lineas"]:checked').value;
    const tablero = instanciarTablero(lineaSeleccionada);

    fondoImage = new Image();
    //fondoImage.src = '../img/fondo-tablero.jpg';
    fondoImage.src = "https://s2.best-wallpaper.net/wallpaper/1920x1080/1307/Plants-vs-Zombies-2_1920x1080.jpg";

    fondoImage.onload = () => {
        tablero.dibujarTablero(fondoImage);
       
            // Obtener el valor de la ficha seleccionada por el jugador 1
            const imagenFichaJugador1 = new Image();
            const seleccionJugador1 = document.querySelector('input[name="f1"]:checked');
            imagenFichaJugador1.src = seleccionJugador1 ? seleccionJugador1.value : '';

            // Obtener el valor de la ficha seleccionada por el jugador 2
            const imagenFichaJugador2 = new Image();
            const seleccionJugador2 = document.querySelector('input[name="f2"]:checked');
            imagenFichaJugador2.src = seleccionJugador2 ? seleccionJugador2.value : '';

            
        imagenFichaJugador1.onload = imagenFichaJugador2.onload = function (){
            const fichas = [];

            for (let i = 0; i < FICHASJUGADOR; i++) {
                const x1 = 280;
                const x2 = 1020;
                const y = 100 + (i * 20);
    
                // Crear fichas para el jugador 1 (amarillas/plantas)
                const jugador1 = new Ficha(x1, y, RADIO, '#FFFF00', 0, 2 * Math.PI, ctx, x1, y, true, 1, imagenFichaJugador1);
                 // Crear fichas para el jugador 2 (moradas/zombies)
                const jugador2 = new Ficha(x2, y, RADIO, '#800080', 0, 2 * Math.PI, ctx, x2, y, false, 2, imagenFichaJugador2);
   
                fichas.push(jugador1, jugador2);
            }
            for (const ficha of fichas) {
                circulos.push(ficha);
            }
            drawCircle();
        }
    };


    tablero.dibujarTablero(fondoImage);
    menu.style.display = 'none';

    timerGame();

    canvas.addEventListener("mouseup", (e) => {
        if (getCirculo != null && getCirculo.ubicada != true) {
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
        if (getCirculo != null && mouseDown == true && getCirculo.ubicada == false && getCirculo.turno == true) {
            getCirculo.setPosX(x);
            getCirculo.setPosY(y);
            drawCircle();
        }
    });

});