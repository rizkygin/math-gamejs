class Player extends Sprite {
  constructor(imageSrc, frameRate, frameBuffer) {
    super(imageSrc, frameRate, frameBuffer);
    this.position = {
      x: 100,
      y: 100,
    };
    this.velocity = {
      x: 0,
      y: 0,
    };
    this.gravity = 1;
    (this.width = 100), (this.height = 100);
    this.sides = {
      top: this.position.y,
      bottom: this.position.y + this.height,
    };
  }
  update() {
    this.position.y += this.velocity.y;
    this.updateSides();

    if (this.sides.top <= 0) {
      this.position.y = 0;
      this.velocity.y = 1;
    } else {
      if (this.sides.bottom < canvas.height - ground) {
        this.velocity.y += this.gravity;
      } else {
        this.velocity.y = 0;
        this.gravity = 1;
      }
    }
    //bottom ground
    if (this.sides.bottom > canvas.height) {
      this.position.y = canvas.height - this.height;
    }
  }
  updateSides() {
    this.sides.bottom = this.position.y + this.height;
    this.sides.top = this.position.y;
  }
  enterMap2() {
    // c.fillStyle = "rgba(0,225,0,0.5)";
    // c.fillRect(835,222,130,250)

    
    if(player.position.x >= 835 && player.position.y >=222 && player.position.x <= 965 && player.position.y <= 472){
      door.drawAnimate(false);
      console.log("harusnya animasinya muncul")
    }else{
      door.animateBackward(false);
      console.log("animateBackward");
    }
  }
}
