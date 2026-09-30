let namen[Dylan, Kian, Liora, Jasper, Dylano, Henk, Herman, Gerda, Jan, kaa, lightlyweatheredwaxedcopperstairs, markiplier, mrbist, monitor, floep, flep, flap, flyp, fluip, godverdepestpleurustyfuskankerietus, pieterjandoedelneus, ja, Griopod, ikdenkdatditdelaatsteis, tochnietusverkeerdgeteld],

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  let index = 1;
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (index % 2 == 0) {
        fill(255);
      } else {
        fill(0);
      }
      rect(j * 50 + 25, i * 50 + 25, 50, 50);
      fill(255, 0, 0);
      text(index, j * 50 + 25, i * 50 + 35);
      index++;
  }
}
}
