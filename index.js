const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 64 * 16; //1024
// canvas.height = 64 * 9; //576
canvas.height = 64 * 9; //576

const ground = 110;

  const a = Math.floor(Math.random() * 40) + 1;
  const b = Math.floor(Math.random() * 40) + 1;
  const ca = Math.floor(Math.random() * 40) + 1;
  
  const alas = Math.floor(Math.random() * 30) + 1;
  const tinggi = Math.floor(Math.random() * 30) + 1;
  
  const luas = Math.random() >= 0.5;
  const figure = Math.floor(Math.random() * 7);



const state = {
  map: 4,
  hp: 100,
  element: "fire",
  climbStair: false,

  answering: false,
  questionAnswer: 0,
  a: a.toString(),
  b: b.toString(),
  ca: ca.toString(),
  alas: alas.toString(),
  tinggi: tinggi.toString(),
  luas: luas,
  figure: figure,
  refresh: this.refresh
};

function refresh(){
   state.a = Math.floor(Math.random() * 40) + 1;
   state.b = Math.floor(Math.random() * 40) + 1;
   state.ca = Math.floor(Math.random() * 40) + 1;
  
   state.alas = Math.floor(Math.random() * 30) + 1;
   state.tinggi = Math.floor(Math.random() * 30) + 1;
  
   state.luas = Math.random() >= 5;
   state.figure = Math.floor(Math.random() * 7);
}
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

const door2 = new Sprite({
  position: {
    x: -11,
    y: 13,
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

const warior = new Warrior({
  imageSrc: "./images/character/warrior.png",
  frameRate: 1,
  framBuffer: 0,
});
const boss = new Boss({
  imageSrc: "./images/character/boss.png",
  frameRate: 1,
  frameBuffer: 0,
});

function animate() {
  window.requestAnimationFrame(animate);

  if (!state.map === 4) {
    switch (state.map) {
      case 1:
        map1.draw();
        player.enterMap2();
        break;
      case 2:
        map2.draw();
        map2.collisionStair();
        map2.healthMap2();
        player.enterMap3();
        break;
      case 3:
        map3.draw();
        state.climbStair = false;
        map3.iceMap3();
        map3.fireMap3();
        map3.waterMap3();
        break;
    }
    player.movement();
    player.drawAnimate(true);
    player.update();
  } else {
    map4.draw();
    warior.draw();
    warior.health();
    warior.drawQuestion();
    boss.hitBox();
    boss.health();
    boss.timer();
    boss.draw();

    if (!state.answering) {
      state.questionAnswer = warior.questions();
    }
  }
}

animate();
