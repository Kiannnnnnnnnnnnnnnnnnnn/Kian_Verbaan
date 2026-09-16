let x = 100
let y = 80
let greeting = "Hello World!"
let a = 20
let b = 10
let optellen = a + b
let aftrekken = a - b
let vermenigvuldigen = a * b
let delen = a / b

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  text(x, 20, 20);
  text(greeting, 20, 60);

  text("Optellen = " + optellen, 20, y);
  noLoop(y = y+ 20);
  text("Aftrekken = " + aftrekken, 20, y);
  noLoop(y = y + 20);
  text("Vermenigvuldigen = " + vermenigvuldigen, 20, y);
  noLoop(y = y + 20);
  text("Delen = " + delen, 20, y);
}