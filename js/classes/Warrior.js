class Warrior extends Sprite {
  constructor(imageSrc, frameRate, frameBuffer) {
    super(imageSrc, frameRate, frameBuffer);
    this.position = {
      x: 0,
      y: 150,
    };
    this.width = 300;
    this.height = 300;
  }
  draw() {
    // console.log('hai')
    if (!this.loaded) return;
    c.drawImage(this.image, this.position.x, this.position.y);
  }
  drawQuestion() {
    c.fillStyle = "white";
    c.fillRect(0, canvas.height - 200, canvas.width, 200);
  }
  health() {
    c.fillStyle = "white";
    c.fillRect(10, 10, 400, 40);
  }

  questions() {
    state.answering = true;
    // const figure = Math.floor(Math.random() * 7);
    const figure = 1
    let answer = 0;
    switch (figure) {
      case 1:
        const a = Math.floor(Math.random(1,40))
        const b = Math.floor(Math.random(1,40))
        const c = Math.floor(Math.random(1,40))

        const alas = Math.floor(Math.random(1,30))
        const tinggi = Math.floor(Math.random(1,30))

        answer = this.triangle(alas, tinggi, a, b ,c);
        break;
      case 2:
        answer = this.rectangle(panjang, lebar);
        break;
      case 3:
        answer = this.circle(jari);
        break;
      case 4:
        answer = this.trapezoid(a,b, c,tinggi);
        break;
      case 5:
        answer = this.kite(d1,d2, a, b);
        break;
      case 6:
        answer = this.rhombus(d1,d2, a, b);
        break;
      case 7:
        answer = this.parallelogram(alas, tinggi,a, b);
        break;
      default:
        answer = this.square(sisi);
        break;
    }

  }
  triangle (alas, tinggi, a, b , c, luas) {
    const triangle = new Sprite({
      imageSrc: "./images/figures/triangle.png",
      position:{
        x: 20,
        y: canvas.height - 100
      }
    });
    triangle.draw();
    if(luas){
      
    }else{

    }
    console.log('triangle');
  }
  rectangle () {
    console.log('rectangle');
  }
  circle () {
    console.log('circle');
  }
  trapezoid(){
    console.log('trapezoid')
  }
  kite(){
    console.log('kite')
  }
  rhombus(){
    console.log('rhoumbus')
  }
  parallelogram(){
    console.log('parallelogram')
  }
  square(){
    console.log('square')
  }
}
