const GRID_SIZE = 30;
const TILE_SIZE = 20;
const HUD_HEIGHT = 40;
const MOVE_INTERVAL = 8;
const GHOST_MOVE_INTERVAL = MOVE_INTERVAL / 0.1;
const FIELD_SIZE = 21;
const FIELD_ORIGIN = Math.floor((GRID_SIZE - FIELD_SIZE) / 2);
const CELL_PATTERN = [
	"111111100101101111111",
	"100000100111001000001",
	"101110101101101011101",
	"101110100101001011101",
	"101110100010101011101",
	"100000100000101000001",
	"111111101010101111111",
	"000000001101100000000",
	"111011111111011000100",
	"010010010010001001001",
	"111111100100100010001",
	"101000001100001001010",
	"111101101100101011011",
	"000000001011010101001",
	"111111101001011100101",
	"100000101011110111000",
	"101110101111011101011",
	"101110100010001100010",
	"101110101110100010001",
	"100000101110001001010",
	"111111101000101001011"
];


// Grid management
let grid = [];
let clearedCells = [];
let clearedCellCount = 0;


// Pacman variables
let pacman = { x: 1, y: 1 };
let direction = { x: 0, y: 0 };
let nextDirection = { x: 0, y: 0 };
let ghost = { x: GRID_SIZE - 2, y: GRID_SIZE - 2 };

// Game state
let score = 0;
let remainingPellets = 0;

// CHEATS
let WALL_HACK = true;

function setup() {
	createCanvas(GRID_SIZE * TILE_SIZE, GRID_SIZE * TILE_SIZE + HUD_HEIGHT);
	resetGame();
}

function draw() {
	background(8, 10, 35);
	const fieldCleared = clearedCellCount === FIELD_SIZE * FIELD_SIZE;
	if (!fieldCleared) {
		movePacman();
		if (actorsCollide()) {
			resetGame();
		} else {
			moveGhost();
			if (actorsCollide()) { resetGame(); }
		}
	}
	drawHud();
	drawMaze();
	drawGhost();
	if (!fieldCleared) { drawPacman(); }
}

function resetGame() {
	pacman = { x: 1, y: 1 };
	direction = { x: 0, y: 0 };
	nextDirection = { x: 0, y: 0 };
	ghost = { x: GRID_SIZE - 2, y: GRID_SIZE - 2 };
	score = 0;
	createMaze();
}

function actorsCollide() {
	return pacman.x === ghost.x && pacman.y === ghost.y;
}

function createMaze() {
	grid = Array.from({ length: GRID_SIZE }, () => Array(GRID_SIZE).fill(2));
	clearedCells = Array.from({ length: FIELD_SIZE }, () => Array(FIELD_SIZE).fill(false));

	for (let i = 0; i < GRID_SIZE; i++) {
		grid[0][i] = 1;
		grid[GRID_SIZE - 1][i] = 1;
		grid[i][0] = 1;
		grid[i][GRID_SIZE - 1] = 1;
	}

	for (let row = 4; row < GRID_SIZE - 1; row += 5) {
		const gap = 3 + ((row * 2) % 19);
		for (let column = 2; column < GRID_SIZE - 2; column++) {
			if (column !== gap && column !== gap + 1) {
				grid[row][column] = 1;
			}
		}
	}

	for (let column = 5; column < GRID_SIZE - 1; column += 5) {
		const gap = 3 + ((column * 3) % 19);
		for (let row = 2; row < GRID_SIZE - 2; row++) {
			if (row !== gap && row !== gap + 1) {
				grid[row][column] = 1;
			}
		}
	}

	grid[pacman.y][pacman.x] = 0;
	remainingPellets = grid.flat().filter((tile) => tile === 2).length;
}

function drawHud() {
	noStroke();
	fill(255);
	textAlign(LEFT, CENTER);
	textSize(18);
	text(`Score: ${score}${remainingPellets === 0 ? "   You win!" : ""}   Move: arrows/WASD`, 10, HUD_HEIGHT / 2);
}

