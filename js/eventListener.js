const leftButton = document.getElementById("left");
const rightButton = document.getElementById("right");
const topButton = document.getElementById("top");
const botButton = document.getElementById("bot");

const space = document.getElementById("space");
const enter = document.getElementById("enter");

leftButton.addEventListener("touchstart", (e) => {
  e.preventDefault();
  keys.left.pressed = true;
});
leftButton.addEventListener("touchend", (e) => {
  e.preventDefault();
  keys.left.pressed = false;
});

rightButton.addEventListener("touchstart", (e) => {
  e.preventDefault();
  keys.right.pressed = true;
});
rightButton.addEventListener("touchend", (e) => {
  e.preventDefault();
  keys.right.pressed = false;
});

topButton.addEventListener("touchstart", (e) => {
  e.preventDefault();
  keys.up.pressed = true;
});
topButton.addEventListener("touchend", (e) => {
  e.preventDefault();
  keys.up.pressed = false;
});

botButton.addEventListener("touchstart", (e) => {
  e.preventDefault();
  keys.down.pressed = true;
});
botButton.addEventListener("touchend", (e) => {
  e.preventDefault();
  keys.down.pressed = false;
});

space.addEventListener("touchstart", (e) => {
  e.preventDefault();
  if (player.sides.bottom >= canvas.height - ground) {
    keys.jump.pressed = true;
  } else {
    keys.jump.pressed = false;
  }
});
space.addEventListener("touchend", (e) => {
  keys.jump.pressed = false;
});

enter.addEventListener("touchstart", (e) => {
  e.preventDefault();
  if (state.map === 1) {
    if (player.onDoor()) {
      state.map = 2;
    }
  }
});

window.addEventListener("keydown", (event) => {
  // console.log(event.key);
  switch (event.key) {
    case "ArrowUp":
      keys.up.pressed = true;
      break;
    case "ArrowDown":
      keys.down.pressed = true;
      break;
    case "ArrowLeft":
      keys.left.pressed = true;
      break;
    case "ArrowRight":
      keys.right.pressed = true;
      break;
    case " ":
      if (!state.climbStair) {
        if (player.sides.bottom > canvas.height - ground) {
          keys.jump.pressed = true;
        } else {
          keys.jump.pressed = false;
        }
      }else{
        keys.jump.pressed = true;
      }

      break;
    case "Enter":
      if (state.map === 1) {
        if (player.onDoor) {
          state.map = 2;
        }
      }

      break;
  }
});
window.addEventListener("keyup", (event) => {
  switch (event.key) {
    case "ArrowLeft":
      keys.left.pressed = false;
      break;
    case "ArrowRight":
      keys.right.pressed = false;
      break;
    case "ArrowUp":
      keys.up.pressed = false;
      break;
    case "ArrowDown":
      keys.down.pressed = false;
      break;
    case " ":
      keys.jump.pressed = false;
      break;
  }
});
class Listener {}
