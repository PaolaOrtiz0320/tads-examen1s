// Obtener la imagen y los botones
const image = document.getElementById('image');
const xSmallBtn = document.getElementById('xSmallBtn');
const smallBtn = document.getElementById('smallBtn');
const mediumBtn = document.getElementById('mediumBtn');
const largeBtn = document.getElementById('largeBtn');
const xLargeBtn = document.getElementById('xLargeBtn');

// Funciones para cambiar el tamaño de la imagen
xSmallBtn.addEventListener('click', () => {
    image.style.width = '100px';
    image.style.height = '100px';
});

smallBtn.addEventListener('click', () => {
    image.style.width = '150px';
    image.style.height = '150px';
});

mediumBtn.addEventListener('click', () => {
    image.style.width = '300px';
    image.style.height = '300px';
});

largeBtn.addEventListener('click', () => {
    image.style.width = '450px';
    image.style.height = '450px';
});

xLargeBtn.addEventListener('click', () => {
    image.style.width = '600px';
    image.style.height = '600px';
});