function drawMaze() {
	const fieldCleared = clearedCellCount === FIELD_SIZE * FIELD_SIZE;
	for (let row = 0; row < GRID_SIZE; row++) {
		for (let column = 0; column < GRID_SIZE; column++) {
			const x = column * TILE_SIZE;
			const y = HUD_HEIGHT + row * TILE_SIZE;
			const localRow = row - FIELD_ORIGIN;
			const localColumn = column - FIELD_ORIGIN;

			if (fieldCleared
				&& row >= FIELD_ORIGIN - 4 && row < FIELD_ORIGIN + FIELD_SIZE + 4
				&& column >= FIELD_ORIGIN - 4 && column < FIELD_ORIGIN + FIELD_SIZE + 4
				&& (localRow < 0 || localRow >= FIELD_SIZE || localColumn < 0 || localColumn >= FIELD_SIZE)) {
				noStroke();
				fill(255);
				rect(x, y, TILE_SIZE, TILE_SIZE);
				continue;
			}

			if (localRow >= 0 && localRow < FIELD_SIZE
				&& localColumn >= 0 && localColumn < FIELD_SIZE
				&& clearedCells[localRow][localColumn]) {
				noStroke();
				fill(CELL_PATTERN[localRow][localColumn] === "0" ? 0 : 255);
				rect(x, y, TILE_SIZE, TILE_SIZE);
				continue;
			}

			stroke(18, 22, 52);
			strokeWeight(1);

			if (grid[row][column] === 1) {
				fill(30, 75, 220);
				rect(x, y, TILE_SIZE, TILE_SIZE, 4);
			} else {
				fill(8, 10, 35);
				rect(x, y, TILE_SIZE, TILE_SIZE);

				if (grid[row][column] === 2) {
					noStroke();
					fill(255, 220, 170);
					circle(x + TILE_SIZE / 2, y + TILE_SIZE / 2, 4);
				}
			}
		}
	}
}

function drawPacman() {
	const heading = direction.x === 0 && direction.y === 0 ? 0 : atan2(direction.y, direction.x);
	const mouth = 0.15 + abs(sin(frameCount * 0.12)) * 0.45;

	push();
	translate(
		pacman.x * TILE_SIZE + TILE_SIZE / 2,
		HUD_HEIGHT + pacman.y * TILE_SIZE + TILE_SIZE / 2
	);
	rotate(heading);
	noStroke();
	fill(255, 220, 0);
	arc(0, 0, TILE_SIZE - 2, TILE_SIZE - 2, mouth, TWO_PI - mouth, PIE);
	pop();
}

function drawGhost() {
	const centerX = ghost.x * TILE_SIZE + TILE_SIZE / 2;
	const centerY = HUD_HEIGHT + ghost.y * TILE_SIZE + TILE_SIZE / 2;

	noStroke();
	fill(245, 65, 90);
	ellipse(centerX, centerY - 2, TILE_SIZE - 2, TILE_SIZE - 2);
	rect(centerX - (TILE_SIZE - 2) / 2, centerY - 2, TILE_SIZE - 2, TILE_SIZE / 2);
	ellipse(centerX - 5, centerY + 7, 7, 7);
	ellipse(centerX, centerY + 7, 7, 7);
	ellipse(centerX + 5, centerY + 7, 7, 7);

	fill(255);
	ellipse(centerX - 4, centerY - 3, 6, 8);
	ellipse(centerX + 4, centerY - 3, 6, 8);
	fill(30, 75, 220);
	circle(centerX - 4, centerY - 2, 3);
	circle(centerX + 4, centerY - 2, 3);
}

