function setup() {
  createCanvas(800, 600);
  randomLines();
}

let posX1_1 = [];
let posX2_1 = [];
let posY1_1 = [];
let posY2_1 = [];

let posX1_2 = [];
let posX2_2 = [];
let posY1_2 = [];
let posY2_2 = [];

let posX1_3 = [];
let posX2_3 = [];
let posY1_3 = [];
let posY2_3 = [];

let posX1_4 = [];
let posX2_4 = [];
let posY1_4 = [];
let posY2_4 = [];

let posX1_5 = [];
let posX2_5 = [];
let posY1_5 = [];
let posY2_5 = [];

let posX1_6 = [];
let posX2_6 = [];
let posY1_6 = [];
let posY2_6 = [];

let posX1_7 = [];
let posX2_7 = [];
let posY1_7 = [];
let posY2_7 = [];

let posX1_8 = [];
let posX2_8 = [];
let posY1_8 = [];
let posY2_8 = [];

let posX1_9 = [];
let posX2_9 = [];
let posY1_9 = [];
let posY2_9 = [];

let posX1_10 = [];
let posX2_10 = [];
let posY1_10 = [];
let posY2_10 = [];

function randomLines() {
   posX1_1 = [];
   posX2_1 = [];
   posY1_1 = [];
   posY2_1 = [];

   posX1_2 = [];
   posX2_2 = [];
   posY1_2 = [];
   posY2_2 = [];

   posX1_3 = [];
   posX2_3 = [];
   posY1_3 = [];
   posY2_3 = [];

   posX1_4 = [];
   posX2_4 = [];
   posY1_4 = [];
   posY2_4 = [];

   posX1_5 = [];
   posX2_5 = [];
   posY1_5 = [];
   posY2_5 = [];

   posX1_6 = [];
   posX2_6 = [];
   posY1_6 = [];
   posY2_6 = [];

   posX1_7 = [];
   posX2_7 = [];
   posY1_7 = [];
   posY2_7 = [];

   posX1_8 = [];
   posX2_8 = [];
   posY1_8 = [];
   posY2_8 = [];

   posX1_9 = [];
   posX2_9 = [];
   posY1_9 = [];
   posY2_9 = [];

   posX1_10 = [];
   posX2_10 = [];
   posY1_10 = [];
   posY2_10 = [];

  for (let i = 0; i < 10000; i++) {
    posX1_1.push(int(random(-10, 850)))
    posX2_1.push(int(random(-10, 850)))
    posY1_1.push(int(random(-10, 650)))
    posY2_1.push(int(random(-10, 650)))

    posX1_2.push(int(random(-10, 850)))
    posX2_2.push(int(random(-10, 850)))
    posY1_2.push(int(random(-10, 650)))
    posY2_2.push(int(random(-10, 650)))

    posX1_3.push(int(random(-10, 850)))
    posX2_3.push(int(random(-10, 850)))
    posY1_3.push(int(random(-10, 650)))
    posY2_3.push(int(random(-10, 650)))

    posX1_4.push(int(random(-10, 850)))
    posX2_4.push(int(random(-10, 850)))
    posY1_4.push(int(random(-10, 650)))
    posY2_4.push(int(random(-10, 650)))

    posX1_5.push(int(random(-10, 850)))
    posX2_5.push(int(random(-10, 850)))
    posY1_5.push(int(random(-10, 650)))
    posY2_5.push(int(random(-10, 650)))

    posX1_6.push(int(random(-10, 850)))
    posX2_6.push(int(random(-10, 850)))
    posY1_6.push(int(random(-10, 650)))
    posY2_6.push(int(random(-10, 650)))

    posX1_7.push(int(random(-10, 850)))
    posX2_7.push(int(random(-10, 850)))
    posY1_7.push(int(random(-10, 650)))
    posY2_7.push(int(random(-10, 650)))

    posX1_8.push(int(random(-10, 850)))
    posX2_8.push(int(random(-10, 850)))
    posY1_8.push(int(random(-10, 650)))
    posY2_8.push(int(random(-10, 650)))

    posX1_9.push(int(random(-10, 850)))
    posX2_9.push(int(random(-10, 850)))
    posY1_9.push(int(random(-10, 650)))
    posY2_9.push(int(random(-10, 650)))

    posX1_10.push(int(random(-10, 850)))
    posX2_10.push(int(random(-10, 850)))
    posY1_10.push(int(random(-10, 650)))
    posY2_10.push(int(random(-10, 650)))
  }
}

function draw() {
  background(172, 109, 106);

  strokeWeight(0);
  fill(105, 42, 43);

let j = frameCount - 1;

  if (j < 10000) {
    strokeWeight(random(5));
    line(posX1_1[j], posX2_1[j], posY1_1[j], posY2_1[j]);
    strokeWeight(random(5));
    line(posX1_2[j], posX2_2[j], posY1_2[j], posY2_2[j]);
    strokeWeight(random(5));
    line(posX1_3[j], posX2_3[j], posY1_3[j], posY2_3[j]);
    strokeWeight(random(5));
    line(posX1_4[j], posX2_4[j], posY1_4[j], posY2_4[j]);
    strokeWeight(random(5));
    line(posX1_5[j], posX2_5[j], posY1_5[j], posY2_5[j]);
    strokeWeight(random(5));
    line(posX1_6[j], posX2_6[j], posY1_6[j], posY2_6[j]);
    strokeWeight(random(5));
    line(posX1_7[j], posX2_7[j], posY1_7[j], posY2_7[j]);
    strokeWeight(random(5));
    line(posX1_8[j], posX2_8[j], posY1_8[j], posY2_8[j]);
    strokeWeight(random(5));
    line(posX1_9[j], posX2_9[j], posY1_9[j], posY2_9[j]);
    strokeWeight(random(5));
    line(posX1_10[j], posX2_10[j], posY1_10[j], posY2_10[j]);
  }
}

