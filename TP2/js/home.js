const burgerMain= document.getElementById("main-burger");
const burger= document.getElementById("burger");
const profile=document.getElementById("profile");
const userIcon=document.getElementById("user-icon");


burger.addEventListener("click",(e)=>{
    burgerMain.classList.toggle("desplegar");
})

userIcon.addEventListener("click",(e)=>{
    profile.classList.toggle("desplegar");
})

