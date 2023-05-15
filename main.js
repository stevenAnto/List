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
  let eliminar = document.getElementById('myUl');
  while(eliminar.firstChild){
    eliminar.removeChild(eliminar.firstChild);
  }
}
function tachar(evento){
  console.log("entro tachar");
  console.log("el elementotarge".elemento);
  let elemento = evento.target;
  console.log("que es el atributo",elemento.style.textDecoration.trim());
  if(elemento.style.textDecoration.trim()==='line-through'){
    console.log("entro if");
    elemento.style.textDecoration='none';
  }else{
    console.log("entro else");
    elemento.style.textDecoration='line-through';
  }
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
  newElement.addEventListener('click',tachar);
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
/*function tachar(evento){
  console.log("entro tachar");
  console.log(evento.target.tagName);
  if(evento.target.tagName==="LI"){
    console.log("entro if de tachar");
    evento.target.clasList.toggle('checked');
  }
}*/
document.addEventListener('DOMContentLoaded',function(){
  console.log("cargando funciones");
  var formulario =document.getElementById("form");
  let boton = document.getElementById("btnEnviar");
  let botonEliminar = document.getElementById("btnEliminar");
  let lista= document.getElementById("myUl");
  console.log(formulario);
  console.log(boton);
  formulario.addEventListener("submit",manejarEnvio)
  boton.addEventListener("click",contar);
  botonEliminar.addEventListener("click",borrar);
  //lista.addEventListener("click",tachar,false);
  imprimir();
  console.log("salio del evento");
});


