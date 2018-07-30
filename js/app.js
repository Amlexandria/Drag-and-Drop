
$('.for-collage').on('dragstart', (e) => {
    e.originalEvent.dataTransfer.setData('key', e.target.id);
    // effectAllowed = 'move';
    console.log("it's draggin...")
})
 
$('.available-to-drop').on('dragover', (e) => {
    e.preventDefault();
    console.log("it's dragover...")
})

$('.available-to-drop').on('drop', (e) => {
    let dropImage = e.originalEvent.dataTransfer.getData('key');
    e.preventDefault();
    console.log("it's dropped...");
    console.log(dropImage);

    e.target.appendChild(document.getElementById(dropImage));

    // let newImage = $('.available-to-drop').add('img');
    // newImage.src = dropImage.src;
    // $('.available-to-drop').append(newImage);
    // e.stopPropagation();
})

