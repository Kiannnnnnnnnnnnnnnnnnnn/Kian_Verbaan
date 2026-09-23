let rectCol1 = 200
let rectCol2 = 410
let rectCol3 = 620

let rectRow1 = 200
let rectRow2 = 410
let rectRow3 = 620

let rectH = 180
let rectW = 180

let square1 = 0
let square2 = 0
let square3 = 0
let square4 = 0
let square5 = 0
let square6 = 0
let square7 = 0
let square8 = 0
let square9 = 0

let square1color = "darkgrey"
let square2color = "darkgrey"
let square3color = "darkgrey"
let square4color = "darkgrey"
let square5color = "darkgrey"
let square6color = "darkgrey"
let square7color = "darkgrey"
let square8color = "darkgrey"
let square9color = "darkgrey"

let playerTurn = 1

let backGroundLineRedX1 = -50
let backGroundLineRedX2 = -150
let backGroundLineRedX3 = 20
let backGroundLineRedX4 = 240



function setup() {
  createCanvas(1000, 1000);

}


function draw() {
  background(220);

  strokeWeight(0);

if (playerTurn == 1) {
  fill(150, 0, 0);
  rect(0, 0, 1000, 1000);

  fill(100, 0, 0);
  backGroundLineRedX1 += 0.03 * deltaTime;
  backGroundLineRedX2 += 0.01 * deltaTime;
  backGroundLineRedX3 += 0.02 * deltaTime;
  backGroundLineRedX4 += 0.04 * deltaTime;
  rect(backGroundLineRedX1, 57, 200, 20);
  rect(backGroundLineRedX2, 98, 150, 40);
  rect(backGroundLineRedX3, 183, 270, 50);
  rect(backGroundLineRedX4, 316, 100, 10);
  rect(backGroundLineRedX2, 354, 240, 30);
  rect(backGroundLineRedX1, 399, 240, 10);
  rect(backGroundLineRedX4, 429, 300, 60);
  rect(backGroundLineRedX2, 509, 300, 40);
  rect(backGroundLineRedX3, 584, 220, 20);
  rect(backGroundLineRedX4, 657, 220, 50);
  rect(backGroundLineRedX1, 723, 220, 40);
  rect(backGroundLineRedX4, 781, 220, 10);
  rect(backGroundLineRedX2, 831, 220, 30);
  rect(backGroundLineRedX1, 878, 220, 20);
  rect(backGroundLineRedX3, 921, 220, 10);
  rect(backGroundLineRedX1, 949, 220, 40);

  if (backGroundLineRedX1 == 1300) {
    backGroundLineRedX1 = -300
  }

} else {
  fill(0, 0, 150);
  rect(0, 0, 1000, 1000);
}

if (square1 == 0) {
  if (
    mouseX > rectRow1 && mouseX < rectRow1 + rectW && 
    mouseY > rectCol1 && mouseY < rectCol1 + rectH
  ) {
    square1color = "grey";
  } else {
    square1color = "darkgrey";
  }
}
fill(square1color);
rect(rectRow1, rectCol1, rectW, rectH);

if (square2 == 0) {
  if (
    mouseX > rectRow2 && mouseX < rectRow2 + rectW && 
    mouseY > rectCol1 && mouseY < rectCol1 + rectH
  ) {
    square2color = "grey";
  } else {
    square2color = "darkgrey";
  }
}
fill(square2color);
rect(rectRow2, rectCol1, rectW, rectH);

if (square3 == 0) {
  if (
    mouseX > rectRow3 && mouseX < rectRow3 + rectW && 
    mouseY > rectCol1 && mouseY < rectCol1 + rectH
  ) {
    square3color = "grey";
  } else {
    square3color = "darkgrey";
  }
}
fill(square3color);
rect(rectRow3, rectCol1, rectW, rectH);

if (square4 == 0) {
  if (
    mouseX > rectRow1 && mouseX < rectRow1 + rectW && 
    mouseY > rectCol2 && mouseY < rectCol2 + rectH
  ) {
    square4color = "grey";
  } else {
    square4color = "darkgrey";
  }
}
fill(square4color);
rect(rectRow1, rectCol2, rectW, rectH);

if (square5 == 0) {
  if (
    mouseX > rectRow2 && mouseX < rectRow2 + rectW && 
    mouseY > rectCol2 && mouseY < rectCol2 + rectH
  ) {
    square5color = "grey";
  } else {
    square5color = "darkgrey";
  }
}
fill(square5color);
rect(rectRow2, rectCol2, rectW, rectH);

if (square6 == 0) {
  if (
    mouseX > rectRow3 && mouseX < rectRow3 + rectW && 
    mouseY > rectCol2 && mouseY < rectCol2 + rectH
  ) {
    square6color = "grey";
  } else {
    square6color = "darkgrey";
  }
}
fill(square6color);
rect(rectRow3, rectCol2, rectW, rectH);

if (square7 == 0) {
  if (
    mouseX > rectRow1 && mouseX < rectRow1 + rectW && 
    mouseY > rectCol3 && mouseY < rectCol3 + rectH
  ) {
    square7color = "grey";
  } else {
    square7color = "darkgrey";
  }
}
fill(square7color);
rect(rectRow1, rectCol3, rectW, rectH);

if (square8 == 0) {
  if (
    mouseX > rectRow2 && mouseX < rectRow2 + rectW && 
    mouseY > rectCol3 && mouseY < rectCol3 + rectH
  ) {
    square8color = "grey";
  } else {
    square8color = "darkgrey";
  }
}
fill(square8color);
rect(rectRow2, rectCol3, rectW, rectH);

if (square9 == 0) {
  if (
    mouseX > rectRow3 && mouseX < rectRow3 + rectW && 
    mouseY > rectCol3 && mouseY < rectCol3 + rectH
  ) {
    square9color = "grey";
  } else {
    square9color = "darkgrey";
  }
}
fill(square9color);
rect(rectRow3, rectCol3, rectW, rectH);
}


