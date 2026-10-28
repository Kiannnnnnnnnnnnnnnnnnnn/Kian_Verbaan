let statHunger = 100;
let statEnergy = 100;
let statHappiness = 100;
let statHealth = 100;

let coins = 0;
let onigiri = 0;
let sushi = 0;
let ramen = 0;

let barX = 51;
let bounce = 0;
let menuY = 380;
let seiaX = 400;
let chosenX = 400;
let seiaFacing = 1;

let imgBedroomDay;
let imgBedroomNight;
let imgShop;
let imgGarden;
let imgGardenNight;

let showBedroom = true;
let showBedroomNight = false;
let showShop = false;
let showGarden = false;
let showGardenNight = false;

let currentLocation = "bedroom";

let night = false;
let menuOpen = false;

let buttonBedroom;
let buttonShop;
let buttonGarden;
let buttonSleep;
let buttonWakeUp;

let buttonMinigame;
let buttonOnigiri;
let buttonSushi;
let buttonRamen;

let buttonFeed;
let buttonFeedOnigiri;
let buttonFeedSushi;
let buttonFeedRamen;

let imgSeiaNeutral;
let imgSeiaSleep;
let imgSeiaHungry;
let imgSeiaLowHealth;

let showSeiaNeutral = true;
let showSeiaSleep = false;
let showSeiaHungry = false;
let showSeiaLowHealth = false;



function preload() {
  imgSeiaNeutral = loadImage("sprites/Seia_neutral.png");
  imgSeiaSleep = loadImage("sprites/Seia_sleeping.png");
  imgSeiaHungry = loadImage("sprites/Seia_hungry.png");
  imgSeiaLowHealth = loadImage("sprites/Seia_lowhealth.png");
  imgBedroomDay = loadImage("sprites/Background_BedroomDay.jpg");
  imgBedroomNight = loadImage("sprites/Background_BedroomNight.jpg");
  imgShop = loadImage("sprites/Background_Shop.jpg");
  imgGarden = loadImage("sprites/Background_Garden.jpg");
  imgGardenNight = loadImage("sprites/Background_GardenNight.jpg");

  audioSeiaGreeting = loadSound("audio/SeiaGreeting1.mp3");
  audioSeiaGreeting2 = loadSound("audio/SeiaGreeting2.mp3");
}

function setup() {
  createCanvas(1000, 600);

  buttonBedroom = createButton("Bedroom");
  buttonBedroom.position(275, 558);
  buttonBedroom.size(150, 50);
  buttonBedroom.mousePressed(goToBedroom);

  buttonShop = createButton("Shop");
  buttonShop.position(425, 558);
  buttonShop.size(150, 50);
  buttonShop.mousePressed(goToShop);

  buttonGarden = createButton("Garden");
  buttonGarden.position(575, 558);
  buttonGarden.size(150, 50);
  buttonGarden.mousePressed(goToGarden);

  buttonMinigame = createButton("Press");
  buttonMinigame.position(62, 540);
  buttonMinigame.size(150, 50);
  buttonMinigame.mousePressed(press);
  buttonMinigame.hide();

  buttonWakeUp = createButton("Wake up");
  buttonWakeUp.position(8, 558);
  buttonWakeUp.size(150, 50);
  buttonWakeUp.mousePressed(wakeUp);

  buttonSleep = createButton("Go to sleep");
  buttonSleep.position(8, 558);
  buttonSleep.size(150, 50);
  buttonSleep.mousePressed(sleep);

  buttonOnigiri = createButton("2 coins");
  buttonOnigiri.position(250, 450);
  buttonOnigiri.size(100, 30);
  buttonOnigiri.mousePressed(Onigiri);
  buttonOnigiri.hide();

  buttonSushi = createButton("5 coins");
  buttonSushi.position(375, 450);
  buttonSushi.size(100, 30);
  buttonSushi.mousePressed(Sushi);
  buttonSushi.hide();

  buttonRamen = createButton("7 coins");
  buttonRamen.position(500, 450);
  buttonRamen.size(100, 30);
  buttonRamen.mousePressed(Ramen);
  buttonRamen.hide();

  buttonFeed = createButton("Feed");
  buttonFeed.position(38, 350);
  buttonFeed.size(100, 30);
  buttonFeed.mousePressed(Choice);
  buttonFeed.show();

  buttonFeedOnigiri = createButton("Onigiri");
  buttonFeedOnigiri.position(275, 508);
  buttonFeedOnigiri.size(150, 50);
  buttonFeedOnigiri.mousePressed(FeedOnigiri);
  buttonFeedOnigiri.hide();

  buttonFeedSushi = createButton("Sushi");
  buttonFeedSushi.position(425, 508);
  buttonFeedSushi.size(150, 50);
  buttonFeedSushi.mousePressed(FeedSushi);
  buttonFeedSushi.hide();

  buttonFeedRamen = createButton("Ramen");
  buttonFeedRamen.position(575, 508);
  buttonFeedRamen.size(150, 50);
  buttonFeedRamen.mousePressed(FeedRamen);
  buttonFeedRamen.hide();
}

