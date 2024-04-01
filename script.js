const block = document.getElementById("block");
const hole = document.getElementById("hole");

// hole.addEventListener('animationiteration', () => {
// const random = -((Math.random()*300)+150);
// hole.style.top = random + "px";
// });

function animIterationHandler() {
  const random = -((Math.random() * 300) + 150);
  hole.style.top = random + "px";
}

hole.addEventListener('animationiteration', animIterationHandler);

setInterval(function () {
  const characterTop =
    parseInt(window.getComputedStyle(character).getPropertyValue("top"));
  character.style.top = (characterTop + 1) + "px";
}, 10);

