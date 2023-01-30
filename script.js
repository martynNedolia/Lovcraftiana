// script.js
function navigateToPage(pageName) {
    let url; 
    switch (pageName) {
        case 'Головна':
            url = 'index.html';
            break;
        case 'Галерея':
            url = 'gallery.html'; 
            break;
        case 'Вплив':
            url = 'works.html';
            break;
            case 'Блог':
            url = 'blog.html';
            break;
    }
    window.location.href = url;
}

// Select the gallery container and all images
const galleryContainer = document.querySelector('.gallery-container');
const images = document.querySelectorAll('.gallery-item img');

// Add Event Listener to each image
images.forEach(image => {
    image.addEventListener('click', zoomIn);
});

     // Zoom in function
     function zoomIn(imageId) {
        const image = document.getElementById(imageId);
    
        if (image.style.transform == 'scale(3)') {
            image.style.transform = 'scale(1)';
        } else {
            image.style.transform = 'scale(3)';
        }
    
    }