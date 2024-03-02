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

const url = "https://kyancorp.com/api/make?name=";

const state = {
  map: 1,
  hp: 100,
  section: 1,
  element: null,
  bossElement: null,
  climbStair: false,
  wariorElement: "./images/character/warrior.png",

  answering: false,
  questionAnswer: 0,
  a: a.toString(),
  b: b.toString(),
  ca: ca.toString(),
  alas: alas.toString(),
  tinggi: tinggi.toString(),
  luas: luas,
  figure: figure,

  showOption: false,

  warriorAttack: null,
  bossAttack: null,
  refresh: this.refresh,

  gameOver: false,
  gameResult: false,
  map4Draw: true,
  attackListener: false,

  jawabanBenar: [],
  rekapJawaban: "",
  desc: true,
};
function clickOptions() {
  if (!state.desc) {
    state.showOption = !state.showOption;
  }
}
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
const bgm = new Audio("music/fightboss.mp3");
const bgm1 = new Audio("music/map.mp3");
const jumpsfx = new Audio("music/jumpreal.mp3");

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
  imageSrc: "",
  frameRate: 1,
  framBuffer: 0,
});
const boss = new Boss({
  imageSrc: "./images/character/boss.png",
  frameRate: 1,
  frameBuffer: 0,
});
const question = new Question({
  imageSrc: "./images/character/boss.png",
  frameRate: 1,
  frameBuffer: 0,
});

const listener = new EventListener();
function animate() {
  window.requestAnimationFrame(animate);
  listener.listener();

  if (state.gameOver) {
    bgm.pause();
    bgm.currentTime = 0;
    gameOverMap.drawAnimate();
    if (boss.hp <= 0) {
      boss.winStatement(true, "Karena Menghabiskan darah Boss", 362);
    } else if (boss.hp > state.hp) {
      boss.winStatement(false, "Karena darah boss lebih banyak dari mu", 338);
    } else if (state.hp > boss.hp) {
      boss.winStatement(true, "Karena darahmu lebih banyak dari boss", 345);
    } else if (state.hp === boss.hp) {
      boss.winStatement(true, "Kehebatannmu diatas rata rata", 380);
    }
  } else {
    if (state.map === 4) {
      bgm1.pause();
      // console.log(question.count);
      bgm1.currentTime = 0;
      bgm.play();
      if (
        (question.count >= 13 * state.section && state.section === 1) ||
        (question.count >= 13 && question.count >= 41)
      ) {
        state.gameOver = true;
      } else {
        map4.draw();
        if (state.map4Draw) {
          switch (state.element) {
            case "fire":
              warior.changeElement("./images/character/wariorFire.png");
              state.map4Draw = false;
              break;
            case "water":
              warior.changeElement("./images/character/wariorWater.png");
              state.map4Draw = false;
              break;
            case "ice":
              warior.changeElement("./images/character/wariorIce.png");
              state.map4Draw = false;
              break;
          }
        }
        warior.draw();
        warior.health();
        boss.health();
        boss.timer();
        boss.draw();

        map4.attackListener();
        question.drawQuestion();
        // console.log(listener.userAnswer);

        if (state.attackListener) {
          clickOptions();
          let push = "";
          if (state.warriorAttack) {
            state.jawabanBenar.push(question.count + 1);
            push = "&s" + (question.count + 1) + "=1";
            state.rekapJawaban += push;
          } else {
            push = "&s" + (question.count + 1) + "=0";
            state.rekapJawaban += push;
          }
          console.log(state.rekapJawaban);

          listener.checkboxReset();
          // question.uncheckCheckbox();
          question.nextQuestion();

          state.attackListener = false;
        }
        if (question.count > 0) {
          document.getElementById("showOptions").style.display = "block";
          if (state.showOption) {
            const form = document.querySelector("form.pure-form");
            form.style.display = "block";
            document.getElementById("onceShow").style.display = "none";
            c.fillStyle = "white";
            c.fillRect(0, canvas.height - 200, canvas.width, 200);

            document.getElementById("sawQuestion").style.display = "none";
          } else {
            const form = document.querySelector("form.pure-form");
            form.style.display = "none";
          }
        } else {
          document.getElementById("showOptions").style.display = "none";
        }
      }
    } else {
      bgm1.play();
      bgm1.volume = 0.1;
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
function jumptoQuestion() {
  state.rekapJawaban += "&s" + (question.count + 1) + "=1";
  question.count += 1;
}
function sendNickname() {
  const nickname = document.getElementById("nicknameInput").value;
  // alert(nickname);
  let actionS = url + nickname + state.rekapJawaban;
  if(state.section === 1){
    actionS += "&db1=" + boss.hp;
    actionS += "&dw1=" + state.hp;
    actionS += "&section=" + 1;
  }else{
    actionS += "&db2=" + boss.hp;
    actionS += "&dw2=" + state.hp;
    actionS += "&section=" + 2;

  }
  // alert(actionS);
  window.open(actionS, "_self");
}

animate();
