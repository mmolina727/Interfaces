let Loader = (function () {
    let loader = document.querySelector('.loader-container');
    let wrapper = document.getElementById('wrapper');
    let numeros = document.querySelector('.numeros');
    let k, i = 1;

    function counter() {
        if (i <= 100) {
            numeros.innerHTML = i.toString();
            i++;
        } else {
            window.clearInterval(k);
            loader.classList.add('done');
            loader.style.visibility = 'hidden';
            wrapper.style.display = 'block';
        }
    }

    return {
        init: function (options) {
            options = options || {};
            let time = options.time ? options.time : 0,
                interval = time / 100;

            loader.classList.add('run');
            k = window.setInterval(counter, interval);
            setTimeout(function () {
                loader.classList.add('done');
                loader.style.visibility = 'hidden'; // Oculta el loader después de la animación
                wrapper.style.display = 'block'; // Muestra el contenido principal
             
            }, time);
        },
    }
}());

// Inicia el loader
Loader.init({
    /*Si se cambio el --time en menos, actualizar este número al valor correspondiente. Medido en milisegundos.*/
    time: 5000
});
