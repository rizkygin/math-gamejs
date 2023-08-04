// import * as fs from "fs";

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
  map: 1,
  hp: 100,
  element: null,
  bossElement: null,
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

  warriorAttack: null,
  bossAttack: null,
  refresh: this.refresh,

  gameOver: false,
  gameResult: false
};
function chooseBoosElement() {
  const random = Math.floor(Math.random() * 3);
  switch (random) {
    case 1:
      state.bossElement = "fire";
      break;
    case 2:
      state.bossElement = "ice";
      break;
    default:
      state.bossElement = "water";
      break;
  }
}
this.chooseBoosElement();
function refresh() {
  state.a = Math.floor(Math.random() * 40) + 1;
  state.b = Math.floor(Math.random() * 40) + 1;
  state.ca = Math.floor(Math.random() * 40) + 1;

  state.alas = Math.floor(Math.random() * 30) + 1;
  state.tinggi = Math.floor(Math.random() * 30) + 1;

  state.luas = Math.random() >= 5;
  state.figure = Math.floor(Math.random() * 7);
  state.answering = false;
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
const listener = new EventListener();
function animate() {
  window.requestAnimationFrame(animate);
  listener.listener();
  if (state.gameOver) {
    gameOverMap.drawAnimate();
    if(boss.hp <= 0){
      boss.winStatement(true);
    }
    if(boss.hp > 0){
      boss.winStatement(false);
    }
  } else {
    if (state.map === 4) {
      map4.draw();
      warior.draw();
      warior.health();
      warior.drawQuestion();
      boss.health();
      boss.timer();
      boss.draw();

      map4.attackListener();

      if (!state.answering) {
        state.questionAnswer = warior.questions();
      }
    } else {
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
          // map3.defaultElement();
          player.enterMap4();
          break;
      }
      player.movement();
      player.drawAnimate(true);
      player.update();
    }
  }
}

animate();