function movePacman() {
	if (frameCount % MOVE_INTERVAL !== 0) {
		return;
	}

	if (nextDirection.x !== 0 || nextDirection.y !== 0) {
		if (canMove(nextDirection)) {
			direction = nextDirection;
			nextDirection = { x: 0, y: 0 };
		}
	}

	if (!canMove(direction)) { return; }
	pacman.x += direction.x;
	pacman.y += direction.y;

	if (grid[pacman.y][pacman.x] === 2) {
		grid[pacman.y][pacman.x] = 0;
		score += 10;
		remainingPellets--;

		// TODO: fix this.
		if (WALL_HACK && 1 == 0) {
			clearCell(pacman.x, pacman.y);
		}

	} else if (grid[pacman.y][pacman.x] === 1) {
		grid[pacman.y][pacman.x] = 0;
		score += 10;
		clearCell(pacman.x, pacman.y);
	}
}

function moveGhost() {
	if (frameCount % GHOST_MOVE_INTERVAL !== 0) { return; }

	const nextStep = findGhostStep();
	if (nextStep) {
		ghost.x += nextStep.x;
		ghost.y += nextStep.y;
	}
}

function findGhostStep() {
	const firstSteps = Array.from({ length: GRID_SIZE }, () => Array(GRID_SIZE).fill(null));
	const visited = Array.from({ length: GRID_SIZE }, () => Array(GRID_SIZE).fill(false));
	const queue = [{ x: ghost.x, y: ghost.y }];
	const directions = [
		{ x: 0, y: -1 },
		{ x: 1, y: 0 },
		{ x: 0, y: 1 },
		{ x: -1, y: 0 }
	];
	let queueIndex = 0;

	visited[ghost.y][ghost.x] = true;
	while (queueIndex < queue.length) {
		const current = queue[queueIndex++];
		if (current.x === pacman.x && current.y === pacman.y) {
			return firstSteps[current.y][current.x];
		}

		for (const direction of directions) {
			const nextX = current.x + direction.x;
			const nextY = current.y + direction.y;
			if (nextX <= 0 || nextY <= 0 || nextX >= GRID_SIZE - 1 || nextY >= GRID_SIZE - 1
				|| visited[nextY][nextX] || grid[nextY][nextX] === 1) {
				continue;
			}

			visited[nextY][nextX] = true;
			firstSteps[nextY][nextX] = current.x === ghost.x && current.y === ghost.y
				? direction
				: firstSteps[current.y][current.x];
			queue.push({ x: nextX, y: nextY });
		}
	}

	return null;
}

function canMove(move) {
	const nextX = pacman.x + move.x;
	const nextY = pacman.y + move.y;
	const isOuterWall = nextX === 0 || nextY === 0 || nextX === GRID_SIZE - 1 || nextY === GRID_SIZE - 1;
	return !isOuterWall && (WALL_HACK || grid[nextY][nextX] !== 1);
}

function clearCell(x, y) {
	const localColumn = x - FIELD_ORIGIN;
	const localRow = y - FIELD_ORIGIN;
	if (localRow >= 0 && localRow < FIELD_SIZE
		&& localColumn >= 0 && localColumn < FIELD_SIZE
		&& !clearedCells[localRow][localColumn]) 
	{
		clearedCells[localRow][localColumn] = true;
		clearedCellCount++;
	}
}

function keyPressed() {
	if (key === "h" || key === "H") {
		WALL_HACK = !WALL_HACK;
	} else if (keyCode === LEFT_ARROW || key === "a" || key === "A") {
		nextDirection = { x: -1, y: 0 };
	} else if (keyCode === RIGHT_ARROW || key === "d" || key === "D") {
		nextDirection = { x: 1, y: 0 };
	} else if (keyCode === UP_ARROW || key === "w" || key === "W") {
		nextDirection = { x: 0, y: -1 };
	} else if (keyCode === DOWN_ARROW || key === "s" || key === "S") {
		nextDirection = { x: 0, y: 1 };
	} else {
		return;
	}

	return false;
}
