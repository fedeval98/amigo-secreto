// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Variables declaradas.
let amigos = []
let nuevoAmigo = document.getElementById("amigo")
let listaAmigos = document.getElementById("listaAmigos")
let resultado = document.getElementById("resultado")

function capturarAmigo(){
  return nuevoAmigo.value
}

function validar(funcion){
  if(funcion() == null || funcion() == ""){
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
  if (validar(capturarAmigo)){
    alert ("Por favor, ingrese un nombre.")
    return
  }
  amigos.push(capturarAmigo())
  limpiarAmigo()
  actualizarListaAmigos()
}

function sortearAmigo() {
  if(amigos.length == 0){
    alert ("La lista se encuentra vacia, por favor ingrese un nombre.")
    return
  }
  let indiceAmigoSorteado = Math.floor((Math.random() * amigos.length))
  let amigoSorteado = amigos[indiceAmigoSorteado]
  resultado.innerHTML = amigoSorteado
}

