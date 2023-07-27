const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 64 * 16; //1024
canvas.height = 64 * 9; //576

const ground = 110;

const player = new Player(
  
  {
    imageSrc: './images/character/character.png',
    frameRate : 11,
    framBuffer : 4
  }
);
const door = new Sprite({position:{
  x:824,
  y:211
},imageSrc:"./images/env/door.png",frameRate : 8, frameBuffer: 10});

const keys = {
  up: {
    pressed: false,
  },
  left: {
    pressed: false,
  },
  right: {
    pressed: false,
  },
  down : {
    pressed: false,
  },
  jump : {
    pressed : false,
  }
};

function animate() {
  window.requestAnimationFrame(animate);

  map1.draw();

  player.velocity.x = 0;
  if (keys.left.pressed) player.position.x += -5;
  else if (keys.right.pressed) player.position.x += 5;

  if(keys.down.pressed) player.position.y += 5;
  else if(keys.up.pressed) player.position.y -= 5;
  else if(keys.jump.pressed) player.velocity.y -=5;

  

  player.enterMap2();  
  player.drawAnimate(true);
  player.update(); 
}

animate();

