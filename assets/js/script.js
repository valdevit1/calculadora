//traer cantidad
const caja1=document.querySelector("#quantity")


//traer color
const caja2=document.querySelector("#color")


//traer boton
const btn =document.querySelector("#total-btn")

//traer precio pc
const precio=document.querySelector("#notebookPrice")


//operacion calcular
function calcular(){
//multiplicacion precio notebook y cantidad

//hacer una constante precio notebook y cantidad
const multiplicacion=caja1.value*precio.innerHTML
console.log (multiplicacion)

//mostrat el resultado en una caja

const cajaTotal=document.querySelector("#total")
cajaTotal.innerHTML=multiplicacion


//cantidad
const cantidadTotal=document.querySelector("#cantidadTotal")
cantidadTotal.innerHTML=caja1.value
//colors


const colorFinal=document.querySelector("#colorFinal")
colorFinal.style.backgroundColor=caja2.value
colorFinal.style.margin="1rem"
cantidadTotal.style.padding="1rem"




}

// click boton calcular
btn.addEventListener ("click",calcular)

// m