let hoeken;
let x, y;
function setup() {
  createCanvas(800, 800);
  background(0);
  stroke(255);
  hoeken = [
    createVector(400, 50),
    createVector(50, 750),
    createVector(750, 750)
  ];
  x = random(width);
  y = random(height);
}
function draw() {
  for (let i = 0; i < 20; i++) {
    let h = random(hoeken);
    x = (x + h.x) / 2;
    y = (y + h.y) / 2;
    point(x, y);
  }
}