function setup() {
  createCanvas(800, 600);
}

let Car1 = {
  rectX: 100,
  rectY: 300,
  rectWidth: 100,
  rectHeight: 50
};

let Car1Wheels = {
  WheelsX: 110,
  WheelsY: 350,
  WheelsDia: 30,
}

let Car2Wheels = {
  WheelsX: 190,
  WheelsY: 350,
  WheelsDia: 30,
}

let Car2 = {
  rectX: 100,
  rectY: 500,
  rectWidth: 100,
  rectHeight: 50
}

let sunX = -50
let car1X = -50
let car1Speed = 0.2
let car2X = -50
let car2Speed = 0.4

let RedXPos = -760
let RedOffXPos = 760
let YellowXPos = -760
let YellowOffXPos = 760
let GreenXPos = 760
let GreenOffXPos = -760

function draw() {
  background(173, 146, 230);

  strokeWeight(0);

// sun

  fill(239, 142, 56);

  sunX += 0.03 * deltaTime;
  circle(sunX, 30, 20);

  if (sunX >= 900) {
  sunX = -50
  }
// mountains

  fill(100, 100, 100);
  triangle(-50, 250, 75, 110, 200, 250);
  triangle(110, 200, 160, 100, 210, 200);
  triangle(170, 200, 280, 90, 390, 200);
  triangle(320, 200, 390, 75, 460, 200);
  triangle(320, 250, 530, 120, 720, 250);
  triangle(550, 280, 650, 140, 750, 280);
  triangle(650, 280, 750, 105, 850, 280);

// hills

  fill(0, 100, 0);
  ellipse(320, 280, 800, 200);

  fill(0, 110, 0);
  ellipse(520, 320, 800, 200);

  fill(0, 120, 0);
  ellipse(140, 350, 600, 200);
  fill(0, 130, 0);
  rect(0, 320, 800, 350);

// road

  fill(130, 130, 130);
  rect(0, 350, 800, 300);

  fill(100, 100, 100);
  rect(0, 350, 800, 20);

  fill(200, 200, 200);
  rect(50, 455, 100, 20);
  rect(200, 455, 100, 20);
  rect(350, 455, 100, 20);
  rect(500, 455, 100, 20);
  rect(650, 455, 100, 20);

// tree trunks

  fill(101, 67, 33);
  rect(80, 250, 10, 50);
  rect(150, 220, 10, 50);
  rect(280, 250, 10, 50);

  rect(400, 230, 5, 25);
  rect(460, 240, 5, 25);
  rect(520, 280, 5, 25);
  rect(630, 230, 5, 25);
  rect(700, 270, 5, 25);

  rect(500, 200, 2, 10);
  rect(380, 200, 2, 10);
  rect(300, 190, 2, 10);
  rect(250, 220, 2, 10);
  rect(220, 200, 2, 10);
  rect(120, 220, 2, 10);

// traffic light

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

// car 1
  fill(50, 50, 50);
  car1X += car1Speed * deltaTime;
  if (car1X >= 900) {
    car1X = -150;
  }
  rect(car1X, 500, 100, 30);
  rect(car1X, 500, 100, 30);

  car2X += car2Speed * deltaTime;
  if (car2X >= 900) {
    car2X = -150;
  }
  rect(car2X, 400, 100, 30);

}

let keyPress = 1;

// traffic light
function keyPressed() {
  switch (keyCode) {
    case ENTER:
      keyPress += 1;

      if (keyPress >= 4) {
        keyPress = 1;
        car1Speed = 0.2;
        car2Speed = 0.4;
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
