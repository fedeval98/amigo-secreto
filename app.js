// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Variables declaradas.
let amigos = []
let nuevoAmigo = document.getElementById("amigo")
let listaAmigos = document.getElementById("listaAmigos")

function capturarAmigo(){
  return nuevoAmigo.value
}

function entradaVacia(){
  if(capturarAmigo() == null || capturarAmigo()== ""){
    alert("Por favor, inserte un nombre")
    return true
  } else{
    return false
  }
}

function limpiarAmigo() {
  nuevoAmigo.value = ""
}

function actualizarListaAmigos(){
  listaAmigos.innerHTML = ""
  for(let x = 0; x < amigos.length; x++ ){
    let li = document.createElement("li")
    li.textContent = amigos[x]
    listaAmigos.appendChild(li)
  }
}

function agregarAmigo () {
  if (entradaVacia()){
    return
  }
  amigos.push(capturarAmigo())
  limpiarAmigo()
  actualizarListaAmigos()
}

