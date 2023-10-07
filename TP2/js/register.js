const btn= document.getElementById("btnAdd");
let msj=document.querySelector(".msj");
let carga= 0;


const loading=()=>{setInterval(()=>{
    if(carga<100){
        carga+=20;
        msj.innerHTML="cargando.." + carga+"%";
    }
    else{
        window.location.href= "./index.html";
    }
},1000);
}

const validateForm=()=>{
    const fname=document.getElementById("fname").value;
    const lastName=document.getElementById("lname").value;
    const age=document.getElementById("age").value;
    const mail=document.getElementById("email").value;
    const pass=document.getElementById("pass").value;
    const repPass=document.getElementById("rep_pass").value;

    if(fname !== "" &&
    lastName !== "" &&
    !isNaN(Number(age)) &&
    mail.indexOf("@") !== -1 &&
    pass !== "" &&
    repPass !== ""){
        return true;
    }
    else{
        return false;
    }

}

btn.addEventListener("click",(e)=>{
    if(validateForm()){
        e.preventDefault();
        msj.innerHTML = '&#10003; Registro exitoso.';
        msj.style.color = "green";
        loading();
    }
    else{
        e.preventDefault();
        msj.innerHTML= "Registro invalido. Por favor,complete los campos";
        msj.style.color = "red";
    }
});