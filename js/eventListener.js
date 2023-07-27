window.addEventListener("keydown", (event) => {

  // console.log(event.key);
  switch (event.key) {
    case "ArrowUp":
      keys.up.pressed = true;
      break;
    case "ArrowDown":
      console.log('down')
      keys.down.pressed = true;
      break;
    case "ArrowLeft":
      keys.left.pressed = true;
      break;
    case "ArrowRight":
      keys.right.pressed = true;
      break;
    case " ":

      if(player.sides.bottom > canvas.height - ground){
        console.log("bottom :" + player.sides.bottom);
      console.log("ground :" + (canvas.height -ground) );

        keys.jump.pressed = true;
      }else{
        keys.jump.pressed = false;
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
