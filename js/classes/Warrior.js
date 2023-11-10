class Warrior {
  constructor() {
    this.position = {
      x: 0,
      y: 150,
    };
    this.width = 300;
    this.height = 300;
    this.damage = 10;

    this.shakingElapsedTime = 0;
    this.i = 0;
    this.effectElement = null;
    
    this.currentFrame = 0;
    this.elapsedTime = 0;
    this.frameBuffer = 0;
    this.frameRate = 1;

    this.map4Timer = true;

    this.image;
    // this.loaded = false;
    this.punchMusic = new Audio('music/wariorhurt.mp3')

  }
  
  health() {
    // console.log('haiiii ini ' + state.hp)
    c.fillStyle = "white";
    c.fillRect(10, 10, 400, 40);

    c.fillStyle = "rgba(255,0,0,0.5)";
    c.fillRect(10, 10, state.hp * 4 , 40);


  }
  shaking() {
    this.punchMusic.play();
    const bool = Boolean(Math.floor(Math.random() >= 0.5));
    this.shakingElapsedTime++;
    // console.log(state.bossElement());
    switch (state.bossElement) {
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

    if (this.i >= boss.damage) {
      state.bossAttack = null;
      this.shakingElapsedTime = 0;
      this.i = 0;
      state.hp -= boss.damage;

    }
  }
  changeElement(img){
    this.image = new Image();
    this.loaded = false;
    this.image.onload = (e) => {
      this.loaded = true;
      // console.log(frameRate);
      this.width = this.image.width / this.frameRate;
      this.height = this.image.height;
    };
    this.image.src = img;

    // console.log(img)

  }
  draw() {
    // console.log("loaded" + this.loaded);

    if (!this.loaded) return;
    c.drawImage(this.image, this.position.x, this.position.y);
  }
}
