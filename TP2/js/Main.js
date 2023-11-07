const canvas = document.getElementById("myCanva");
const ctx = canvas.getContext("2d");
const menu = document.getElementById("main-menu");
const menuConfig = document.getElementById("game-configuration");
const divTimer = document.getElementById("timer");
const numberTimer = document.getElementById("number");

const ganadorMessage = document.getElementById("ganador-message");

const FICHASJUGADOR = 20;
const RADIO = 30;

let canvasWidth = canvas.width
let canvasHeight = canvas.height

let timer = 101;
let timerInterval;

let tablero;
let fondoImage;

let circulos = [];
let getCirculo = null;
let mouseDown = false;

let lineaSeleccionada;

const instanciarTablero = (lineaSeleccionada) => {
    tablero = new TableroPosta(canvas, parseInt(lineaSeleccionada) + 2, parseInt(lineaSeleccionada) + 3, 65, lineaSeleccionada);
    return tablero;
}

const timerGame = () => {
    timerInterval = setInterval(() => { //linea nueva para detener el tiempo
        if (timer > 0) {
            timer--;
            numberTimer.innerHTML = "TIME: " + timer;
        }
        else {
            clearInterval(timerInterval); // Detener el temporizador
            alert("Tiempo terminado. Empate!");
            finalizarJuego();
            window.location.href = "game.html";
        }
    }, 1000);
}

// muestra un mensaje de ganaste
const mostrarMensajeGanador = (mensaje) => {
    clearInterval(timerInterval);
    ganadorMessage.style.display = "block";

     // Tamaño y posición del rectángulo
     const rectanguloWidth = canvas.width * 0.4; // 0.6 lo hace mas grande
     const rectanguloHeight = canvas.height * 0.2;//0.7 lo hace mas grande 
     const rectanguloX = (canvas.width - rectanguloWidth) / 2;
     
     // Dibujar el rectángulo
     ctx.fillStyle = "#1C1F3A";
     ctx.fillRect(rectanguloX, 10, rectanguloWidth, rectanguloHeight);
    
    // Crear un gradiente de color personalizado
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop(0, '#F51F1F'); // Color al principio del gradiente
    gradient.addColorStop(1, '#FF00B8'); // Color al final del gradiente

    // Dibujar el texto del mensaje
    ctx.font = "40px 'monospace', serif";
    ctx.fillStyle = gradient;
   // ctx.strokeStyle = "black";
    ctx.lineWidth = 4;
    ctx.textAlign = "center";
    let x = canvas.width / 2;
    let y = 50;
    ctx.strokeText(mensaje, x, y);
    ctx.fillText(mensaje, x, y); 
    
}
const reiniciarJuego = () => {
      // Detiene el temporizador antes de reiniciar
      clearInterval(timerInterval);
      ganadorMessage.style.display = "none";
  
      // Redirige a game.html
      window.location.href = "game.html";
}

const resetTablero = () => {
    for (let i = 0; i < tablero.filas; i++) {
        for (let j = 0; j < tablero.columnas; j++) {
            tablero.tablero[i][j] = 0;
        }
    }
    tablero.dibujarTablero(fondoImage);
};


menuConfig.addEventListener("submit", (e) => {
    e.preventDefault();

    lineaSeleccionada = document.querySelector('input[name="lineas"]:checked').value;
    const tablero = instanciarTablero(lineaSeleccionada);

    fondoImage = new Image();
    //fondoImage.src = '../img/fondo-tablero.jpg';
    //fondoImage.src = "https://s2.best-wallpaper.net/wallpaper/1920x1080/1307/Plants-vs-Zombies-2_1920x1080.jpg";
    fondoImage.src = "https://i.pinimg.com/originals/80/9d/d0/809dd0599eda3b346244d9254a588ec8.jpg";


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


        imagenFichaJugador1.onload = imagenFichaJugador2.onload = function () {
            const fichas = [];

            for (let i = 0; i < FICHASJUGADOR; i++) {
                const x1 = 200;//280
                const x2 = 900;//1020
                const y = 100 + (i * 20);

                // Crear fichas para el jugador 1 (amarillas/plantas)
                const jugador1 = new Ficha(x1, y, RADIO, '#FFFF00', 0, 2 * Math.PI, ctx, x1, y, true, 1, imagenFichaJugador1,"PLANTS");
                // Crear fichas para el jugador 2 (moradas/zombies)
                const jugador2 = new Ficha(x2, y, RADIO, '#800080', 0, 2 * Math.PI, ctx, x2, y, false, 2, imagenFichaJugador2,"ZOMBIES");

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
    eventos();
});

//encierro los eventos del mouse en un metodo
const eventos = () => {
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
}