function Idle() {

  if (statHunger > 0 && night == false && statHealth > 50) {
    if (frameCount % 600 === 0) {
      chosenX = random(200, 550);
    }

    if (chosenX < seiaX) {
      seiaX = max(chosenX, seiaX - 1);
      seiaFacing = 1;
    } else if (chosenX > seiaX) {
      seiaX = min(chosenX, seiaX + 1);
      seiaFacing = -1;
    }
  }
}

function drawSeia(img) {
  push();

  if (seiaFacing === -1) {
    translate(seiaX * 2 + 400, 0);
    scale(-1, 1);
    image(img, seiaX, 100, 400, 678);
  } else {
    image(img, seiaX, 100, 400, 678);
  }

  pop();
}

function Choice() {

  menuOpen = !menuOpen;

  if (menuOpen) {
    buttonFeedOnigiri.show();
    buttonFeedSushi.show();
    buttonFeedRamen.show();
  } else {
    buttonFeedOnigiri.hide();
    buttonFeedSushi.hide();
    buttonFeedRamen.hide();
  }
}

function FeedOnigiri() {
  if (onigiri > 0) {
  onigiri -= 1;
  statHunger += 5;
  }
}

function FeedSushi() {
  if (sushi > 0) {
  sushi -= 1;
  statHunger += 10;
  }
}

function FeedRamen() {
  if (ramen > 0) {
  ramen -= 1;
  statHunger += 20;
  }
}

function Onigiri() {
  if (coins >= 2) {
  onigiri += 1;
  coins -= 2;
  } else {
    return;
  }
}

function Sushi() {
  if (coins >= 5) {
  sushi += 1;
  coins -= 5;
  } else {
    return;
  }
}

function Ramen() {
  if (coins >= 7) {
  ramen += 1;
  coins -= 7;
  } else {
    return;
  }
}

function press() {
  if (barX <= 140 && barX >= 120) {
  coins += 1
  }
}

function sleep() {
  night = true;

  buttonSleep.hide();
  buttonWakeUp.show();
  buttonMinigame.hide();
  buttonFeed.hide();
  menuY = 340;

  if (menuOpen) {
    buttonFeedOnigiri.hide();
    buttonFeedSushi.hide();
    buttonFeedRamen.hide();
    menuOpen = false;
  }
}

function wakeUp() {
  night = false;

  buttonSleep.show();
  buttonWakeUp.hide();
  buttonMinigame.hide();
  buttonFeed.show();
  menuY = 380;
}

function goToBedroom() {
  if (night == false) {
  buttonSleep.show();
  buttonWakeUp.hide();
  buttonMinigame.hide();
  buttonFeed.show();
  menuY = 380;
  } else if (night == true) {
  buttonSleep.hide();
  buttonWakeUp.show();
  buttonMinigame.hide();
  }
  buttonOnigiri.hide();
  buttonRamen.hide();
  buttonSushi.hide();
  currentLocation = "bedroom";
}

function goToShop() {
  currentLocation = "shop";

  buttonSleep.hide();
  buttonWakeUp.hide();
  buttonMinigame.show();
  buttonOnigiri.show();
  buttonRamen.show();
  buttonSushi.show();
  buttonFeed.hide();
  menuY = 340;

  if (menuOpen) {
    buttonFeedOnigiri.hide();
    buttonFeedSushi.hide();
    buttonFeedRamen.hide();
    menuOpen = false;
  }
}

function goToGarden() {
  currentLocation = "garden";

  buttonSleep.hide();
  buttonWakeUp.hide();
  buttonMinigame.hide();
  buttonOnigiri.hide();
  buttonRamen.hide();
  buttonSushi.hide();
  buttonFeed.hide();
  menuY = 340;

  if (menuOpen) {
    buttonFeedOnigiri.hide();
    buttonFeedSushi.hide();
    buttonFeedRamen.hide();
    menuOpen = false;
  }
}

