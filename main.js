if(!localStorage.getItem('counter')){
  localStorage.setItem('counter',0);
}
var counter= localStorage.getItem('counter');
function contar(){
  counter++;
  console.log("counter",counter);
  localStorage.setItem('counter',counter);

}
function borrar(){
  console.log("entro borrar");
  localStorage.clear();
}
function manejarEnvio(evento){
  console.log("entro manejarEnvio");
  evento.preventDefault();
  var tarea= document.getElementById("myInput").value;
  console.log("tarea",tarea);
  if(tarea===""){
    alert("esta vacio");
    return;
  }
  localStorage.setItem(counter,tarea);
  console.log("se guardo en el storage");
  let numLocal=localStorage.length;
  console.log("tanman",numLocal);
  let lista= document.getElementById("myUl");
  let newElement=document.createElement('li');
  let texto = document.createTextNode(localStorage.getItem(counter));
  newElement.appendChild(texto);
  lista.appendChild(newElement);

  document.getElementById("form").reset();

  /*for(let i =0;i<numLocal;i++){
    console.log(i,localStorage.key(i),localStorage.getItem(localStorage.key(i)));
    newElement.appendChild(texto);
    lista.appendChild(newElement);
  }*/
}
function imprimir(){
  let numLocal= localStorage.length;
  for(let i=0;i<numLocal;i++){
    let dato= localStorage.getItem(localStorage.key(i));
    if(isNaN(dato)){
      console.log(i,dato);
      let lista= document.getElementById("myUl");
      let newElement=document.createElement('li');
      let texto = document.createTextNode(dato);
      newElement.appendChild(texto);
      lista.appendChild(newElement);
    }
  }
}
document.addEventListener('DOMContentLoaded',function(){
  console.log("cargando funciones");
  var formulario =document.getElementById("form");
  let boton = document.getElementById("btnEnviar");
  let botonEliminar = document.getElementById("btnEliminar");
  console.log(formulario);
  console.log(boton);
  formulario.addEventListener("submit",manejarEnvio)
  boton.addEventListener("click",contar);
  botonEliminar.addEventListener("click",borrar);
  imprimir();
  console.log("salio del evento");
});

