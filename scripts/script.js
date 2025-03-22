document.getElementById('fileInput').addEventListener('change', function(event) {
    const files = event.target.files;
    const gallery = document.getElementById('gallery');

    Array.from(files).forEach(file => {
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const img = document.createElement('img');
                img.src = e.target.result;
                gallery.appendChild(img);

                // Сохранение изображения в localStorage saveImageToLocalStorage(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    });
});

// Функция для сохранения изображения в localStorage
function saveImageToLocalStorage(dataUrl) {
    let images = JSON.parse(localStorage.getItem('images')) || [];
    images.push(dataUrl);
    localStorage.setItem('images', JSON.stringify(images));
}

// Функция для загрузки изображений из localStorage
function loadImagesFromLocalStorage() {
    const images = JSON.parse(localStorage.getItem('images')) || [];
    const gallery = document.getElementById('gallery');
    images.forEach(dataUrl => {
        const img = document.createElement('img');
        img.src = dataUrl;
        gallery.appendChild(img);
    });
}

// Загрузка изображений при загрузке страницы
document.addEventListener('DOMContentLoaded', loadImagesFromLocalStorage);