function Background() {
  showBedroom = false;
  showBedroomNight = false;
  showGarden = false;
  showGardenNight = false;
  showShop = false;

  if (night === true && currentLocation === "bedroom") {
    showBedroomNight = true;
  } else if (currentLocation === "bedroom") {
    showBedroom = true;
  }

  if (night === true && currentLocation === "garden") {
    showGardenNight = true;
  } else if (currentLocation === "garden") {
    showGarden = true;
  }

  if (currentLocation === "shop") {
    showShop = true;
  }
}

function SeiaSprites() {
  showSeiaNeutral = false;
  showSeiaSleep = false;
  showSeiaHungry = false;
  showSeiaLowHealth = false;

  if (currentLocation === "shop") {
    return;
  }


  if (currentLocation === "garden" && night === true) {
    return;
  }

  if (night === true && currentLocation === "bedroom") {
    showSeiaSleep = true;
  }
  else if (statHealth <= 50) {
    showSeiaLowHealth = true;
  }
  else if (statHunger <= 0) {
    showSeiaHungry = true;
  }
  else {
    showSeiaNeutral = true;
  }
}

function draw() {


  Idle();
  SeiaSprites();
  Background();
  background(220);
  textSize(20);

  if (barX <= 205 && bounce == 0) {
    barX += 2;
  } else if (barX >= 51 && bounce == 1) {
    barX -= 2;
  }

  if (barX == 205 && bounce == 0) {
    bounce = 1;
  } else if (barX == 51 && bounce == 1) {
    bounce = 0;
  }


  statHunger -= 0.01
  if (statHunger <= 0) {
    statHunger = 0
  }
  if (statHunger >= 100) {
    statHunger = 100
  }

  if (showGarden == false) {
  statHappiness -= 0.02;
  } else if (showGarden) {
  statHappiness += 0.1;
  }
  if (statHappiness <= 0) {
    statHappiness = 0
  }
  if (statHappiness >= 100) {
    statHappiness = 100
  }

  if (night == false) {
  statEnergy -= 0.03;
  } else if (night == true) {
  statEnergy += 0.07;
  }
  if (statEnergy <= 0) {
    statEnergy = 0
  }
  if (statEnergy >= 100) {
    statEnergy = 100
  }

  if (showBedroomNight) {
    image(imgBedroomNight, 0, 0, 1000, 600);
  }
  if (showBedroom) {
    image(imgBedroomDay, 0, 0, 1000, 600);
  }
  if (showGarden) {
    image(imgGarden, 0, 0, 1000, 600);
  }

  if (showGardenNight) {
    image(imgGardenNight, 0, 0, 1000, 600);
  }

  if (showSeiaNeutral) {
    drawSeia(imgSeiaNeutral);
  }

  if (showSeiaSleep) {
    drawSeia(imgSeiaSleep);
  }

  if (showSeiaHungry) {
    drawSeia(imgSeiaHungry);
  }

  if (showSeiaLowHealth) {
    drawSeia(imgSeiaLowHealth);
  }

  if (showShop) {
    image(imgShop, 0, 0, 1000, 600);
    fill(100, 100, 100);
    rect(30, 400, 200, 200);
    fill(255, 255, 255);
    rect(50, 430, 160, 60);
    fill(0, 255, 0);
    rect(120, 430, 20, 60);
    fill(0, 0, 0);
    rect(barX, 430, 3, 60);

    fill(0, 0, 0, 100);
    rect(230, 400, 400, 90);

    fill(255, 255, 255);
    text("Onigiri", 265, 430);
    text("Sushi", 390, 430);
    text("Ramen", 510, 430);
  }

  fill(0, 0, 0, 100);
  rect(0, 0, 150, menuY);

  fill(255, 255, 255);
  rect(30, 50, 100, 30);
  rect(30, 100, 100, 30);
  rect(30, 150, 100, 30);
  rect(30, 200, 100, 30);

  fill(165, 42, 42);
  rect(30, 50, statHunger, 30);

  fill(0, 255, 0);
  rect(30, 100, statEnergy, 30);

  fill(255, 255, 0);
  rect(30, 150, statHappiness, 30);

  fill(255, 0, 0);
  rect(30, 200, statHealth, 30);

  fill(0, 0, 0);
  text("Hunger", 47, 72);
  text("Energy", 47, 122);
  text("Happiness", 33, 172);
  text("Health", 52, 222);
  fill(255, 255, 255);
  text("Coins x" + coins, 30, 30);
  text("Onigiri x" + onigiri, 30, 260)
  text("Sushi x" + sushi, 30, 290)
  text("Ramen x" + ramen, 30, 320)

  if (statHunger <= 0) {
    statHealth -= 0.1;
  }
}
