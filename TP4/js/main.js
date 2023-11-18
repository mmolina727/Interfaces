let burger= document.getElementById("burguer");
let menu= document.getElementById("menu-oculto");


burger.addEventListener("click",()=>{
    
    if(menu.classList.contains('desplegar')){
        //burger.src="https://e7.pngegg.com/pngimages/374/900/png-clipart-computer-icons-christian-cross-icon-design-christian-cross-angle-logo.png";
        burger.src='./img/cruz-menu.png';
        menu.classList.remove('desplegar');
    }
    else{
        menu.classList.add('desplegar');
        burger.src='./img/menu-hamb.png'
    }
});

/*====================================*/
function showItemsWithDelay() {
    const menuItems = document.querySelectorAll('#menu-oculto .hidden');
    menuItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('show');
      }, 200 * index);
    });
  }
  
  document.getElementById('burguer').addEventListener('click', () => {
    const menuItems = document.querySelectorAll('#menu-oculto .show');
    menuItems.forEach(item => {
      item.classList.remove('show');
      item.classList.add('hidden');
    });
  
    // Agregar un pequeño retraso para eliminar las clases antes de volver a mostrar los elementos
    setTimeout(() => {
      showItemsWithDelay();
    }, 100);
  });
  
  /*******************************/
  window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});