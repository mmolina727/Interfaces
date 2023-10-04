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
        tarjeta.classList.toggle('opacity');
            if (img.src.endsWith('raphael_cart.png')) {
                img.src='./img/ei_check.png';
            }
            if(!tarjeta.classList.contains('opacity')){
                img.src='./img/raphael_cart.png';
            }
    });
});

