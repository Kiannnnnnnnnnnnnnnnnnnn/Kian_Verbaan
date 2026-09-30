let teller = 0

let RedXPos = -760
let RedOffXPos = 100
let YellowXPos = -760
let YellowOffXPos = 100
let GreenXPos = 760
let GreenOffXPos = 100

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  text(teller, 20, 140);

  teller++;

  if (teller >= 500) {
    teller = 0;
  }

  if (keyIsDown(66)) {
  fill(255);
  rect(20, 20, 60, 60);

  fill(100, 100, 100);
  rect(750, 280, 20, 50);
  rect(740, 240, 40, 60);

  fill(255, 0, 0);
  circle(RedXPos, 250, 10);

  fill(210, 3, 3);
  circle(RedOffXPos, 250, 10);

  fill(255, 165, 0);
  circle(YellowXPos, 270, 10);

  fill(203, 177, 0);
  circle(YellowOffXPos, 270, 10);

  fill(0, 255, 0);
  circle(GreenXPos, 290, 10);

  fill(18, 174, 0);
  circle(GreenOffXPos, 290, 10);
}
}

function keyPressed() {
  if (keyCode === 32) {
    teller = 0;
  }

let keyPress = 1;

// traffic light
function keyPressed() {
  switch (keyCode) {
    case ENTER:
      keyPress += 1;

      if (keyPress >= 4) {
        keyPress = 1;
        GreenOffXPos = -760
        GreenXPos = 760
        RedOffXPos = 760
        YellowOffXPos = 760
        RedXPos = -760
        YellowXPos = -760
      }

      else if (keyPress == 1) {
        car1Speed = 0.2;
        car2Speed = 0.4;
        GreenOffXPos = -760
        GreenXPos = 760
        RedOffXPos = 760
        RedXPos = -760
        YellowOffXPos = 760
        YellowXPos = -760

      }
      else if (keyPress == 2) {
        car1Speed = 0.1;
        car2Speed = 0.2;
        YellowOffXPos = -760
        YellowXPos = 760
        RedOffXPos = 760
        RedXPos = -760
        GreenOffXPos = 760
        GreenXPos = -760
      }
      else if (keyPress == 3) {
        car1Speed = 0;
        car2Speed = 0;
        RedOffXPos = -760
        RedXPos = 760
        GreenXPos = -760
        YellowXPos = -760
        GreenOffXPos = 760
        YellowOffXPos = 760
      }

  }
}

}

