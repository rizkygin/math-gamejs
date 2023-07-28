class Sprite {
  constructor({ position, imageSrc, frameRate = 1, frameBuffer = 4 }) {
    this.position = position;
    this.image = new Image();
    this.loaded = false;
    this.image.onload = (e) => {
      this.loaded = true;
      // console.log(frameRate);
      this.width = this.image.width / this.frameRate;
      this.height = this.image.height;
    };
    this.frameRate = frameRate
    this.image.src = imageSrc;
    this.currentFrame = 0;
    this.elapsedTime = 0;
    this.frameBuffer = frameBuffer;
  }
  draw() {
    if (!this.loaded) return;
    c.drawImage(this.image, this.position.x, this.position.y);
  }
  drawAnimate(loop) {
    if (!this.loaded) return;
    const cropbox = {
      position: {
        x: this.width * this.currentFrame,
        y: 0,
      },
      width: this.width,
      height: this.height,
    };

    c.drawImage(
      this.image,
      cropbox.position.x,
      cropbox.position.y,
      cropbox.width,
      cropbox.height,
      this.position.x,
      this.position.y,
      cropbox.width,
      cropbox.height
    );
    this.updateFrame(loop)
  }

  updateFrame(loop) {
    this.elapsedTime++;
    if(this.elapsedTime % this.frameBuffer === 0){
      if(this.currentFrame < this.frameRate - 1 ) this.currentFrame++
      else {
        if(loop){
          this.currentFrame = 0
        }
      }
    }
    
  }

  animateBackward(loop){
    // console.log('ha')
    if (!this.loaded) return;
    const cropbox = {
      position: {
        x: this.width * this.currentFrame,
        y: 0,
      },
      width: this.width,
      height: this.height,
    };

    c.drawImage(
      this.image,
      cropbox.position.x,
      cropbox.position.y,
      cropbox.width,
      cropbox.height,
      this.position.x,
      this.position.y,
      cropbox.width,
      cropbox.height
    );
    this.updateFramBackward(loop)
  }

  updateFramBackward(loop){
    this.elapsedTime++;
    if(this.elapsedTime % this.frameBuffer === 0){
      if(this.currentFrame >= 0 ) {
        console.log(this.currentFrame);
        this.currentFrame--
      }
      else {
        if(loop){
          this.currentFrame = this.frameRate
        }
      }
    }
  }

}
const map1 = new Sprite({
  position: {
    x: 0,
    y: 0,
  },
  imageSrc: "./images/map/map1.png",
});
const map2 = new Sprite({
  position: {
    x: 0,
    y: 0,
  },
  imageSrc: "./images/map/map2.png",
});
const map3 = new Sprite({
  position: {
    x: 0,
    y: 0,
  },
  imageSrc: "./images/map/map3.png",
});
