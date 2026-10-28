let statHunger = 100;
let statEnergy = 100;
let statHappiness = 100;
let statHealth = 100;

let coins = 0;

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

let imgSeiaNeutral;
let imgSeiaSleep;
let imgSeiaHungry;

let showSeiaNeutral = true;
let showSeiaSleep = false;
let showSeiaHungry = false;




function preload() {
  imgSeiaNeutral = loadImage("sprites/Seia_neutral.png");
  imgSeiaSleep = loadImage("sprites/Seia_sleeping.png");
  imgSeiaHungry = loadImage("sprites/Seia_hungry.png");
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

  buttonMinigame = createButton("");
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
}

function press() {
  //
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

  currentLocation = "bedroom";
}

function goToShop() {
  currentLocation = "shop";

  buttonSleep.hide();
  buttonWakeUp.hide();
  buttonMinigame.show();
}

function goToGarden() {
  currentLocation = "garden";

  buttonSleep.hide();
  buttonWakeUp.hide();
  buttonMinigame.hide();
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
  // Hide Seia by default
  showSeiaNeutral = false;
  showSeiaSleep = false;
  showSeiaHungry = false;

  // Seia should not appear in the shop
  if (currentLocation === "shop") {
    return;
  }

  // Seia should not appear in the garden at night
  if (currentLocation === "garden" && night === true) {
    return;
  }

  // Seia sleeps in the bedroom at night
  if (night === true && currentLocation === "bedroom") {
    showSeiaSleep = true;
  } 
  // Seia appears hungry if hunger reaches zero
  else if (statHunger <= 0) {
    showSeiaHungry = true;
  } 
  // Otherwise, show her neutral sprite
  else {
    showSeiaNeutral = true;
  }
}

function draw() {



  SeiaSprites();
  Background();
  background(220);
  textSize(20);

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

  if (showShop) {
    image(imgShop, 0, 0, 1000, 600);
    rect(30, 400, 200, 200);
  }

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

  if (statHunger <= 0) {
    statHealth = max(0, statHealth - 1);
  }
}
