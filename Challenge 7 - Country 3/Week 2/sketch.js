let y = [220,260,300];
let x = [100, 400, 800];
let wrap = 300;


function setup() {
  createCanvas(1200, 800);
}

function draw() {
  background(220);
  textWrap(WORD);
  text("Welk land is dit?", 550, 50);
  text("Het hoogste getal dat dit mag zijn", x[0], y[0]);
  text("10000010", x[0], y[1]);
  text("Het laagste getal dat dit mag zijn", x[0], y[2]);
  text("dagen dat je GLU wachtwoord geldig is voordat je hem moet veranderen - ASCII-code voor 'n'", x[1], y[0], wrap);
  text("Aantal letters in de achternaam van de CSD-vertrouwenspersoon * XXXVI + Het aantal kleuren dat een vakje in de opdracht van de 3e week kon zijn", x[1], y[1], wrap);
  text("Aantal dagen tot het eind van het jaar * aantal eerstejaarsklassen + ASCII-code voor 'ESC'", x[1], y[2] + 30, wrap);
  text("De pincode van de koning % 1", x[2], y[0]);
  text(".----/...../....-", x[2], y[1]);
  text("LXVIII", x[2], y[2]);
}

