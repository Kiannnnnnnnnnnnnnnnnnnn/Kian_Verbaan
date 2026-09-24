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
let win = 0
let squaresClicked = 0

let backGroundLineRedX = 500

let backGroundColorRed = "darkred"
let backGroundColorBlue = "darkblue"



function setup() {
  createCanvas(1000, 1000);

}


function draw() {
  background(220);

  strokeWeight(0);

if (playerTurn == 1) {
  fill(150, 0, 0)
} else {
  fill(0, 0, 150)
}
rect(0, 0, 1000, 1000);

if (playerTurn == 1) {
  fill(100, 0, 0);
  if (win == 0 && squaresClicked != 9) {
    backGroundLineRedX -= 0.1 * deltaTime;
  }

} else {
  fill(0, 0, 100);
  if (win == 0 && squaresClicked != 9) {
    backGroundLineRedX += 0.1 * deltaTime;
  }
}

if (backGroundLineRedX >= 990) {
 backGroundLineRedX = 990
} else if (backGroundLineRedX <= 0) {
 backGroundLineRedX = 0
}

rect(backGroundLineRedX, 0, 10, 1000);

if (squaresClicked == 9 && backGroundLineRedX > 500) {
    textSize(50)
    text("Red wins!", 100, 100);
  } else if (squaresClicked == 9 && backGroundLineRedX < 500) {
    textSize(50)
    text("Blue wins!", 100, 100);
  }

if (square1 == 0) {
  if (
    mouseX > rectRow1 && mouseX < rectRow1 + rectW && 
    mouseY > rectCol1 && mouseY < rectCol1 + rectH && 
    win == 0
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
    mouseY > rectCol1 && mouseY < rectCol1 + rectH && 
    win == 0
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
    mouseY > rectCol1 && mouseY < rectCol1 + rectH && 
    win == 0
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
    mouseY > rectCol2 && mouseY < rectCol2 + rectH && 
    win == 0
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
    mouseY > rectCol2 && mouseY < rectCol2 + rectH && 
    win == 0
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
    mouseY > rectCol2 && mouseY < rectCol2 + rectH && 
    win == 0
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
    mouseY > rectCol3 && mouseY < rectCol3 + rectH && 
    win == 0
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
    mouseY > rectCol3 && mouseY < rectCol3 + rectH && 
    win == 0
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
    mouseY > rectCol3 && mouseY < rectCol3 + rectH && 
    win == 0
  ) {
    square9color = "grey";
  } else {
    square9color = "darkgrey";
  }
}
fill(square9color);
rect(rectRow3, rectCol3, rectW, rectH);

if (square1 == 1 && square2 == 1 && square3 == 1) {
textSize(50);
text("Red wins!", 100, 100);
win = 1
} else if (square4 == 1 && square5 == 1 && square6 == 1) {
textSize(50);
text("Red wins!", 100, 100);
win = 1
} else if (square7 == 1 && square8 == 1 && square9 == 1) {
textSize(50);
text("Red wins!", 100, 100);
win = 1
} else if (square1 == 1 && square4 == 1 && square7 == 1) {
textSize(50);
text("Red wins!", 100, 100);
win = 1
} else if (square2 == 1 && square5 == 1 && square8 == 1) {
textSize(50);
text("Red wins!", 100, 100);
win = 1
} else if (square3 == 1 && square6 == 1 && square9 == 1) {
textSize(50);
text("Red wins!", 100, 100);
win = 1
} else if (square1 == 1 && square5 == 1 && square9 == 1) {
textSize(50);
text("Red wins!", 100, 100);
win = 1
} else if (square3 == 1 && square5 == 1 && square7 == 1) {
textSize(50);
text("Red wins!", 100, 100);
win = 1
} else if (square1 == 2 && square2 == 2 && square3 == 2) {
textSize(50);
text("Blue wins!", 100, 100);
win = 1
} else if (square4 == 2 && square5 == 2 && square6 == 2) {
textSize(50);
text("Blue wins!", 100, 100);
win = 1
} else if (square7 == 2 && square8 == 2 && square9 == 2) {
textSize(50);
text("Blue wins!", 100, 100);
win = 1
} else if (square1 == 2 && square4 == 2 && square7 == 2) {
textSize(50);
text("Blue wins!", 100, 100);
win = 1
} else if (square2 == 2 && square5 == 2 && square8 == 2) {
textSize(50);
text("Blue wins!", 100, 100);
win = 1
} else if (square3 == 2 && square6 == 2 && square9 == 2) {
textSize(50);
text("Blue wins!", 100, 100);
win = 1
} else if (square1 == 2 && square5 == 2 && square9 == 2) {
textSize(50);
text("Blue wins!", 100, 100);
win = 1
} else if (square3 == 2 && square5 == 2 && square7 == 2) {
textSize(50);
text("Blue wins!", 100, 100);
win = 1
}

}


