class EventListener {
  constructor() {
    // this.answerSection = document.createElement("div");
    // this.submits = document.createElement("button");
    // this.resultAnswer = document.createElement("input");

    // this.answerSection.setAttribute("id", "map4");
    // this.answerSection.setAttribute(
    //   "style",
    //   "position: absolute; left: 700px; bottom: 314px;"
    // );
    // this.resultAnswer.setAttribute("id", "answer");
    // this.submits.setAttribute("id", "answerButton");
    // this.submits.innerHTML = "JAWAB";

    // this.answerSection.appendChild(this.resultAnswer);
    // this.answerSection.appendChild(this.submits);

    // document.body.append(this.answerSection);
    this.firstTime = true;

    this.answerSection = document.getElementById("map4");
    this.submits = document.getElementById("answerButton");
    this.resultAnswer = document.getElementById("answer");

    this.sendNickname = document.getElementById('nicknameButton');
    this.nicknameInput = document.getElementById('nicknameInput');

    this.sendNickname.addEventListener('click', () => {
      const nickname = this.nicknameInput.value;

      
    });

    // this.submits.addEventListener('click',() => {
    //   state.answering = true;
    //   const answer = this.resultAnswer.value;
    //   if(state.answering && answer === state.questionAnswer.toString()){
    //     console.log('benar')
    //     state.warriorAttack = true;
    //   }else{
    //     console.log('salah')
    //     state.bossAttack = true;
    //   }
    //   state.answering = false;
    //   state.refresh();
    //   this.resultAnswer.value = "";
    // });
  }

  listener() {
    if (state.map === 4) {
      // this.answerSection.style.display = "block";
      if(state.gameOver){
        this.answerSection.style.display = "none";
      }
      window.removeEventListener("keydown", this.onKeydown);
      window.removeEventListener("keyup", this.onKeyUp);
      // console.log("jawaban :" + state.questionAnswer);

    } else {
      if(this.firstTime){
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
        keys.jump.pressed = false;
        break;
    }
  }
}


