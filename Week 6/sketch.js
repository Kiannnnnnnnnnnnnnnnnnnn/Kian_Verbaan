// all stats
let statHunger = 100;
let statEnergy = 100;
let statHappiness = 100;
let statHealth = 100;

// all amounts
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

// backgrounds
let imgBedroomDay;
let imgBedroomNight;
let imgShop;
let imgGarden;
let imgGardenNight;

// variables to show backgrounds
let showBedroom = true;
let showBedroomNight = false;
let showShop = false;
let showGarden = false;
let showGardenNight = false;

let currentLocation = "bedroom";

let night = false;
let menuOpen = false;
let showDeath = false;

// buttons
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

// all sprites
let imgSeiaNeutral;
let imgSeiaTalking;
let imgSeiaHappy;
let imgSeiaSleep;
let imgSeiaHungry;
let imgSeiaLowHealth;
let imgSeiaDead;

// variables for showing sprites
let showSeiaNeutral = true;
let showSeiaTalking = false;
let showSeiaHappy = false;
let showSeiaSleep = false;
let showSeiaHungry = false;
let showSeiaLowHealth = false;

// audio
let audioThanks1;
let audioThanks2;
let audioIdle1;
let audioIdle2;
let audioIdle3;
let audioIdle4;
let audioIdle5;


// preloading all audio and sprites
function preload() {
  imgSeiaNeutral = loadImage("sprites/Seia_neutral.png");
  imgSeiaTalking = loadImage("sprites/Seia_talking.png");
  imgSeiaHappy = loadImage("sprites/Seia_happy.png");
  imgSeiaSleep = loadImage("sprites/Seia_sleeping.png");
  imgSeiaHungry = loadImage("sprites/Seia_hungry.png");
  imgSeiaLowHealth = loadImage("sprites/Seia_lowhealth.png");
  imgSeiaDead = loadImage("sprites/Seia_dead.jpg");
  imgBedroomDay = loadImage("sprites/Background_BedroomDay.jpg");
  imgBedroomNight = loadImage("sprites/Background_BedroomNight.jpg");
  imgShop = loadImage("sprites/Background_Shop.jpg");
  imgGarden = loadImage("sprites/Background_Garden.jpg");
  imgGardenNight = loadImage("sprites/Background_GardenNight.jpg");

  audioThanks1 = loadSound("audio/SeiaThanks1.mp3");
  audioThanks2 = loadSound("audio/SeiaThanks2.mp3");
  audioIdle1 = loadSound("audio/SeiaIdle1.mp3");
  audioIdle2 = loadSound("audio/SeiaIdle2.mp3");
  audioIdle3 = loadSound("audio/SeiaIdle3.mp3");
  audioIdle4 = loadSound("audio/SeiaIdle4.mp3");
  audioIdle5 = loadSound("audio/SeiaIdle5.mp3");
}

