class EventListener {
  constructor() {
    this.firstTime = true;
    this.answerOption = document.getElementById("jawabanganda");
    this.answerSection = document.getElementById("map4");
    this.submits = document.getElementById("answerButton");
    this.resultAnswer = document.getElementById("answer");

    // this.sendNickname = document.getElementById("nicknameButton");
    // this.nicknameInput = document.getElementById("nicknameInput");

    this.option0 = document.getElementById("option0");
    this.option1 = document.getElementById("option1");
    this.option2 = document.getElementById("option2");
    this.option3 = document.getElementById("option3");
    this.jawaban = null;
    this.userAnswer = null;

    this.form = document.querySelector("form.pure-form");
  }

  changeJawaban(a, b, c, d, jawabans) {
    this.option0.innerHTML = a;
    this.option1.innerHTML = b;
    this.option2.innerHTML = c;
    this.option3.innerHTML = d;
    // this.jawaban = jawabans;
    this.jawaban = jawabans;
    // console.log(this.jawaban);
    // console.log("sudah diubah " + this.jawaban);
    this.form.addEventListener("submit", function (e) {
      e.preventDefault();
      this.jawaban0 = document.getElementById("answer0");
      this.jawaban1 = document.getElementById("answer1");
      this.jawaban2 = document.getElementById("answer2");
      this.jawaban3 = document.getElementById("answer3");

      var userAnswering = null;
      var kunciJawaban = null;
      if (this.jawaban0.checked) {
        console.log("jawabanA");
        userAnswering = 0;
        state.attackListener = true;
      } else if (this.jawaban1.checked) {
        console.log("jawabanB");
        userAnswering = 1;
        state.attackListener = true;
      } else if (this.jawaban2.checked) {
        console.log("jawabanC");
        userAnswering = 2;
        state.attackListener = true;
      } else if (this.jawaban3.checked) {
        console.log("jawabanD");
        userAnswering = 3;
        state.attackListener = true;
      }
      if (state.attackListener) {
        if (userAnswering !== jawabans) {
          state.bossAttack = true;
          state.warriorAttack = false;

          // console.log("boss attack");
        } else {
          state.warriorAttack = true;
          state.bossAttack = false;
          // console.log("warrior attack");
        }
      }
      // console.log("harusnya sudah nyerang ga sih :(");
    });
  }

  listener() {
    if (state.map === 4) {
      this.answerSection.style.display = "block";
      if (state.gameOver) {
        this.answerSection.style.display = "none";
      }
      window.removeEventListener("keydown", this.onKeydown);
      window.removeEventListener("keyup", this.onKeyUp);
      // console.log("jawaban :" + state.questionAnswer);
    } else {
      if (this.firstTime) {
        // this.answerSection.style.display = "none";
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
          if (!state.climbStair) {
            if (player.sides.bottom >= canvas.height - ground) {
              keys.jump.pressed = true;
            } else {
              keys.jump.pressed = false;
            }
          } else {
            keys.jump.pressed = true;
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
          } else if (state.map === 2) {
            if (player.onDoor2()) {
              state.map = 3;
            }
          }
        });

        window.addEventListener("keydown", this.onKeydown);
        window.addEventListener("keyup", this.onKeyUp);
      }
      this.firstTime = false;
    }
  }
  onKeydown(event) {
    event.preventDefault();

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
        jumpsfx.play();

        console.log(player.position.x + player.width);
        console.log("b: " + (player.position.x + player.width));
        if (!state.climbStair) {
          if (player.sides.bottom >= canvas.height - ground) {
            keys.jump.pressed = true;
          } else {
            keys.jump.pressed = false;
          }
        } else {
          keys.jump.pressed = true;
        }

        break;
      case "Enter":
        if (state.map === 1) {
          if (player.onDoor()) {
            state.map = 2;
            console.log("masuk map 2 " + state.map);
          }
        } else if (state.map === 2) {
          if (player.onDoor2()) {
            state.map = 3;
            console.log("masuk map 3 " + state.map);
          }
        }

        break;
    }
  }
  onKeyUp(event) {
    event.preventDefault();
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
        jumpsfx.pause();
        jumpsfx.currentTime = 0;

        keys.jump.pressed = false;
        break;
    }
  }
}
