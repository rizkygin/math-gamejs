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
    // state.answering = true;

    // const figure = 10
    let answer = 0;
    switch (state.figure) {
      case 1:
        answer = this.triangle(
          state.alas,
          state.tinggi,
          state.a,
          state.b,
          state.ca,
          state.luas
        );
        break;
      case 2:
        answer = this.rectangle(state.a, state.b, state.luas);
        break;
      case 3:
        answer = this.circle(state.a, state.luas);
        break;
      case 4:
        answer = this.trapezoid(
          state.a,
          state.b,
          state.ca,
          state.tinggi,
          state.luas
        );
        break;
      case 5:
        answer = this.kite(state.a, state.b, state.luas);
        break;
      case 6:
        answer = this.rhombus(state.a, state.b, state.luas);
        break;
      case 7:
        answer = this.parallelogram(state.a, state.tinggi, state.luas);
        break;
      default:
        answer = this.square(state.a,state.luas);
        break;
    }
    return answer;
  }
  triangle(alas, tinggi, a, b, ca, l) {
    figureTriangle.draw();
    c.fillStyle = "grey";
    c.font = "20px arial";

    if (l) {
      c.fillText("a = " + state.alas, 110, 550);
      c.fillText("t = " + state.tinggi, 70, 490);
      c.fillText("Luas = ", 620, 475);
      return (alas * tinggi) / 2;
    } else {
      c.fillText("a = " + state.alas, 100, 550);
      c.fillText("b = " + state.tinggi, 10, 460);
      c.fillText("c = " + state.tinggi, 200, 460);

      c.fillText("Keliling = ", 610, 475);
      return Number(a) + Number(b) + Number(ca);
    }
  }
  rectangle(panjang, lebar, l) {
    figureRectangle.draw();
    c.fillStyle = "grey";
    c.font = "20px arial";
    if (l) {
      c.fillText("a = " + panjang, 100, 520);
      c.fillText("b = " + lebar, 30, 460);

      c.fillText("Luas = ", 610, 475);
      return Number(panjang) * Number(lebar);
    } else {
      c.fillText("a = " + panjang, 100, 520);
      c.fillText("b = " + lebar, 30, 460);

      c.fillText("Keliling = ", 610, 475);
      return (Number(panjang) + Number(lebar)) * 2;
    }
  }
  circle(jari, l) {
    // jari =;
    figureCircle.draw();
    c.fillStyle = "grey";
    c.font = "20px arial";
    if (l) {
      c.fillText("r = " + jari, 100, 465);

      c.fillText("Luas = ", 610, 475);
      c.font = "10px arial";

      c.fillText(
        "bilangan dua angka dibelakang koma harap ditulis contoh '12.80' ",
        610,
        500
      );
      if (jari % 7 === 0) {
        c.font = "20px arial";

        c.fillText("π = 22", 180, 465);
        c.fillText("__", 217, 465);
        c.fillText("7", 220, 485);

      
        c.fillText("Luas = ", 610, 475);
        return Number((22 / 7) * Math.sqrt(jari));
      } else {
        c.font = "20px arial";

        c.fillText("π = 3.14", 180, 465);

      
        c.fillText("Luas = ", 610, 475);
        return Number(3.14 * jari * jari).toFixed(2);
      }
    } else {
      c.fillText("r = " + jari, 100, 465);

      c.fillText("Keliling = ", 610, 475);
      c.font = "10px arial";

      c.fillText(
        "bilangan dua angka dibelakang koma harap ditulis contoh '12.80' ",
        610,
        500
      );
      if (jari % 7 === 0) {
        c.font = "20px arial";

        c.fillText("π = 22", 180, 465);
        c.fillText("__", 217, 465);
        c.fillText("7", 220, 485);

        c.fillText("Keliling = ", 610, 475);
        return Number((22 / 7) * (jari * 2));
      } else {
        c.font = "20px arial";

        c.fillText("π = 3.14", 180, 465);
        c.fillText("Keliling = ", 610, 475);
        return Number(3.14 * (jari * 2)).toFixed(2);
      }
    }
  }
  trapezoid(a, b, ca, t, l) {
    figureTrapezoid.draw();
    c.fillStyle = "grey";
    c.font = "20px arial";

    if (l) {
      c.fillText("t = " + t, 64, 465);
      c.fillText("a = " + a, 110, 505);
      c.fillText("b = " + b, 110, 400);
      c.fillText("Luas = ", 610, 475);

      return ((Number(a) + Number(b)) * Number(t)) / 2;
    } else {
      c.fillText("c = " + ca, 245, 450);
      c.fillText("a = " + a, 110, 505);
      c.fillText("b = " + b, 110, 400);
      c.fillText("Keliling = ", 610, 475);

      return Number(a) + Number(b) + Number(ca) * 2;
    }
  }
  kite(a,b,l) {
    figureKite.draw();
    c.fillStyle = "grey";
    c.font = "20px arial";
    if(l){
      c.fillText("d1 = " + a, 60, 450);
      c.fillText("d2 = " + b, 110, 492);
      c.fillText("Luas = ", 610, 475);
      
      return Number(a) * Number(b) / 2;
    }else{
      c.fillText("a = " + a, 7, 430);
      c.fillText("b = " + b, 170, 430);
      c.fillText("Keliling = ", 610, 475);
      
      return Number(a) + Number(b) * 2;
    }
  }
  rhombus(a,b,l) {
    figureRhombus.draw();
    c.fillStyle = "grey";
    c.font = "20px arial";
    // console.log("rhoumbus");
    if(l){
      c.fillText("d1 = " + a, 90, 420);
      c.fillText("d2 = " + b, 130, 472);
      c.fillText("Luas = ", 610, 475);
      return Number(a)*Number(b) /2;
    }else{
      c.fillText("a = " + a, 20, 420);
      c.fillText("b = " + b, 170, 420);
      c.fillText("Keliling = ", 610, 475);
      return (Number(a)+Number(b)) *2;
    }
  }
  parallelogram(a,b,l) {
    figureParelellogram.draw();
    c.fillStyle = "grey";
    c.font = "20px arial"
    if(l){
      c.fillText("t = " + a, 135, 470);
      c.fillText("a = " + b, 130, 530);
      c.fillText("Luas = ", 610, 475);
      return Number(a)*Number(b);
    }else{
      c.fillText("a = " + a, 155, 420);
      c.fillText("b = " + b, 130, 530);
      c.fillText("Keliling = ", 610, 475);
      return (Number(a)+Number(b))/2;
    }
  }
  square(a,l) {
    figureSquare.draw();
    c.fillStyle = "grey";
    c.font = "20px arial"
    if(l){
      c.fillText("s = " + a, 55, 470);
      c.fillText("Luas = ", 610, 475);
      return Number(a) * Number(a);
    }else{
      c.fillText("s = " + a, 55, 470);
      c.fillText("Keliling = ", 610, 475);
      return Number(a) * 4;
    }
  }
}
const figureTriangle = new Sprite({
  position: {
    x: 20,
    y: 400,
  },
  imageSrc: "./images/figures/triangle_2.png",
});

const figureRectangle = new Sprite({
  position: {
    x: 20,
    y: 400,
  },
  imageSrc: "./images/figures/rectangle.png",
});
const figureCircle = new Sprite({
  position: {
    x: 20,
    y: 400,
  },
  imageSrc: "./images/figures/circle_1.png",
});
const figureTrapezoid = new Sprite({
  position: {
    x: 20,
    y: 400,
  },
  imageSrc: "./images/figures/trapezoid_1.png",
});
const figureKite = new Sprite({
  position: {
    x: 20,
    y: 400,
  },
  imageSrc: "./images/figures/kite_5.png",
});
const figureRhombus = new Sprite({
  position: {
    x: 50,
    y: 350,
  },
  imageSrc: "./images/figures/rhombus.png",
});
const figureParelellogram = new Sprite({
  position: {
    x: 50,
    y: 430,
  },
  imageSrc: "./images/figures/parallelogium.png",
});
const figureSquare = new Sprite({
  position: {
    x: 50,
    y: 410,
  },
  imageSrc: "./images/figures/square.png",
});
