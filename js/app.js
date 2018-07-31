'use strict';

let image = $(".for-collage");
let containerCollage =$(".available-to-drop");

//---- Se inicializan las imágenes para arrastrar y se define la data que se enviará al receptor (contenedor)
image.on('dragstart', (e) => {
    e.originalEvent.dataTransfer.setData('key', e.target.id);
    console.log("it's draggin...");
    e.target.style.opacity = '0.4';
})

// ---- Se preparan los contenedores para recibir las imágenes
containerCollage.on('dragover', (e) => {
    e.preventDefault();//para lo que hay que prevenir "remover" el default (no permitir que entre otro elemento)
    console.log("it's dragover...");
    // console.log(e.currentTarget.childNodes.length);
    
})

containerCollage.on('dragenter', (e) =>{
    e.target.classList.add('over');
})

containerCollage.on('dragleave', (e) =>{
    e.target.classList.remove('over');
})

// ---- Se obtiene la data (imágenes) y se "reciben" en los contendores definidos
containerCollage.on('drop', (e) => {
    let dropImage = e.originalEvent.dataTransfer.getData('key');
    e.preventDefault();
    e.target.classList.remove('over');
    console.log("it's dropped...");
    let currentImage = document.getElementById(dropImage);

    let newImage = document.createElement('img');
    newImage.classList.add("responsive-img", "circle");
    newImage.src = currentImage.src;
    
    
    // console.log(e.currentTarget.childNodes.length);

     if(e.currentTarget.childNodes.length == 1){
        e.currentTarget.removeChild(e.currentTarget.childNodes[0]);
        e.currentTarget.appendChild(newImage);
    
    } else {
        e.currentTarget.appendChild(newImage);
    }
  
})

image.on('dragend', (e) =>{
    e.target.style.opacity = '1';
})


