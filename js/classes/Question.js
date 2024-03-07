const picQ1 = new Sprite({
  position: {
    x: 400,
    y: 410,
  },
  imageSrc: "../../images/questionspic/q1.png",
});
const picQ2 = new Sprite({
  position: {
    x: 400,
    y: 459,
  },
  imageSrc: "../../images/questionspic/q2.png",
});
const picQ4 = new Sprite({
  position: {
    x: 400,
    y: 380,
  },
  imageSrc: "../../images/questionspic/q4.png",
});
const picQ5 = new Sprite({
  position: {
    x: 400,
    y: 410,
  },
  imageSrc: "../../images/questionspic/q5.png",
});
const picQ10 = new Sprite({
  position: {
    x: 400,
    y: 376,
  },
  imageSrc: "../../images/questionspic/q10.png",
});
const picQ11 = new Sprite({
  position: {
    x: 400,
    y: 410,
  },
  imageSrc: "../../images/questionspic/q11.png",
});
const picQ15 = new Sprite({
  position: {
    x: 400,
    y: 410,
  },
  imageSrc: "../../images/questionspic/q15.png",
});
class Question extends Sprite {
  constructor(imageSrc, frameRate, frameBuffer) {
    super(imageSrc, frameRate, frameBuffer);
    this.count = (state.section - 1) * 13;
    // this.count = 12;
    this.DescCount = 0;
    this.nextCount = 0;
    this.jsonQuestion = {
      questions: [
        {
          //cari menggunakan BossAsk: false, untuk mencari semua description
          //1
          question:
            "Kakak dan adik bermain puzzle bersama-sama dan membuat sebuah bangun seseperti pada gambar\ndibawah ini!",
          picture: "q1",
          question2: "",
          options: [
            "Segitiga , persegi , Jajar Genjang, Trapesium",
            "Persegi, Jajar Genjang, Persegi Panjang, Lingkaran",
            "Belah Ketupat, Persegi Panjang, Lingkaran, Jajar Genjang",
            "Persegi, Segitiga, Belah ketupat, Trapesium",
          ],
          answer: 0,
          bossAsk: false,
        },
        {
          //2
          question: "Komposisi dari bangun tersebut meliputi...",
          picture: "q1",
          question2: null,
          options: [
            "Segitiga , persegi , Jajar Genjang, Trapesium",
            "Persegi, Jajar Genjang, Persegi Panjang, Lingkaran",
            "Belah Ketupat, Persegi Panjang, Lingkaran, Jajar Genjang",
            "Persegi, Segitiga, Belah ketupat, Trapesium",
          ],
          answer: 0,
          bossAsk: true,
        },
        {
          //3
          question:
            "Gambar bangun tersebut jika di dekomposisikan menjadi … \nbangun datar",
          picture: null,
          question2: null,
          options: ["4", "5", "6", "7"],
          answer: 1,
          bossAsk: true,
        },
        {
          //4
          question:
            "Indonesia memiliki beragam tradisi peringatan dalam menyambut hari raya Idul Fitri, salah satunya adalah dengan \nmembuat ketupat. Ketupat dapat dibentuk dengan beragam bentuk, contohnya di keluarga pak \nArpu yang setiap lebaran membuat ketupat dalam bentuk seperti pada gambar",
          picture: "q2",
          question2: "",
          options: [
            "Belah Ketupat, Segitiga",
            "Belah Ketupat, Persegi",
            "Belah Ketupat, Lingkaran",
            "Lingkaran",
          ],
          answer: 0,
          bossAsk: false,
        },
        {
          //5
          question:
            "Dari gambar tersebut, ketupat yang dibuat oleh keluarga pak \nArpu berbentuk bangun datar apa saja ?",
          picture: null,
          question2: null,
          options: [
            "Belah Ketupat, Segitiga",
            "Belah ketupat, Persegi",
            "Belah Ketupat, Lingkaran",
            "Lingkaran",
          ],
          answer: 0,
          bossAsk: true,
        },
        {
          //6
          question:
            "Memiliki empat sisi dan empat titik sudut, memiliki dua pasang sisi yang sama panjang, diagonalnya berpotongan \ntegak lurus, salah satu diagonalnya membagi diagonal yang lain sama panjang. \nCiri-ciri tersebut merupakan ciri-ciri dari bangun datar… ",
          picture: null,
          question2: null,
          options: [
            "Segitiga",
            "Lingkaran",
            "Persegi Panjang",
            "Belah Ketupat",
          ],
          answer: 3,
          bossAsk: false,
        },
        {
          //7
          question: "Ciri-ciri tersebut dimiliki oleh bangun datar… ",
          picture: null,
          queestion2: null,
          options: [
            "Segitiga",
            "Lingkaran",
            "Persegi Panjang",
            "Belah Ketupat",
          ],
          answer: 3,
          bossAsk: true,
        },
        {
          //8
          question: "Rumus yang sesuai dengan bangun datar tesebut adalah... ",
          picture: null,
          queestion2: null,
          options: [
            "a+b+c",
            "4 x Sisi",
            "(2 x panjang) + (2 x lebar)Persegi Panjang",
            "Panjang x Lebar",
          ],
          answer: 1,
          bossAsk: true,
        },
        {
          //9
          question: "Perhatikan gambar berikut ini!",
          picture: "q4",
          question2: null,
          options: ["4 dan 3", "2 dan 9", "1 dan 4", "4 dan 9"],
          answer: 3,
          bossAsk: false,
        },
        {
          //10
          question:
            "Manakah dari bangun berikut yang merupakan \nbangun datar layang-layang?",
          picture: null,
          question2: "",
          options: ["4 dan 3", "2 dan 9", "1 dan 4", "4 dan 9"],
          answer: 3,
          bossAsk: true,
        },
        {
          //11
          question:
            "Adek membuat kerajinan tangan berbentuk amplop seperti pada gambar",
          picture: "q5",
          question2: null,
          options: ["8m", "11m", "6m", "21m"],
          answer: 0,
          bossAsk: false,
        },
        {
          //12
          question: "Komposisi dari amplop yang dibuat oleh adek meliputi… ",
          picture: null,
          question2: null,
          options: [
            "Belah Ketupat dan segitiga",
            "Lingkaran, dan Segitiga",
            "Segitiga dan Persegi Panjang",
            "Persegi, dan Segitiga",
          ],
          answer: 2,
          bossAsk: true,
        },
        {
          //13
          question: "Dekomposisi dari amplop adek menjadi … bangun datar ",
          picture: null,
          question2: null,
          options: ["1", "2", "3", "4"],
          answer: 1,
          bossAsk: true,
        },
        {
          //14
          question:
            "Pada hari Minggu akan diadakan lomba sepak bola di desa. Lapangan yang digunakan untuk lomba memiliki\nkeliling sebesar 34 m dengan panjang 9 m. tentukan lebar dari lapangan tersebut!",
          picture: null,
          question2: null,
          options: ["50cm", "60cm", "30cm", "75cm"],
          answer: 1,
          bossAsk: false,
        },
        {
          //15
          question: "Lapangan tersebut sesuai dengan bentuk bangun datar?",
          picture: "q10",
          question2: "",
          options: [
            "Persegi",
            "Persegi Panjang",
            "Setengah Lingkaran",
            "Segitiga",
          ],
          answer: 1,
          bossAsk: true,
        },
        {
          //16
          question: "Apa yang ditanyakan pada soal tersebut!",
          picture: "q11",
          question2: "",
          options: ["Keliling", "Luas", "Panjang", "Lebar"],
          answer: 3,
          bossAsk: true,
        },
        {
          //17
          question:
            "Dari soal tersebut besar keliling, panjang, dan lebar \nlapangan adalah",
          picture: null,
          question2: null,
          options: [
            "Keliling = 34 m, Panjang = 9 cm, Lebar = 9 cm",
            "Keliling = 34 m, Panjang = 9 m, Lebar = ?",
            "Keliling = 43 m, Panjang = 9 cm, Lebar = 9 cm",
            "Keliling = 43 m, Panjang = 9 m, Lebar = ?",
          ],
          answer: 1,
          bossAsk: true,
        },
        {
          //18
          question:
            "Rumus yang sesuai untuk menyelesaikan permasalahan \ntersebut adalah",
          picture: null,
          question2: null,
          options: [
            "Keliling = panjang x lebar",
            "Keliling = 4 x sisi",
            "Keliling = 2 x (panjang + lebar)",
            "Keliling = a + b + c",
          ],
          answer: 2,
          bossAsk: true,
        },
        {
          //19
          question: "Lebar dari lapangan tersebut sebesar…",
          picture: "q15",
          question2: "",
          options: ["8m", "11m", "6m", "21m"],
          answer: 0,
          bossAsk: true,
        },
        {
          //20
          question:
            "Kakak bermain bersama dengan adik dan membuat bangunan rumah. \nPada bagian atap, jika diketahui kelilingnya sebesar 81 cm, \nBesar salah satu sisi yang dimiliki atap tersebut? ",
          picture: null,
          question2: "",
          options: ["", "", "", ""],
          answer: 0,
          bossAsk: false,
        },
        {
          //21
          question:
            "Bangun datar yang sesuai dengan atap rumah tersebut \nyaitu…",
          picture: null,
          question2: "",
          options: [
            "Jajar genjang",
            "Persegi",
            "Segitiga",
            "Trapesium siku siku",
          ],
          answer: 2,
          bossAsk: true,
        },
        {
          //22
          question: "Apa yang ditanyakan dari soal tersebut!",
          picture: null,
          question2: "",
          options: ["Sisi", "Luas", "Lebar", "Keliling"],
          answer: 0,
          bossAsk: true,
        },
        {
          //23
          question: "Apa yang diketahui dari soal tersebut!",
          picture: null,
          question2: "",
          options: [
            "Keliling = 81cm",
            "Luas = 81cm",
            "Sisi = 81cm",
            "Lebar = 81cm",
          ],
          answer: 0,
          bossAsk: true,
        },
        {
          //24
          question:
            "Rumus yang sesuai untuk menyelesaikan \npermasalahan diatas, adalah",
          picture: null,
          question2: "",
          options: [
            "Keliling = 4 x Sisi",
            "Keliling = 2 x (panjang + lebar)",
            "Keliling = a + b + c",
            "Keliling = Panjang x Lebar",
          ],
          answer: 2,
          bossAsk: true,
        },
        {
          //25
          question: "Besar sisi atap tersebut",
          picture: null,
          question2: "",
          options: ["24cm", "27cm", "18cm", "81cm"],
          answer: 1,
          bossAsk: true,
        },
        {
          //26
          question:
            "Jika diketahui panjang pada sebuah belah ketupat 12 cm, \nmaka keliling bangun tesebut adalah ?",
          question2: "",
          picture: null,
          options: ["", "", "", ""],
          bossAsk: false,
        },
        {
          //27
          question: "Apa yang ditanyakan dari soal tersebut!",
          question2: "",
          picture: null,
          options: ["Lebar", "Keliling", "Luas", "Sisi"],
          answer: 1,
          bossAsk: true,
        },
        {
          //28
          question: "Apa yang diketahui dari soal tesebut!",
          question2: "",
          picture: null,
          options: [
            "Luas = 12 cm",
            "Panjang = 12 cm",
            "Keliling = 12 cm",
            "Diagonal = 12cm",
          ],
          answer: 1,
          bossAsk: true,
        },
        {
          //29
          question:
            "Rumus yang sesuai untuk menyelesaikan permasalahan \ntersebut adalah",
          question2: "",
          picture: null,
          options: [
            "Keliling = a + b + c",
            "Keliling = 2 x (Panjang + lebar)",
            "Keliling = Panjang x lebar",
            "Keliling = 4 x sisi",
          ],
          answer: 3,
          bossAsk: true,
        },
        {
          //30
          question: "Keliling bangun datar tersebut…",
          question2: "",
          picture: null,
          options: ["36cm", "124cm", "12cm", "48cm"],
          answer: 3,
          bossAsk: true,
        },
        {
          //31
          question:
            "Bu guru meminta Lana untuk menggambar sebuah bangun datar yang memiliki \nsisi sebesar 15 x 15 cm. Besar keliling bangun tersebut",
          question2: "",
          picture: null,
          options: ["36cm", "124cm", "12cm", "48cm"],
          answer: 3,
          bossAsk: false,
        },
        {
          //32
          question: "Bentuk dari bangun datar tersebut adalah…",
          question2: "",
          picture: null,
          options: [
            "Persegi",
            "Persegi Panjang",
            "Layang layang",
            "Lingakaran",
          ],
          answer: 0,
          bossAsk: true,
        },
        {
          //33
          question: "Apa yang ditanyakan soal tersebut!",
          question2: "",
          picture: null,
          options: ["Sisi", "Luas", "Luas", "Keliling"],
          answer: 3,
          bossAsk: true,
        },
        {
          //34
          question: "Apa yang diketahui soal tersebut!",
          question2: "",
          picture: null,
          options: [
            "Keliling = 15cm",
            "Luas=15cm",
            "Sisi = 15cm",
            "Lebar = 15cm",
          ],
          answer: 2,
          bossAsk: true,
        },
        {
          //35
          question:
            "Rumus yang sesuai untuk menyelesaikan permasalahan \ntersebut adalah",
          question2: "",
          picture: null,
          options: [
            "Keliling = 4 x Sisi",
            "Keliling = 2 x (Panjang + lebar)",
            "Keliling = a + b + c",
            "Keliling = Panjang x Lebar",
          ],
          answer: 0,
          bossAsk: true,
        },
        {
          //36
          question:
            "Jika keliling dari bangun tersebut 70 cm, \nbmaka sisi BC dari bangun tersebut \nsebesar…",
          question2: "",
          picture: null,
          options: [
            "Keliling = 4 x Sisi",
            "Keliling = 2 x (Panjang + lebar)",
            "Keliling = a + b + c",
            "Keliling = Panjang x Lebar",
          ],
          answer: 0,
          bossAsk: false,
        },
        {
          //37
          question: "Bentuk bangun diatas adalah ...",
          question2: "",
          picture: null,
          options: [
            "Jajar genjang",
            "Trapesium",
            "Persegi panjang",
            "Segitiga",
          ],
          answer: 1,
          bossAsk: true,
        },
        {
          //38
          question: "Apa yang ditanyakan pada soal tersebut",
          question2: "",
          picture: null,
          options: ["Keliling", "Luas", "Sisi", "Lebar"],
          answer: 2,
          bossAsk: true,
        },
        {
          //39
          question: "Apa yang diketahui pada soal tersebut",
          question2: "",
          picture: null,
          options: [
            "Sisi = 44 cm, Keliling = 70 cm",
            "Luas = 70 cm, Panjang = 20 cm",
            "Diagonal = 9 cm, Lebar 15 cm",
            "Keliling = 20 cm, sisi 9 cm",
          ],
          answer: 0,
          bossAsk: true,
        },
        {
          //40
          question:
            "Rumus yang sesuai untuk menyelesaikan permasalahan \ntersebut adalah",
          question2: "",
          picture: null,
          options: [
            "Keliling = panjang x lebar",
            "Keliling = sisi + sisi + sisi + sisi",
            "Keliling = 2 x (panjang + lebar)",
            "Keliling = a + b + c ",
          ],
          answer: 1,
          bossAsk: true,
        },
        {
          //41
          question: "Besar sisi BC adalah",
          question2: "",
          picture: null,
          options: ["21 cm", "44 cm", "23 cm", "26 cm"],
          answer: 3,
          bossAsk: true,
        },
      ],
    };
  }
  drawQuestion() {
    c.fillStyle = "white";
    c.fillRect(0, canvas.height - 200, canvas.width, 200);

    // console.log(this.jsonQuestion.questions[this.count]);
    const currentQuestion = this.jsonQuestion.questions[this.count];
    const lastQuestion = this.jsonQuestion.questions[this.count - 1];
    let x = 10;
    let y = 400;
    const h = 20;
    c.fillStyle = "grey";
    c.font = "20px arial";

    //q1
    const q1 = currentQuestion.question;
    if (currentQuestion.bossAsk) {
      bubbleChat.drawAnimate(false);
      x = 210;
      y = 220;
      state.desc = false;

      document.getElementById("sawQuestion").style.display = "none";
    } else {
      bubbleChat.animateBackward(false);
      state.desc = true;
      // console.log(state.desc)
      document.getElementById("sawQuestion").style.display = "block";
    }
    if (q1) {
      var lines = q1.split("\n");
      for (let i = 0; i < lines.length; i++) {
        c.fillText(lines[i], x, y + 20 * i);
      }
    }

    const options = currentQuestion.options;
    const event = new EventListener();
    const jawaban = currentQuestion.answer;
    event.changeJawaban(
      options[0],
      options[1],
      options[2],
      options[3],
      jawaban
    );
    switch (this.count + 1) {
      case 1:
        picQ1.draw();
        break;
      case 2:
        picQ1.position.y = 250;
        picQ1.draw();
        break;
      case 3:
        picQ1.draw();
        break;
      case 4:
        picQ2.draw();
        break;
      case 5:
        picQ2.position.y = 250;
        picQ2.draw();
        break;
      case 4:
        break;
      case 5:
        picQ5.draw();
        break;
      case 6:
        break;
      case 7:
        break;
      case 8:
        break;
      case 9:
        picQ4.draw();
        break;
      case 10:
        picQ4.position.y = 250;
        picQ4.draw();

        break;
      case 11:
        picQ5.draw();
        break;
      case 12:
        picQ5.position.y = 250;
        picQ5.draw();

        break;
      case 13:
        picQ5.position.y = 250;
        picQ5.draw();

        break;
      case 14:
        break;
      case 15:
        break;
      case 36:
        picQ10.draw();

        break;
      case 37:
        picQ10.position.y = 250;
        picQ10.draw();

        break;
      case 38:
        picQ10.draw();

        break;
      case 39:
        picQ10.draw();

        break;
      case 40:
        picQ10.draw();

        break;
      case 41:
        picQ10.draw();

        break;
    }
    //q2
    const q2 = currentQuestion.question2;
    if (q2) {
      var lines = q2.split("\n");
      for (let i = 0; i < lines.length; i++) {
        c.fillText(lines[i], x, 560 + 20 * i);
      }
    }
  }
  nextQuestion() {
    
    bubbleChat.drawAnimate(false);
    this.count += 1;
    this.nextCount += 1;
  }
  nextDesc() {
    this.DescCount += 1;
    this.count = this.nextCount;
  }
}
