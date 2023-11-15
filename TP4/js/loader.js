let Loader = function () {    
    let loader = document.querySelector('.loader-container');
    let numeros = document.querySelector('.numeros');
    let k, i = 1;
    
    function counter () {
          if (i <= 100) {   
            numeros.innerHTML = i.toString();
            i++;
          } else {
            window.clearInterval(k);
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
          // Redirigir a home.html después de que la carga haya terminado (después de 'time' milisegundos)
          window.location.href = 'home.html';
        }, time);
      },
    }
  }();
  
Loader.init({
    // Si has cambiado el @time en LESS, actualiza este número al valor correspondiente. Medido en milisegundos.
    time: 5000
});