function mousePressed(){
if (playerTurn == 1) {
  if (
    mouseX > rectRow1 && mouseX < rectRow1 + rectW && 
    mouseY > rectCol1 && mouseY < rectCol1 + rectH && 
    square1 == 0
  ) {
    square1 = 1
    playerTurn = 2
    square1color = "red" 
  } else if (
    mouseX > rectRow2 && mouseX < rectRow2 + rectW && 
    mouseY > rectCol1 && mouseY < rectCol1 + rectH && 
    square2 == 0
  ) {
    square2 = 1
    playerTurn = 2
    square2color = "red" 
  } else if (
    mouseX > rectRow3 && mouseX < rectRow3 + rectW && 
    mouseY > rectCol1 && mouseY < rectCol1 + rectH && 
    square3 == 0
  ) {
    square3 = 1
    playerTurn = 2
    square3color = "red" 
  } else if (
    mouseX > rectRow1 && mouseX < rectRow1 + rectW && 
    mouseY > rectCol2 && mouseY < rectCol2 + rectH && 
    square4 == 0
  ) {
    square4 = 1
    playerTurn = 2
    square4color = "red"
  } else if (
    mouseX > rectRow2 && mouseX < rectRow2 + rectW && 
    mouseY > rectCol2 && mouseY < rectCol2 + rectH && 
    square5 == 0
  ) {
    square5 = 1
    playerTurn = 2
    square5color = "red"
  } else if (
    mouseX > rectRow3 && mouseX < rectRow3 + rectW && 
    mouseY > rectCol2 && mouseY < rectCol2 + rectH && 
    square6 == 0
  ) {
    square6 = 1
    playerTurn = 2
    square6color = "red"
  } else if (
    mouseX > rectRow1 && mouseX < rectRow1 + rectW && 
    mouseY > rectCol3 && mouseY < rectCol3 + rectH && 
    square7 == 0
  ) {
    square7 = 1
    playerTurn = 2
    square7color = "red"
  } else if (
    mouseX > rectRow2 && mouseX < rectRow2 + rectW && 
    mouseY > rectCol3 && mouseY < rectCol3 + rectH && 
    square8 == 0
  ) {
    square8 = 1
    playerTurn = 2
    square8color = "red"
  } else if (
    mouseX > rectRow3 && mouseX < rectRow3 + rectW && 
    mouseY > rectCol3 && mouseY < rectCol3 + rectH && 
    square9 == 0
  ) {
    square9 = 1
    playerTurn = 2
    square9color = "red"
  }
} else {
  if (
    mouseX > rectRow1 && mouseX < rectRow1 + rectW && 
    mouseY > rectCol1 && mouseY < rectCol1 + rectH && 
    square1 == 0
  ) {
    square1 = 2
    playerTurn = 1
    square1color = "blue" 
  } else if (
    mouseX > rectRow2 && mouseX < rectRow2 + rectW && 
    mouseY > rectCol1 && mouseY < rectCol1 + rectH && 
    square2 == 0
  ) {
    square2 = 2
    playerTurn = 1
    square2color = "blue" 
  } else if (
    mouseX > rectRow3 && mouseX < rectRow3 + rectW && 
    mouseY > rectCol1 && mouseY < rectCol1 + rectH && 
    square3 == 0
  ) {
    square3 = 2
    playerTurn = 1
    square3color = "blue" 
  } else if (
    mouseX > rectRow1 && mouseX < rectRow1 + rectW && 
    mouseY > rectCol2 && mouseY < rectCol2 + rectH && 
    square4 == 0
  ) {
    square4 = 2
    playerTurn = 1
    square4color = "blue"
  } else if (
    mouseX > rectRow2 && mouseX < rectRow2 + rectW && 
    mouseY > rectCol2 && mouseY < rectCol2 + rectH && 
    square5 == 0
  ) {
    square5 = 2
    playerTurn = 1
    square5color = "blue"
  } else if (
    mouseX > rectRow3 && mouseX < rectRow3 + rectW && 
    mouseY > rectCol2 && mouseY < rectCol2 + rectH && 
    square6 == 0
  ) {
    square6 = 2
    playerTurn = 1
    square6color = "blue"
  } else if (
    mouseX > rectRow1 && mouseX < rectRow1 + rectW && 
    mouseY > rectCol3 && mouseY < rectCol3 + rectH && 
    square7 == 0
  ) {
    square7 = 2
    playerTurn = 1
    square7color = "blue"
  } else if (
    mouseX > rectRow2 && mouseX < rectRow2 + rectW && 
    mouseY > rectCol3 && mouseY < rectCol3 + rectH && 
    square8 == 0
  ) {
    square8 = 2
    playerTurn = 1
    square8color = "blue"
  } else if (
    mouseX > rectRow3 && mouseX < rectRow3 + rectW && 
    mouseY > rectCol3 && mouseY < rectCol3 + rectH && 
    square9 == 0
  ) {
    square9 = 2
    playerTurn = 1
    square9color = "blue"
  }
}
}
