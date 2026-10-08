let startButton;
let button1;
let button2;
let button3;
let button4;

let i = 0;

let questions = ["Kians Super Duper Scooter Epische Ultra Power Coole Mega Quiz!!!", "Welke armor wordt aangeraden voor wall of flesh?", "Hoe heette het project dat gaande was op ash-twin en ember-twin?", "Is het Mythrix of Mithrix?", "mijn favo celeste tech?", "favo Camellia song?", "Welke song is het snelst?", "Welke kleur is driehoek?", "Hoeveel is mijn anime figure collectie ongeveer waard?", "Hoe heet mijn steen?", "Favo artiest"];
let answer1 = ["Wooden armor", "Ash-Twin Project", "Mythrix", "Reverse Hyper", "Magical, Very Magical World", "Windows 10000", "Rood", "1000 euro", "Henk", "Kobaryo"];
let answer2 = ["Hallowed armor", "Black Hole Project", "Mithrix", "Cassoosted Fuper", "Tentaclar Aliens’ Epic Extraterretterrestrial Jungle Dance Party Inside Of A Super-Ultra-Mega-Gigantic U.F.O. (It Maybe U.U.F.O.) Silently Flying Over Illinois St.", "RTX 20000", "Geel", "2000 euro", "Herman", "Camellia"];
let answer3 = ["Molten armor", "Time Reversal Project", " ", "Bunnyhop", "ΩΩPARTS", "HAL 30000", "Groen", "500 euro", "Pieter Post", "USAO"];
let answer4 = ["Solar armor", "Ember-Twin Project", " ", "Demo dash", "The Cat Evolved Into The Microwave-Proof cat!", " ", "Blauw", "3000 euro", "Jan", "T+Pazolite"];

function setup() {
  createCanvas(1050, 600);
  startButton = createButton('Start!');
  startButton.position(475, 275);
  startButton.size(100, 50);
  startButton.mousePressed(nextQuestion);

  button1 = createButton("");
  button1.position(100, 500);
  button1.size(100, 50);
  button1.mousePressed(nextQuestion);

  button2 = createButton("");
  button2.position(300, 500);
  button2.size(100, 50);
  button2.mousePressed(nextQuestion);

  button3 = createButton("");
  button3.position(500, 500);
  button3.size(100, 50);
  button3.mousePressed(nextQuestion);

  button4 = createButton("");
  button4.position(700, 500);
  button4.size(100, 50);
  button4.mousePressed(nextQuestion);

  button1.hide();
  button2.hide();
  button3.hide();
  button4.hide();
}

function nextQuestion() {
  startButton.hide();
  i++;

  button1.show();
  button2.show();
  button3.show();
  button4.show();

  button1.html(answer1[i - 1]);
  button2.html(answer2[i - 1]);
  button3.html(answer3[i - 1]);
  button4.html(answer4[i - 1]);
}

let img;

function preload() {
  img = loadImage("assets/background.png");
}

function draw() {
  background(220);
  textSize(32);
  image(img, 0, 0);
  fill(255);
  stroke(0);
  text(questions[i], 50, 50);
}
