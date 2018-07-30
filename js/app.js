// let originalImage;
let containerCollage =$(".available-to-drop");

$(".for-collage").on('dragstart', (e) => {
    originalImage = e.originalEvent.dataTransfer.setData('key', e.target.id);
    // effectAllowed = 'move';
    console.log("it's draggin...");
    e.target.style.opacity = '0.4';
})
 
containerCollage.on('dragover', (e) => {
    e.preventDefault();
    console.log("it's dragover...");
    console.log(e.currentTarget.childNodes.length);
    if(e.currentTarget.childNodes.lenght == 1){
        e.currentTarget.remove(1);
    }
})


containerCollage.on('dragenter', (e) =>{
    e.target.classList.add('over');
})

containerCollage.on('dragleave', (e) =>{
    e.target.classList.remove('over');
})

containerCollage.on('drop', (e) => {
    let dropImage = e.originalEvent.dataTransfer.getData('key');
    e.preventDefault();
    e.target.classList.add('fill-container');
    e.target.classList.remove('over');
    // console.log("it's dropped...");
    // console.log(dropImage);
    let currentImage = document.getElementById(dropImage);

    let newImage = document.createElement('img');
    newImage.classList.add('responsive-img');
    newImage.src = currentImage.src;
    
    
    console.log(e.currentTarget.childNodes.length);

     if(e.currentTarget.childNodes.length == 1){
        e.currentTarget.removeChild(e.currentTarget.childNodes[0]);
        e.currentTarget.appendChild(newImage);
    
    } else {
        e.currentTarget.appendChild(newImage);
    }
  
})

