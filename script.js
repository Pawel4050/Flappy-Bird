const block = document.getElementById("block");
const hole = document.getElementById("hole");
const character = document.getElementById("character");
let jumping = 0;


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
  if (jumping === 0) {
    character.style.top = (characterTop + 1) + "px";
  };
}, 10);

function jump() {
  jumping = 1;
  let jumpCount = 0;
  let jumpInterval = setInterval(function () {
      const characterTop =
    parseInt(window.getComputedStyle(character).getPropertyValue("top"));
character.style.top = (characterTop - 5) + "px";
    jumpCount++;
  },10);
}