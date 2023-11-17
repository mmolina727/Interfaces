let burger= document.getElementById("burguer");
let menu= document.getElementById("menu-oculto");


burger.addEventListener("click",()=>{
    
    if(menu.classList.contains('desplegar')){
        burger.src="https://e7.pngegg.com/pngimages/374/900/png-clipart-computer-icons-christian-cross-icon-design-christian-cross-angle-logo.png";
        menu.classList.remove('desplegar');
    }
    else{
        menu.classList.add('desplegar');
        burger.src='./img/menu-hamb.png'
    }
});