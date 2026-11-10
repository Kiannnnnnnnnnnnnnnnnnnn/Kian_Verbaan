let coors = [
	111110100,
	100101100,
	10010110,
	1010001010,
	111000010,
	101011110,
	11001000,
	1100100000,
	101000101,
	1000001101,
	1111000,
	1001011000,
	1100100
]

let CORRECTOR = 1000;

function setup(){
	createCanvas(1000, 700);
}

function draw(){
	background(250);
	fill("white");
	stroke(0);
	strokeWeight(3);
	rect(coors[0] % CORRECTOR, coors[1] % CORRECTOR, coors[2] % CORRECTOR, coors[2] % CORRECTOR);
	rect(coors[3] % CORRECTOR, coors[1] % CORRECTOR, coors[2] % CORRECTOR, coors[2] % CORRECTOR);
	rect(coors[0] % CORRECTOR, coors[4] % CORRECTOR, coors[2] % CORRECTOR, coors[2] % CORRECTOR);
	rect(coors[0] % CORRECTOR, coors[2] % CORRECTOR, coors[2] % CORRECTOR, coors[2] % CORRECTOR);
	rect(coors[5] % CORRECTOR, coors[1] % CORRECTOR, coors[2] % CORRECTOR, coors[2] % CORRECTOR);
	rect(200, coors[1] % CORRECTOR, coors[2] % CORRECTOR, coors[2] % CORRECTOR);

	rect(coors[7] % CORRECTOR, 325, 30, coors[12] % CORRECTOR);
	rect(170, 325, 30, coors[12] % CORRECTOR);
	rect(525, 120, coors[12] % CORRECTOR, 30);
	rect(525, coors[11] % CORRECTOR, coors[12] % CORRECTOR, 30);

	noFill();
	stroke(0);
	strokeWeight(10);
	
	stroke("red");
	arc(450, 425, 50, 50, 1.5 * PI , 0.5 * PI);
	

	stroke("green");
	arc(250, 305, 50, 70, 2 * PI , PI);
	

	stroke("blue");
	arc(780, 340, 50, 50, PI / 4, PI * 1.25);
	line(345, 360, 310, 390);

	stroke("green");
	line(290, 330, 280, 410);

	stroke("red");

	push();
	translate(685, 500);
	rotate(0.3 * PI);
	arc(0, 0, 300, 100, 0.5 * PI, 1.1 * PI);
	pop();

	stroke("red");
	arc(525, 490, 50, 50, 1 * PI , 2 * PI);

	stroke("blue");
	line(205, 360, 240, 390);

	push();
	stroke("green");
	translate(530, 300);
	rectMode(CENTER);
	rotate(PI * 0.2);
	rect(0, 0, 30, 100);
	pop();

	line(360, 330, 400, 410);
	triangle(610, 350, 700, 370, 700, 325);

	stroke("blue");
	line(240, 390, 210, 430);

	stroke("green");
	arc(600, 155, 50, 70, 2 * PI , PI);

	stroke("blue");
	push();
	translate(580, 520);
	rotate(0.6 * PI);
	rect(0, 0, 70, 40);
	pop();

	stroke("#610069");
	fill("#d608d6");
	strokeWeight(3);
	textSize(35);
	text("Secret code?", 200, 100);
}