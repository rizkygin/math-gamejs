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
      y: 420,
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
      y: 380,
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
    this.count = 14;
    this.jsonQuestion = {
      questions: [
        {
          question:
            "Kakak dan adik bermain puzzle bersama-sama dan membuat sebuah bangun seseperti pada gambar\ndibawah ini!",
          picture: "q1",
          question2:
            "Bangun datar apa saja yang kakak dan adik gunakan dalam membentuk bangunan tersebut? (C2)",
          options: [
            "Segitiga , persegi , Jajar Genjang, Trapesium",
            "Persegi, Jajar Genjang, Persegi Panjang, Lingkaran",
            "Belah Ketupat, Persegi Panjang, Lingkaran, Jajar Genjang",
            "Pesegi, Segitiga, Belah ketupat, Trapesium",
          ],
          answer: 0,
        },
        {
          question:
            "Indonesia memiliki beragam tradisi peringatan dalam menyambut hari raya Idul Fitri, salah satunya adalah dengan \nmembuat ketupat. Ketupat dapat dibentuk dengan beragam bentuk, contohnya di keluarga pak \nArpu yang setiap lebaran membuat ketupat dalam bentuk seperti pada gambar",
          picture: "q2",
          question2:
            "Dari gambar tersebut, ketupat yang dibuat oleh keluarga pak Arpu berbentuk bangun datar apa saja ? (C2)",
          options: [
            "Belah Ketupat, Segitita",
            "Belah Ketupat, Persegi",
            "Belah Ketupat, Lingkaran",
            "Lingkaran",
          ],
          answer: 0,
        },
        {
          question:
            "Memiliki empat sisi dan empat titik sudut, memiliki dua pasang sisi yang sama panjang, diagonalnya berpotongan \ntegak lurus, salah satu diagonalnya membagi diagonal yang lain sama panjang. \nCiri-ciri tersebut merupakan ciri-ciri dari bangun datar… (C2)",
          picture: null,
          question2: null,
          options: ["Persegi", "Lingkaran", "Persegi Panjang", "Belah Ketupat"],
          answer: 3,
        },
        {
          question:
            "Manakah dari bangun berikut yang merupakan bangun datarlayang-layang? (C2)",
          picture: "q4",
          question2: null,
          options: ["4 dan 3", "2 dan 9", "1 dan 4", "4 dan 9"],
          answer: 3,
        },
        {
          question:
            "Adek membuat kerajinan tangan berbentuk amplop seperti pada gambar. ",
          picture: "q5",
          question2:
            "Dari kerajinan yang dibuat oleh adek, bangun datar apa saja yang ada pada amplop tersebut? (C2)",
          options: [
            "Belah ketupat dan segitiga",
            "Lingkaran, dan segitiga",
            "Segitiga dan persegi panjang",
            "Persegi Panjang, dan Segitiga",
          ],
          answer: 2,
        },
        {
          question:
            "Pada hari minggu akan diadakan lomba sepak bola di desa. Lapangan yang digunakan untuk lomba memiliki keliling \nsebesar 34 m dengan panjang 9 m, tentukan lebar dari lapangan tersebut? (C4)",
          picture: null,
          question2: null,
          options: ["8m", "11m", "6m", "21m"],
          answer: 0,
        },
        {
          question:
            "Kakak bermain bersama dengan adik dan membuat bangunan rumah. Pada bagian atap, jika diketahui kelilingnya \nsebesar 81 cm, maka sisi pada atap tersebut adalah… (C4)",
          picture: null,
          question2: null,
          options: ["24cm", "27cm", "18cm", "81cm"],
          answer: 1,
        },
        {
          question:
            "Jika diketahui panjang pada sebuah belahketupat 12 cm, maka keliling belah ketupat adalah… (C3)",
          picture: null,
          question2: null,
          options: ["36cm", "124cm", "12cm", "48cm"],
          answer: 3,
        },
        {
          question:
            "Bu guru meminta Lana untuk menggambar sebuah bangun datar yang memiliki sisi sebesar 15 x 15 cm. \nJika dihitung kelilingnya, maka bangun tersebut memiliki keliling sebesar…(C4)",
          picture: null,
          question2: null,
          options: ["50cm", "60cm", "30cm", "75cm"],
          answer: 1,
        },
        {
          question: "",
          picture: "q10",
          question2:
            "Jika keliling dari bangun tersebut 70 cm, maka sisi BC dari bangun tersebut memiliki panjang… (C3)",
          options: ["21cm", "44cm", "23cm", "76cm"],
          answer: 3,
        },
        {
          question:
            "Penjahit Rumi memiliki pesanan untuk membuat bendera seperti pada gambar berikut! ",
          picture: "q11",
          question2:
            "Dilihat dari bangun tersebut, berapakah luas yang dimiliki bendera tersebut? (C4) ",
          options: ["150cm", "140cm", "200cm", "150cm"],
          answer: 0,
        },
        {
          question:
            "Siska berangkat sekolah bersama teman-temannya. Sebelum berangkat sekolah, ibu memberi siska uang saku. \nUang tersebut memiliki sisi 6 x 15 cm. \nJika dihitung luas uang tersebut, berapakah luas uang yang dimiliki oleh siska? (C5)",
          picture: null,
          question2: null,
          options: ["90cm", "80cm", "75cm", "100cm"],
          answer: 0,
        },
        {
          question:
            "Ifan membeli kertas kado yang memiliki sisi sebesar 12 cm. berapakah luas kertas kado milik ifan? (C4)",
          picture: null,
          question2: null,
          options: ["12cm", "90cm", "144cm", "100cm"],
          answer: 2,
        },
        {
          question:
            "Dika bersama teman-temannya akan membuat sebuah layangan. Layangan tersebut memiliki panjang 14 x 8 cm. \nhitunglah luas dari layang-layang yang dibuat oleh Dika dan teman-temannya! (C4)",
          picture: null,
          question2: null,
          options: ["102", "148", "144", "56"],
          answer: 3,
        },
        {
          question: "",
          picture: "q15",
          question2:
            "Jika diketahui luas pada bangun tersebut 84 cm, maka alas bangun tersebut adalah… (C5)",
          options: ["84cm", "14cm", "14cm", "66cm"],
          answer: 2,
        },
      ],
    };
  }
  drawQuestion() {
    c.fillStyle = "white";
    c.fillRect(0, canvas.height - 200, canvas.width, 200);

    // console.log(this.jsonQuestion.questions[this.count]);
    const currentQuestion = this.jsonQuestion.questions[this.count];
    const x = 10;
    const y = 400;

    const h = 20;
    c.fillStyle = "grey";
    c.font = "20px arial";

    //q1
    const q1 = currentQuestion.question;
    var lines = q1.split("\n");
    for (let i = 0; i < lines.length; i++) {
      c.fillText(lines[i], x, y + 20 * i);
    }

    //pic
    switch (this.count+1) {
      case 1:
        picQ1.draw();
        break;
      case 2:
        picQ2.draw();
        break;
      case 3:
        break;
      case 4:
        picQ4.draw();
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
        break;
      case 10:
        picQ10.draw();
        break;
      case 11:
        picQ11.draw();
        break;
      case 12:
        break;
      case 13:
        break;
      case 14:
        break;
      case 15:
        picQ15.draw();
        break;
    }
    //q2
    const q2 = currentQuestion.question2;
    var lines = q2.split("\n");
    for (let i = 0; i < lines.length; i++) {
      c.fillText(lines[i], x, 560  + 20 * i);
    }
    
  }
}
