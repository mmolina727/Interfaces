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
let img1= document.getElementById("image1");
let img2= document.getElementById("image2");
let img3= document.getElementById("image3");
let duende= document.getElementById("duende");
let title= document.getElementById("title");
let logo= document.getElementById("title-logo");
let header= document.getElementById("header");
let gwenSpider= document.getElementById("gwenSpider");
let parkerSpider= document.getElementById("parkerSpider");
let milesSpider= document.getElementById("milesSpider");
let sect7= document.getElementById("sect7");
let cards= document.querySelectorAll(".img-container");
let container3= document.getElementById("container");
let cardParker= document.getElementById("card-peterParker");
let cardGwen= document.getElementById("card-gwenStacy");
let cardMiles= document.getElementById("card-milesMorales");
let closeParker= document.getElementById("closeParker");
let closeGwen= document.getElementById("closeGwen");
let closeMiles= document.getElementById("closeMiles");



window.addEventListener("scroll",()=>{
  let scrol= document.documentElement.scrollTop;
  title.style.transform="scale("+(1-(scrol*0.028))+")";
  title.style.top=-10-scrol+"%";
  title.style.opacity=1-(scrol*0.025);
  logo.style.opacity=0+(scrol*0.023);;
  edifDer.style.left=(scrol-1400)*0.09+"px";
  edifIzq.style.right=(scrol-1400)*0.09+"px";
  edifFrente.style.bottom=(scrol-900)*0.09+"px";
  character1.style.top=(scrol+1180)*0.15+"px";
  character2.style.top=(scrol+1330)*0.15+"px";
  web1.style.top=(scrol+1180)*0.15+"px";
  character3.style.top=(scrol+1150)*0.15+"px";
  web2.style.top=(scrol+1400)*0.15+"px";
  duende.style.bottom=(scrol-300)*0.075+"px";
  img1.style.left=(scrol-2300)*0.13+"px";
  if(scrol>2190){
    img2.style.left=(scrol-1950)*0.13+"px";
  }
  if(scrol>2300){
    img3.style.left=(scrol-1850)*0.13+"px";
  }
  if(scrol>1300){
    container3.style.opacity=1;
    for(let i=0; i<cards.length;i++){
      cards[i].classList.add('fade');
    }
  }

  if(scrol<1300){
    for(let i=0; i<cards.length;i++){
      cards[i].classList.remove('fade');
      cards[i].style.opacity=0;
    }
  }
});

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

parkerSpider.addEventListener("click",()=>{
  cardParker.style.visibility="visible";
});

milesSpider.addEventListener("click",()=>{
  cardMiles.style.visibility="visible";
});

gwenSpider.addEventListener("click",()=>{
  cardGwen.style.visibility="visible";
});

closeParker.addEventListener("click",(e)=>{
    cardParker.style.visibility="hidden";
});

closeGwen.addEventListener("click",(e)=>{
  cardGwen.style.visibility="hidden";

});

closeMiles.addEventListener("click",(e)=>{
  cardMiles.style.visibility="hidden";
});

parkerSpider.addEventListener("mouseover",()=>{
  sect7.classList.remove("comun");
  sect7.classList.remove("fondo-blueDark");
  sect7.classList.add("fondo-blue");
  parkerSpider.style.transform="scale(1.0)";
  parkerSpider.style.transition="all 0.2s";
  parkerSpider.style.filter="blur(0px)";
  gwenSpider.style.transform="scale(0.6)";
  gwenSpider.style.filter="blur(5px)";
  gwenSpider.style.transition="all 0.2s";
  milesSpider.style.transform="scale(0.6)";
  milesSpider.style.filter="blur(5px)";
  milesSpider.style.transition="all 0.2s";
});

gwenSpider.addEventListener("mouseover",()=>{
  sect7.classList.remove("fondo-blue");
  sect7.classList.remove("fondo-blueDark");
  sect7.classList.add("fondo-pink");
  gwenSpider.style.transform="scale(1.0)";
  gwenSpider.style.transition="all 0.2s";
  gwenSpider.style.filter="blur(0px)";
  parkerSpider.style.transform="scale(0.6)";
  parkerSpider.style.filter="blur(5px)";
  parkerSpider.style.transition="all 0.2s";
  milesSpider.style.transform="scale(0.6)";
  milesSpider.style.filter="blur(5px)";
  milesSpider.style.transition="all 0.2s";
});

milesSpider.addEventListener("mouseover",()=>{
  sect7.classList.remove("fondo-pink");
  sect7.classList.remove("fondo-blue");
  sect7.classList.add("fondo-blueDark");
  milesSpider.style.transform="scale(1.0)";
  milesSpider.style.transition="all 0.2s";
  milesSpider.style.filter="blur(0px)";
  parkerSpider.style.transform="scale(0.6)";
  parkerSpider.style.filter="blur(5px)";
  parkerSpider.style.transition="all 0.2s";
  gwenSpider.style.transform="scale(0.6)";
  gwenSpider.style.filter="blur(5px)";
  gwenSpider.style.transition="all 0.2s";
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
  
 /*****************************************/
(function() {
  const images = document.querySelectorAll(".parallax-seccion5 img");

  document.addEventListener("mousemove", parallax);

  function parallax(e) {
      let _w = window.innerWidth / 2;
      let _h = window.innerHeight / 2;

      images.forEach((image, index) => {
          let depth = (index + 1) * 0.1;
          let _mouseX = e.clientX;
          let _mouseY = e.clientY;
          let moveX = (_mouseX - _w) * depth;
          let moveY = (_mouseY - _h) * depth;

          image.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
  }
})();

/*****************************************/
/***seccion 6***/

document.addEventListener("scroll", () => {
  function clean() {
    document.querySelectorAll(".img-sec6").forEach((s) => {
      s.classList.remove("show-img");
    });
    document.querySelectorAll(".seccion6-txt").forEach((s) => {
      s.classList.remove("show-txt");
    });
  }

  const scrollS6 = window.scrollY; // guarda el valor del desplazamiento vertical actual de la ventana
  if (scrollS6 < 4030) {
    clean();
    document.querySelector("#img-sec6-1").classList.add("show-img");
    document.querySelector("#txt-1").classList.add("show-txt");
  } else if (scrollS6 >= 4030 && scrollS6 < 4400) {
    clean();
    document.querySelector("#img-sec6-2").classList.add("show-img");
    document.querySelector("#txt-2").classList.add("show-txt");
  } else if (scrollS6 >= 4400 && scrollS6 < 5000) {
    clean();
    document.querySelector("#img-sec6-3").classList.add("show-img");
    document.querySelector("#txt-3").classList.add("show-txt");
  } else if (scrollS6 >= 5000) {
    clean();
    document.querySelector("#img-sec6-4").classList.add("show-img");
    document.querySelector("#txt-4").classList.add("show-txt");
  }
});