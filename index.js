const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 64 * 16; //1024
// canvas.height = 64 * 9; //576
canvas.height = 64 * 9; //576

const ground = 110;

const state = {
  map: 2, 
  hp: 100,
  element: "fire",
  climbStair: false,
};

const player = new Player({
  imageSrc: "./images/character/character.png",
  frameRate: 11,
  framBuffer: 4,
});
const door = new Sprite({
  position: {
    x: 824,
    y: 211,
  },
  imageSrc: "./images/env/door.png",
  frameRate: 8,
  frameBuffer: 10,
});

const button = new Button();
button.top();

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
  down: {
    pressed: false,
  },
  jump: {
    pressed: false,
  },
};

function animate() {
  window.requestAnimationFrame(animate);

  switch (state.map) {
    case 1:
      map1.draw();
      player.enterMap2();
      break;
    case 2:
      map2.draw();
      map2.collisionStair();
      break;
    case 3:
      map3.draw();
      break;
  }

  player.movement();
  player.drawAnimate(true);
  player.update();
}

animate();
