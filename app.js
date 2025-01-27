// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

function capturarAmigo(){
  let nuevoAmigo = document.getElementById("amigo").value
  return nuevoAmigo
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
  let nuevoAmigo = document.getElementById("amigo")
  nuevoAmigo.value = ""
}

function agregarAmigo () {
  if (entradaVacia()){
    return
  }
  amigos.push(capturarAmigo())
  limpiarAmigo()
}

