const colors = ["khaki","lavender","darkseagreen","mistyrose"];

const randomColor = Math.floor(Math.random()*colors.length);

const background = document.querySelector(".background");

background.style.backgroundColor = colors[randomColor];