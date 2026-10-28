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

let buttonBedroom;
let buttonShop;
let buttonGarden;
let buttonSleep;
let buttonWakeUp;

let buttonMinigame;
let buttonOnigiri;
let buttonSushi;
let buttonRamen;

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

  buttonOnigiri = createButton("5 coins");
  buttonOnigiri.position(250, 450);
  buttonOnigiri.size(100, 30);
  buttonOnigiri.mousePressed(Onigiri);
  buttonOnigiri.hide();

  buttonSushi = createButton("10 coins");
  buttonSushi.position(375, 450);
  buttonSushi.size(100, 30);
  buttonSushi.mousePressed(Sushi);
  buttonSushi.hide();

  buttonRamen = createButton("20 coins");
  buttonRamen.position(500, 450);
  buttonRamen.size(100, 30);
  buttonRamen.mousePressed(Ramen);
  buttonRamen.hide();
}

function Onigiri() {
  if (coins >= 5) {
  onigiri += 1;
  coins -= 5;
  } else {
    return;
  }
}

function Sushi() {
  if (coins >= 10) {
  sushi += 1;
  coins -= 10;
  } else {
    return;
  }
}

function Ramen() {
  if (coins >= 20) {
  ramen += 1;
  coins -= 20;
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
}

function wakeUp() {
  night = false;

  buttonSleep.show();
  buttonWakeUp.hide();
  buttonMinigame.hide();
}

function goToBedroom() {
  if (night == false) {
  buttonSleep.show();
  buttonWakeUp.hide();
  buttonMinigame.hide();
  } else if (night == true) {
  buttonSleep.hide();
  buttonWakeUp.show();
  buttonMinigame.hide();
  }
  buttonOnigiri.hide();
  buttonRamen.hide();
  buttonSushi.hide();
  currentLocation = "bedroom";
  menuY = 380;
}

function goToShop() {
  currentLocation = "shop";

  buttonSleep.hide();
  buttonWakeUp.hide();
  buttonMinigame.show();
  buttonOnigiri.show();
  buttonRamen.show();
  buttonSushi.show();
  menuY = 340;
}

function goToGarden() {
  currentLocation = "garden";

  buttonSleep.hide();
  buttonWakeUp.hide();
  buttonMinigame.hide();
  buttonOnigiri.hide();
  buttonRamen.hide();
  buttonSushi.hide();
  menuY = 340;
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
  else if (statHunger <= 0 && statHealth <= 50) {
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


  statHunger -= 1
  if (statHunger <= 0) {
    statHunger = 0
  }
  if (statHunger >= 100) {
    statHunger = 100
  }

  if (showGarden == false) {
  statHappiness -= 0.5;
  } else if (showGarden) {
  statHappiness += 0.5;
  }
  if (statHappiness <= 0) {
    statHappiness = 0
  }
  if (statHappiness >= 100) {
    statHappiness = 100
  }

  if (night == false) {
  statEnergy -= 0.5;
  } else if (night == true) {
  statEnergy += 0.5;
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
    image(imgSeiaNeutral, 400, 100, 400, 678);
  }

  if (showSeiaSleep) {
    image(imgSeiaSleep, 400, 100, 400, 678);
  }

  if (showSeiaHungry) {
    image(imgSeiaHungry, 400, 100, 400, 678);
  }

  if (showSeiaLowHealth) {
    image(imgSeiaLowHealth, 400, 100, 400, 678);
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
    statHealth = max(0, statHealth - 1);
  }
}
