const images = ["0.jpg", "1.jpg", "2.jpg", '3.jfif'];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

bgImage.classList.add('backgroundImage');

document.body.appendChild(bgImage);