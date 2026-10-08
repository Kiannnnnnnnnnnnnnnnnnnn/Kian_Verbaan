let rockButton;
let paperButton;
let scissorsButton;
let playerChoice;
let computerChoice;
let result = '';

function setup() {
  createCanvas(1500, 700);

  rockButton = createButton('Rock');
  rockButton.position(350, 450);
  rockButton.size(200, 100);
  rockButton.mousePressed(() => playGame('rock'));

  paperButton = createButton('Paper');
  paperButton.position(650, 450);
  paperButton.size(200, 100);
  paperButton.mousePressed(() => playGame('paper'));

  scissorsButton = createButton('Scissors');
  scissorsButton.position(950, 450);
  scissorsButton.size(200, 100);
  scissorsButton.mousePressed(() => playGame('scissors'));
}

function playGame(choice) {
  playerChoice = choice;
  computerChoice = getAIChoice();
  result = calculations(playerChoice, computerChoice);
}

function getAIChoice() {
  let choices = ['rock', 'paper', 'scissors'];
  let randomIndex = floor(random(choices.length));
  return choices[randomIndex];
}

function calculations(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  }

  if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return 'Player wins!';
  }

  return 'AI wins!';
}

function draw() {
  background(120);

  textSize(32);
  textAlign(CENTER);

  text('Rock Paper Scissors', width / 2, 100);

  if (result !== '') {
    textSize(24);
    text(result, width / 2, 350);
  }
}
