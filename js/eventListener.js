const leftButton = document.getElementById("left");
const rightButton = document.getElementById("right");
const topButton = document.getElementById("top");
const botButton = document.getElementById("bot");

const space = document.getElementById("space");
const enter = document.getElementById("enter");

leftButton.addEventListener("mousedown", (e) => {
  keys.left.pressed = true;
});
leftButton.addEventListener("mouseup", (e) => {
  keys.left.pressed = false;
});

rightButton.addEventListener("mousedown", (e) => {
  keys.right.pressed = true;
});
rightButton.addEventListener("mouseup", (e) => {
  keys.right.pressed = false;
});

topButton.addEventListener("mousedown", (e) => {
  keys.up.pressed = true;
});
topButton.addEventListener("mouseup", (e) => {
  keys.up.pressed = false;
});

botButton.addEventListener("mousedown", (e) => {
  keys.down.pressed = true;
});
botButton.addEventListener("mouseup", (e) => {
  keys.down.pressed = false;
});

space.addEventListener("mousedown", (e) => {
  if (player.sides.bottom >= canvas.height - ground) {
    keys.jump.pressed = true;
  } else {
    keys.jump.pressed = false;
  }
});
space.addEventListener("mouseup", (e) => {
  keys.jump.pressed = false;
});

enter.addEventListener("mousedown", (e) => {
  if (state.map === 1) {
    if (player.onDoor) {
      state.map = 2;
    }
  }
});
enter.addEventListener("mouseup", (e) => {
  
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
      if (player.sides.bottom > canvas.height - ground) {
        console.log("bottom :" + player.sides.bottom);
        console.log("ground :" + (canvas.height - ground));

        keys.jump.pressed = true;
      } else {
        keys.jump.pressed = false;
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
