class Boss extends Sprite {
  constructor({ position, imageSrc, frameRate, frameBuffer }) {
    super({ position, imageSrc, frameRate, frameBuffer });
    this.width = 316;
    this.height = 201;

    this.position = {
      x: canvas.width - this.width,
      y: 60,
    };
    this.defaultPosition = this.position;
    this.time = {
      width: 100,
      height: 40,
      value: 1,
    };
    this.hp = 0;

    this.damage = 10;
    this.attribute = Math.floor(Math.random() * 3);

    this.shakingElapsedTime = 0;
    this.i = 0;
    this.effectElement = null;

    this.countDown = null;
  }

  health() {
    c.fillStyle = "white";
    c.fillRect(canvas.width - 410, 10, 400, 40);

    c.fillStyle = "rgba(255,0,0,0.5)";
    c.fillRect(canvas.width - 410 + (400 - this.hp * 4), 10, this.hp * 4, 40);
  }
  timer() {
    c.fillStyle = "red";
    c.fillRect(canvas.width / 2 - this.time.width / 2, 10, this.time.width, 40);

    c.fillStyle = "white";
    c.font = "20px Arial";
    // c.fillText(this.time.value.toString(),canvas.width/2 - this.time.width/2,this.time.height)
    c.fillText(
      this.time.value.toString() + " detik",
      canvas.width / 2 - this.time.width / 2 + 10,
      this.time.height
    );
    // c.fillText("Hello World", 10, 50);
  }
  draw() {
    if (!this.loaded) return;
    c.drawImage(this.image, this.position.x, this.position.y);
  }

  shaking() {
    const bool = Boolean(Math.floor(Math.random() >= 0.5));
    this.shakingElapsedTime++;
    switch (state.element) {
      case "water":
        this.effectElement = water;
        break;
      case "fire":
        this.effectElement = fire;
        break;
      case "ice":
        this.effectElement = ice;
        break;
    }
    this.effectElement.position.x = this.position.x + 100;
    this.effectElement.position.y = this.position.y + 50;
    this.effectElement.drawAnimate(true);

    if (this.shakingElapsedTime % 10 === 0) {
      if (bool) {
        this.position.x += Math.floor(Math.random() * 10) + 1;
      } else {
        this.position.x -= Math.floor(Math.random() * 10) + 1;
      }
      this.effectElement.position.x = this.position.x + 100;
      this.effectElement.position.y = this.position.y + 50;

      this.i++;
    }

    if (this.i >= warior.damage) {
      state.warriorAttack = null;
      this.shakingElapsedTime = 0;
      this.i = 0;

      this.hp -= warior.damage;
      fire.animateBackward(false);
    }
  }
  countDownStart() {
    if (boss.map4Timer) {
      this.countDown = setInterval(this.countDownState, 1000);
      console.log("ini sekali aja harysnya");
      boss.map4Timer = false;
    }
  }
  countDownState() {
    boss.time.value -= 1;
    if(boss.time.value <= 0){
      // state.gameOver = true;
      boss.gameOverExec();
    }
  }
  gameOverExec(win){
    state.gameOver = true;
    if(win){
      state.gameResult = true
    }
  }
}
