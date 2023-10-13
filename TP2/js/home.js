const burgerMain= document.getElementById("main-burger");
const burger= document.getElementById("burger");
const profile=document.getElementById("profile");
const userIcon=document.getElementById("user-icon");
const btnBuy= document.querySelectorAll(".btn-buy");



burger.addEventListener("click",(e)=>{
    burgerMain.classList.toggle("desplegar");
});

userIcon.addEventListener("click",(e)=>{
    profile.classList.toggle("desplegar");
});


btnBuy.forEach(function(boton) {        
    boton.addEventListener('click', function(event) {
        const tarjeta = event.target.closest('.card');
        const img= event.currentTarget.querySelector('img');
        const contImg=tarjeta.querySelector('.content-img-card');
        const contDes=tarjeta.querySelector('.content-description');
        tarjeta.classList.toggle('random');
        const elementos=tarjeta.querySelectorAll('*');

        for(let i=0;i<elementos.length;i++){
            if(elementos[i] == contImg||elementos[i] == contDes){
                elementos[i].classList.add('opaci');
            }
        }
            if (img.src.endsWith('raphael_cart.png')) {
                img.src='./img/ei_check.png';

            }
            if(!tarjeta.classList.contains('random')){
                img.src='./img/raphael_cart.png'
                contImg.classList.remove('opaci');
                contDes.classList.remove('opaci');
            }
    });
});

