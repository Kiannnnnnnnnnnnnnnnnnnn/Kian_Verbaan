function setup() {
  createCanvas(200, 400);
}

function draw() {
  background(100);
  // left side
  fill(255, 0, 0);
  rect(0, 0, 120, 50);
  fill(255, 255, 255);
  rect(0, 50, 120, 300);
  fill(255, 255, 0);
  rect(0, 350, 50, 50);
  fill(255, 255, 255);
  rect(50, 350, 70, 50);


  // right side
  rect(120, 0, 80, 50);
  fill(200, 200, 200);
  rect(120, 50, 80, 280);
  fill(0, 0, 255);
  rect(120, 330, 80, 70);

  strokeWeight(4);
  line(0, 50, 200, 50);
}
