$('.for-collage').on('dragstart', (e) => {
    e.originalEvent.dataTransfer.setData('key', 'for-collage');
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

    let newImage = $('.available-to-drop').add('img');
    newImage.src = dropImage.src;
    $('.available-to-drop').append(newImage);
})
