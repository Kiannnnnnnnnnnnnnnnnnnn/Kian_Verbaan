let statHunger = 100;
let statEnergy = 100;
let statHappiness = 100;

let showBedroom = true;
let showShop = false;
let showGarden = false;

let buttonBedroom;
let buttonShop;
let buttonGarden;

function preload() {
  imgSeiaNeutral = loadImage("sprites/Seia_neutral.png");

  imgBedroomDay = loadImage("sprites/Background_BedroomDay.jpg");
  imgBedroomNight = loadImage("sprites/Background_BedroomNight.jpg");
  imgShop = loadImage("sprites/Background_Shop.jpg");
  imgGarden = loadImage("sprites/Background_Garden.jpg");

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
}

function goToBedroom() {
  showBedroom = true;
  showShop = false;
  showGarden = false;
}

function goToShop() {
  showBedroom = false;
  showShop = true;
  showGarden = false;
}

function goToGarden() {
  showBedroom = false;
  showShop = false;
  showGarden = true;
}

function draw() {
  background(220);
  textSize(32);

  if (showBedroom) {
    image(imgBedroomDay, 0, 0, 1000, 600);
  }
  if (showShop) {
    image(imgShop, 0, 0, 1000, 600);
  }
  if (showGarden) {
    image(imgGarden, 0, 0, 1000, 600);
  }

  image(imgSeiaNeutral, 400, 100, 400, 678);

  text(statHunger, 100, 100);
  text(statEnergy, 100, 200);
  text(statHappiness, 100, 300);

  if (frameCount % 120 === 0) {
  statHappiness = max(0, statHappiness - 1);
  }

  if (frameCount % 60 === 0) {
  statEnergy = max(0, statEnergy - 1);
  }

  if (frameCount % 30 === 0) {
  statHunger = max(0, statHunger - 1);
}
}
