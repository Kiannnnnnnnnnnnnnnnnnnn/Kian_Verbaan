const particles = [];
let particleCount = 10000;
let segments = [];
let neverForgetToDrawBackground = true;
let speedMult = 1.0;

function setup() {
	createCanvas(800, 500);
	segments = createSegments();

	const rowCount = max(1, ceil(sqrt(particleCount * height / width)));
	const particlesPerRow = floor(particleCount / rowCount);
	const extraParticles = particleCount % rowCount;

	for (let row = 0; row < rowCount; row++) {
		const particlesInRow = particlesPerRow + (row < extraParticles ? 1 : 0);

		for (let column = 0; column < particlesInRow; column++) {
			const x = (column + 0.5) * width / particlesInRow;
			const y = (row + 0.5) * height / rowCount;
			particles.push(createParticle(x, y));
		}
	}

	saySomething();
}

function draw() {
	if (neverForgetToDrawBackground) {
		background(240);
	}

	textSize(20);
	fill(50);
	stroke(250);
	strokeWeight(3);
	text("Maar, waar dan?", 300, 30);

	noStroke();
	for (const particle of particles) {
		moveParticle(particle, segments);
		drawParticle(particle);
	}
}

function createParticle(x, y) {
	const size = random(2, 10);
	const radius = size / 2;
	const direction = random(TWO_PI);
	const speed = random(0.1, 0.2) * speedMult;

	return {
		x: constrain(x, radius, width - radius),
		y: constrain(y, radius, height - radius),
		size: size,
		radius: radius,
		velocityX: cos(direction) * speed,
		velocityY: sin(direction) * speed,
		shape: random(["circle", "square", "triangle"]),
		color: color(random(200), random(200), random(200))
	};
}

function moveParticle(particle, segments) {
	const distance = sqrt(
		particle.velocityX * particle.velocityX +
		particle.velocityY * particle.velocityY
	);
	const steps = ceil(distance / 0.5);

	for (let step = 0; step < steps; step++) {
		particle.x += particle.velocityX / steps;
		particle.y += particle.velocityY / steps;

		if (particle.x < particle.radius || particle.x > width - particle.radius) {
			particle.velocityX *= -1;
			particle.x = constrain(particle.x, particle.radius, width - particle.radius);
		}

		if (particle.y < particle.radius || particle.y > height - particle.radius) {
			particle.velocityY *= -1;
			particle.y = constrain(particle.y, particle.radius, height - particle.radius);
		}

		for (const segment of segments) {
			bounceOffSegment(particle, segment);
		}
	}
}

function bounceOffSegment(particle, segment) {
	const segmentX = segment.x2 - segment.x1;
	const segmentY = segment.y2 - segment.y1;
	const segmentLengthSquared = segmentX * segmentX + segmentY * segmentY;
	const projection = constrain(
		((particle.x - segment.x1) * segmentX +
			(particle.y - segment.y1) * segmentY) / segmentLengthSquared,
		0,
		1
	);
	const closestX = segment.x1 + projection * segmentX;
	const closestY = segment.y1 + projection * segmentY;
	let normalX = particle.x - closestX;
	let normalY = particle.y - closestY;
	let distance = sqrt(normalX * normalX + normalY * normalY);
	const collisionRadius = particle.radius + 2.5;

	if (distance >= collisionRadius) {
		return;
	}

	if (distance === 0) {
		normalX = -segmentY;
		normalY = segmentX;
		distance = sqrt(normalX * normalX + normalY * normalY);
		normalX /= distance;
		normalY /= distance;

		if (particle.velocityX * normalX + particle.velocityY * normalY > 0) {
			normalX *= -1;
			normalY *= -1;
		}
	} else {
		normalX /= distance;
		normalY /= distance;
	}

	const overlap = collisionRadius - distance;
	particle.x += normalX * overlap;
	particle.y += normalY * overlap;

	const velocityAlongNormal =
		particle.velocityX * normalX + particle.velocityY * normalY;
	if (velocityAlongNormal < 0) {
		particle.velocityX -= 2 * velocityAlongNormal * normalX;
		particle.velocityY -= 2 * velocityAlongNormal * normalY;
	}
}

function drawParticle(particle) {
	noStroke();
	fill(particle.color);

	if (particle.shape === "circle") {
		circle(particle.x, particle.y, particle.size);
	} else if (particle.shape === "square") {
		rectMode(CENTER);
		rect(particle.x, particle.y, particle.size, particle.size);
	} else {
		triangle(
			particle.x, particle.y - particle.radius,
			particle.x - particle.radius, particle.y + particle.radius,
			particle.x + particle.radius, particle.y + particle.radius
		);
	}

	
}

function createSegments() {
	const glyphs = [
		[[0, 0, 1, 0], [1, 0, 1, 1], [0, 0.5, 1, 0.5], [0, 1, 1, 1]],
		[[0, 0, 0, 0.5], [1, 0, 1, 1], [0, 0.5, 1, 0.5]],
		[[0, 0, 0, 1], [1, 0, 1, 1], [0, 0.5, 1, 0.5]],
		[[0, 0, 1, 0], [0, 0, 0, 1], [1, 0, 1, 1], [0, 0.5, 1, 0.5], [0, 1, 1, 1]],
		[[0, 0.5, 1, 0.5], [0.5, 0, 0.5, 1]],
		[[0, 0, 1, 0], [1, 0, 0.5, 1]],
		[[0, 0, 1, 0], [0, 0, 0, 1], [1, 0, 1, 1], [0, 0.5, 1, 0.5], [0, 1, 1, 1]]
	];
	const glyphWidth = 60;
	const glyphHeight = 90;
	const spacing = 40;
	const totalWidth = glyphs.length * (glyphWidth + spacing) - spacing;
	const startX = (width - totalWidth) / 2;
	const startY = (height - glyphHeight) / 2;
	const segments = [];

	for (let i = 0; i < glyphs.length; i++) {
		const glyph = glyphs[i];
		const x = startX + i * (glyphWidth + spacing);

		for (const coordinates of glyph) {
			segments.push({
				x1: x + coordinates[0] * glyphWidth,
				y1: startY + coordinates[1] * glyphHeight,
				x2: x + coordinates[2] * glyphWidth,
				y2: startY + coordinates[3] * glyphHeight
			});
		}
	}

	return segments;
}

function saySomething(){
	console.log("https://tinyurl.com/2vf2mrje");
}