function setup() {
  createCanvas(1000, 600);

  // getting data from local storage
  let savedHunger = getItem("Hunger");
  if (savedHunger == null) {
    statHunger = 100;
  } else {
    statHunger = savedHunger;
  }

  let savedEnergy = getItem("Energy");
  if (savedEnergy == null) {
    statEnergy = 100;
  } else {
    statEnergy = savedEnergy;
  }

  let savedHappiness = getItem("Happiness");
  if (savedHappiness == null) {
    statHappiness = 100;
  } else {
    statHappiness = savedHappiness;
  }

  let savedHealth = getItem("Health");
  if (savedHealth == null) {
    statHealth = 100;
  } else {
    statHealth = savedHealth;
  }

  let savedCoins = getItem("Coins");
  if (savedCoins == null) {
    coins = 0;
  } else {
    coins = savedCoins;
  }

  let savedOnigiri = getItem("Onigiri");
  if (savedOnigiri == null) {
    onigiri = 0;
  } else {
    onigiri = savedOnigiri;
  }

  let savedSushi = getItem("Sushi");
  if (savedSushi == null) {
    sushi = 0;
  } else {
    sushi = savedSushi;
  }

  let savedRamen = getItem("Ramen");
  if (savedRamen == null) {
    ramen = 0;
  } else {
    ramen = savedRamen;
  }

  // all buttons
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

function saveStats() {
  storeItem("Hunger", statHunger);
  storeItem("Energy", statEnergy);
  storeItem("Happiness", statHappiness);
  storeItem("Health", statHealth);
  storeItem("Coins", coins);
  storeItem("Onigiri", onigiri);
  storeItem("Sushi", sushi);
  storeItem("Ramen", ramen);
}

function seiaDead() {
  buttonBedroom.hide();
  buttonFeed.hide();
  buttonFeedOnigiri.hide();
  buttonFeedRamen.hide();
  buttonFeedSushi.hide();
  buttonGarden.hide();
  buttonMinigame.hide();
  buttonOnigiri.hide();
  buttonRamen.hide();
  buttonShop.hide();
  buttonSleep.hide();
  buttonSushi.hide();
  buttonWakeUp.hide();

  showDeath = true;
}

// thanking you when feeding her
function Thanks() {

audioIdle1.stop();
audioIdle2.stop();
audioIdle3.stop();
audioIdle4.stop();
audioIdle5.stop();
audioThanks1.stop();
audioThanks2.stop();

  chosenThanks = floor(random(1, 3));
  if (chosenThanks === 1) {
    audioThanks1.play();
  } else {
    audioThanks2.play();
  }

}

// walking around and talking when idle
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

    if ((showBedroom || showGarden) && frameCount % 600 === 0) {
      chosenIdle = floor(random(1, 6));
      if (chosenIdle === 1) {
        audioIdle1.play();
      } else if (chosenIdle === 2) {
        audioIdle2.play();
      } else if (chosenIdle === 3) {
        audioIdle3.play();
      } else if (chosenIdle === 4) {
        audioIdle4.play();
      } else if (chosenIdle === 5) {
        audioIdle5.play();
      }
    }
  }
}

// flipping the sprite if necessary
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

// function to open feeding menu
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

// functions for feeding
function FeedOnigiri() {
  if (onigiri > 0) {
  onigiri -= 1;
  statHunger += 5;
  Thanks();
  }
}

function FeedSushi() {
  if (sushi > 0) {
  sushi -= 1;
  statHunger += 10;
  Thanks();
  }
}

function FeedRamen() {
  if (ramen > 0) {
  ramen -= 1;
  statHunger += 20;
  Thanks();
  }
}

// functions for buying food
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

// function for the minigame
function press() {
  if (barX <= 140 && barX >= 120) {
  coins += 1
  }
}

// all functions to change the location, menus etc
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

// function to change to the right background
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

// function to show the right sprite
function SeiaSprites() {
  showSeiaNeutral = false;
  showSeiaTalking = false;
  showSeiaHappy = false;
  showSeiaSleep = false;
  showSeiaHungry = false;
  showSeiaLowHealth = false;

  if (currentLocation === "shop") {
    return;
  }


  if (currentLocation === "garden" && night === true) {
    return;
  }

  if (audioThanks1.isPlaying() || audioThanks2.isPlaying()) {
    showSeiaHappy = true;
  }
  else if (audioIdle1.isPlaying() ||
           audioIdle2.isPlaying() ||
           audioIdle3.isPlaying() ||
           audioIdle4.isPlaying() ||
           audioIdle5.isPlaying()) {
    showSeiaTalking = true;
           }
  else if (night === true && currentLocation === "bedroom") {
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
  Background();
  Idle();
  SeiaSprites();

  background(220);
  textSize(20);

  saveStats();

  // makes the minigame work by bouncing the line back and forth
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

  // making the stats go down
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

  // makes all images display correctly
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

  if (showSeiaTalking) {
    drawSeia(imgSeiaTalking);
  }

  if (showSeiaHappy) {
    drawSeia(imgSeiaHappy);
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

  // all extra things to show for the shop
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

  // stats menu
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

  // makes health go down for every other stat that's at 0
  if (statEnergy <= 0) {
    statHealth -= 0.1;
  }

  if (statHappiness <= 0) {
    statHealth -= 0.1;
  }

  if (statHunger <= 0) {
    statHealth -= 0.1;
  }

  // makes health go up when all stats are 80+
  if (statHunger >= 80 && statEnergy >= 80 && statHappiness >= 80) {
    statHealth += 0.1;
  }

  if (statHealth >= 100) {
    statHealth = 100;
  }

  if (statHealth <= 0) {
    seiaDead();
  }

  // shows death and clears local storage for game restart
  if (showDeath) {
    image(imgSeiaDead, 0, 0, 1000, 600);
    clearStorage();
  }
}
