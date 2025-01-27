# Amigo Secreto

Este proyecto es una aplicación utilizando JavaScript que permite gestionar una lista de amigos para realizar un sorteo aleatorio de "amigo secreto". Los usuarios pueden agregar nombres a una lista, ver la lista actualizada y realizar un sorteo para seleccionar un amigo al azar.

---

## Características

- **Agregar Amigos**: Permite ingresar nombres en una lista dinámica.
- **Validación**: Verifica que el campo de entrada no esté vacío antes de agregar un amigo.
- **Lista Actualizada**: La lista de amigos se actualiza en tiempo real en la interfaz.
- **Sorteo Aleatorio**: Selecciona un amigo al azar de la lista actual.
- **Mensajes de Error**: Alertas claras en caso de intentar agregar nombres vacíos o sortear sin amigos.

---

## Cómo Funciona

### 1. Capturar Amigos

La función `capturarAmigo` obtiene el valor del campo de entrada donde el usuario escribe el nombre del amigo.

```javascript
function capturarAmigo(){
  return nuevoAmigo.value
}
```

### 2. Validación

La función `validar` asegura que el valor de entrada no sea nulo ni vacío.

```javascript
function validar(funcion){
  if(funcion() == null || funcion() == ""){
    return true
  } else{
    return false
  }
}
```

### 3. Limpiar Amigo

La funcion `LimpiarAmigo` permite limpiar el campo de entrada para que el usuario pueda añadir otro nombre.

```javascript
function limpiarAmigo() {
  nuevoAmigo.value = ""
}
```

### 4. Actualizar Lista

La función `actualizarListaAmigos` actualiza dinámicamente el contenido de la lista de amigos en la interfaz.

```javascript
function actualizarListaAmigos(){
  listaAmigos.innerHTML = ""
  for(let x = 0; x < amigos.length; x++ ){
    let li = document.createElement("li")
    li.textContent = amigos[x]
    listaAmigos.appendChild(li)
  }
}
```

### 5. Agregar Amigos

La función `agregarAmigo` permite añadir un nuevo nombre a la lista de amigos después de validar la entrada.

```javascript
function agregarAmigo () {
  if (validar(capturarAmigo)){
    alert ("Por favor, ingrese un nombre.")
    return
  }
  amigos.push(capturarAmigo())
  limpiarAmigo()
  actualizarListaAmigos()
}
```

### 6. Sorteo Aleatorio

La función `sortearAmigo` selecciona un amigo al azar de la lista.

```javascript
function sortearAmigo() {
  if(amigos.length == 0){
    alert ("La lista se encuentra vacia, por favor ingrese un nombre.")
    return
  }
  let indiceAmigoSorteado = Math.floor((Math.random() * amigos.length))
  let amigoSorteado = amigos[indiceAmigoSorteado]
  resultado.innerHTML = amigoSorteado
}
```

---

## Cómo Usar

1. **Abrir el Proyecto**:

   - Descarga o clona este repositorio.
   - Abre el archivo `index.html` en tu navegador.

2. **Agregar Amigos**:

   - Escribe un nombre en el campo de entrada "Escribe tu nombre".
   - Haz clic en el botón "Añadir".
   - El nombre aparecerá debajo.

3. **Sortear Amigo**:

   - Haz clic en el botón "Sortear Amigo".
   - Aparecerá el nombre del amigo sorteado en el espacio designado, con letras de color verde.

4. **Mensajes de Error**:

   - Si intentas agregar un nombre vacío, aparecerá un mensaje de alerta.
   - Si intentas realizar un sorteo sin amigos, se mostrará un mensaje de error.

5. 
[![Video de muestra](https://img.youtube.com/vi/VVfxIn8ucdo/hqdefault.jpg)](https://youtu.be/VVfxIn8ucdo)

---

¡Espero te diviertas organizando tu sorteo de amigo secreto! 🎉

