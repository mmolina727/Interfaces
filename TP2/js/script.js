/* FUNCION DE LOS DESPEGABLES */
/*menu hambur*/
const $openClose = document.getElementById("open-close"),
      $aside = document.getElementById("aside");

$openClose.addEventListener("click",()=>{
    $aside.classList.toggle("desplegar")
})
/*perfil despegable */
const $openClose2 = document.getElementById("open-close2"),
      $aside2 = document.getElementById("aside2");

$openClose2.addEventListener("click",()=>{
    $aside2.classList.toggle("desplegar2")
})