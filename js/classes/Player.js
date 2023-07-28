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
      keys.jump.pressed = false;
      keys.up.pressed = false;
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
    if (this.position.x <= 0) {
      keys.left.pressed = false;
      this.position.x = 0;
    }
  }
  updateSides() {
    this.sides.bottom = this.position.y + this.height;
    this.sides.top = this.position.y;
  }
  enterMap2() {
    if (this.onDoor()) {
      door.drawAnimate(false); 
    } else {
      if (door.currentFrame > 0) {
        door.animateBackward(false);
      }
    }
  }
  onDoor() {
    if (
      player.position.x >= 835 &&
      player.position.y >= 222 &&
      player.position.x <= 965 &&
      player.position.y <= 472
    ) {
      return true;
    } else {
      return false;
    }
  }
  enteringMap2() {
    if (door.currentFrame >= door.frameRate) {
    }
  }
  movement() {
    player.velocity.x = 0;
    if (keys.left.pressed) player.position.x += -5;
    else if (keys.right.pressed) player.position.x += 5;

    if (keys.down.pressed) player.position.y += 5;
    else if (keys.up.pressed) player.position.y -= 5;
    else if (keys.jump.pressed) player.velocity.y -= 5;
  }
}