function mousePressed(){
if (playerTurn == 1) {
  if (
    mouseX > rectRow1 && mouseX < rectRow1 + rectW && 
    mouseY > rectCol1 && mouseY < rectCol1 + rectH && 
    square1 == 0 && win == 0
  ) {
    square1 = 1
    playerTurn = 2
    square1color = "red"
    squaresClicked += 1
  } else if (
    mouseX > rectRow2 && mouseX < rectRow2 + rectW && 
    mouseY > rectCol1 && mouseY < rectCol1 + rectH && 
    square2 == 0 && win == 0
  ) {
    square2 = 1
    playerTurn = 2
    square2color = "red" 
    squaresClicked += 1
  } else if (
    mouseX > rectRow3 && mouseX < rectRow3 + rectW && 
    mouseY > rectCol1 && mouseY < rectCol1 + rectH && 
    square3 == 0 && win == 0
  ) {
    square3 = 1
    playerTurn = 2
    square3color = "red" 
    squaresClicked += 1
  } else if (
    mouseX > rectRow1 && mouseX < rectRow1 + rectW && 
    mouseY > rectCol2 && mouseY < rectCol2 + rectH && 
    square4 == 0 && win == 0
  ) {
    square4 = 1
    playerTurn = 2
    square4color = "red"
    squaresClicked += 1
  } else if (
    mouseX > rectRow2 && mouseX < rectRow2 + rectW && 
    mouseY > rectCol2 && mouseY < rectCol2 + rectH && 
    square5 == 0 && win == 0
  ) {
    square5 = 1
    playerTurn = 2
    square5color = "red"
    squaresClicked += 1
  } else if (
    mouseX > rectRow3 && mouseX < rectRow3 + rectW && 
    mouseY > rectCol2 && mouseY < rectCol2 + rectH && 
    square6 == 0 && win == 0
  ) {
    square6 = 1
    playerTurn = 2
    square6color = "red"
    squaresClicked += 1
  } else if (
    mouseX > rectRow1 && mouseX < rectRow1 + rectW && 
    mouseY > rectCol3 && mouseY < rectCol3 + rectH && 
    square7 == 0 && win == 0
  ) {
    square7 = 1
    playerTurn = 2
    square7color = "red"
    squaresClicked += 1
  } else if (
    mouseX > rectRow2 && mouseX < rectRow2 + rectW && 
    mouseY > rectCol3 && mouseY < rectCol3 + rectH && 
    square8 == 0 && win == 0
  ) {
    square8 = 1
    playerTurn = 2
    square8color = "red"
    squaresClicked += 1
  } else if (
    mouseX > rectRow3 && mouseX < rectRow3 + rectW && 
    mouseY > rectCol3 && mouseY < rectCol3 + rectH && 
    square9 == 0 && win == 0
  ) {
    square9 = 1
    playerTurn = 2
    square9color = "red"
    squaresClicked += 1
  }
} else {
  if (
    mouseX > rectRow1 && mouseX < rectRow1 + rectW && 
    mouseY > rectCol1 && mouseY < rectCol1 + rectH && 
    square1 == 0 && win == 0
  ) {
    square1 = 2
    playerTurn = 1
    square1color = "blue" 
    squaresClicked += 1
  } else if (
    mouseX > rectRow2 && mouseX < rectRow2 + rectW && 
    mouseY > rectCol1 && mouseY < rectCol1 + rectH && 
    square2 == 0 && win == 0
  ) {
    square2 = 2
    playerTurn = 1
    square2color = "blue" 
    squaresClicked += 1
  } else if (
    mouseX > rectRow3 && mouseX < rectRow3 + rectW && 
    mouseY > rectCol1 && mouseY < rectCol1 + rectH && 
    square3 == 0 && win == 0
  ) {
    square3 = 2
    playerTurn = 1
    square3color = "blue" 
    squaresClicked += 1
  } else if (
    mouseX > rectRow1 && mouseX < rectRow1 + rectW && 
    mouseY > rectCol2 && mouseY < rectCol2 + rectH && 
    square4 == 0 && win == 0
  ) {
    square4 = 2
    playerTurn = 1
    square4color = "blue"
    squaresClicked += 1
  } else if (
    mouseX > rectRow2 && mouseX < rectRow2 + rectW && 
    mouseY > rectCol2 && mouseY < rectCol2 + rectH && 
    square5 == 0 && win == 0
  ) {
    square5 = 2
    playerTurn = 1
    square5color = "blue"
    squaresClicked += 1
  } else if (
    mouseX > rectRow3 && mouseX < rectRow3 + rectW && 
    mouseY > rectCol2 && mouseY < rectCol2 + rectH && 
    square6 == 0 && win == 0
  ) {
    square6 = 2
    playerTurn = 1
    square6color = "blue"
    squaresClicked += 1
  } else if (
    mouseX > rectRow1 && mouseX < rectRow1 + rectW && 
    mouseY > rectCol3 && mouseY < rectCol3 + rectH && 
    square7 == 0 && win == 0
  ) {
    square7 = 2
    playerTurn = 1
    square7color = "blue"
    squaresClicked += 1
  } else if (
    mouseX > rectRow2 && mouseX < rectRow2 + rectW && 
    mouseY > rectCol3 && mouseY < rectCol3 + rectH && 
    square8 == 0 && win == 0
  ) {
    square8 = 2
    playerTurn = 1
    square8color = "blue"
    squaresClicked += 1
  } else if (
    mouseX > rectRow3 && mouseX < rectRow3 + rectW && 
    mouseY > rectCol3 && mouseY < rectCol3 + rectH && 
    square9 == 0 && win == 0
  ) {
    square9 = 2
    playerTurn = 1
    square9color = "blue"
    squaresClicked += 1
  }
}
}
