let burger= document.getElementById("burguer");
let menu= document.getElementById("menu-oculto");
let edifDer= document.getElementById("edifDer");
let edifFrente= document.getElementById("edifFrente");
let edifIzq= document.getElementById("edifIzq");
let character1= document.getElementById("character1");
let character2= document.getElementById("character2");
let character3= document.getElementById("character3");
let web1= document.getElementById("web1");
let web2= document.getElementById("web2");


window.addEventListener("scroll",()=>{
  let scrol= document.documentElement.scrollTop;
  edifDer.style.left=(scrol-1400)*0.09+"px";
  edifIzq.style.right=(scrol-1400)*0.09+"px";
  edifFrente.style.bottom=(scrol-900)*0.09+"px";
  character1.style.top=(scrol+480)*0.20+"px";
  character2.style.top=(scrol+630)*0.20+"px";
  web1.style.top=(scrol+480)*0.20+"px";
  character3.style.top=(scrol+450)*0.23+"px";
  web2.style.top=(scrol+630)*0.23+"px";




})

burger.addEventListener("click",()=>{
    
    if(menu.classList.contains('desplegar')){
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