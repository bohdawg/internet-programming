"use strict"

let images = ['file1.jpg', 'file2.jpg', 'file3.jpg', 'file4.jpg'];
let iterator = 0;

const imageContainer = document.getElementById('image-container');
document.addEventListener('keydown', switchImage);
imageContainer.style.backgroundSize = 'cover';
imageContainer.style.backgroundImage = `url(${images[iterator]})`;

function switchImage(event) {
    if (event.key === 'ArrowRight') {
        iterator++;
    }
    else if (event.key === 'ArrowLeft') {
        iterator--;
    }
    iterator %= images.length;
    imageContainer.style.backgroundImage = `url(${images.at(iterator)})`;
}