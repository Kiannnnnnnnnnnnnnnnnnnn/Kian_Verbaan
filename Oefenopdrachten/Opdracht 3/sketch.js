function setup() {
  createCanvas(400, 200);
}



function draw() {
  background(220);
let score = random(0, 100);
noLoop();
  fill(100, 100, 100);
  textSize(20);

  if (score >= 90) {
  text("Uitstekend", 200, 100);
  } else if (score > 70 && score < 89) {
  text("goed gedaan", 200, 100);
  } else if (score > 50 && score < 69) {
  text("voldoende", 200, 100);
  } else {
  text("onvoldoende", 200, 100);
  }
}
