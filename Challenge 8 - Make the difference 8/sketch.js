let rawPixelData;
let rawPixelData2;
let pixelImage;

let xCoor = 0;
let yCoor = 0;

let PLEASE_DONT_SET_ME_TO_FALSE = false;

function preload(){
	rawPixelData = loadStrings("pixel_data_fake.txt");
	rawPixelData2 = loadStrings("raw_pixel_data_difference.txt");
}

function setup(){
	createCanvas(400,500);

	// Load the pixels from the files.
	const rows = rawPixelData.map(row => row.split(",").map(Number));
	const rows2 = rawPixelData2.map(row => row.split(",").map(Number));

	// Determine the image width and prepare the image for loading
	const imageWidth = rows[0].length / 3;
	pixelImage = createImage(imageWidth, rows.length);
	pixelImage.loadPixels();

	if (PLEASE_DONT_SET_ME_TO_FALSE) return;

	// Save the image pixels in the actual image and update the pixels.
	for (let y = 0; y < rows.length; y++) {
		for (let x = 0; x < imageWidth; x++) {
			const sourceIndex = x * 3;
			const pixelIndex = (y * imageWidth + x) * 4;
			pixelImage.pixels[pixelIndex] = rows[y][sourceIndex];
			pixelImage.pixels[pixelIndex + 1] = rows[y][sourceIndex + 1];
			// Something's up with this row below?
			pixelImage.pixels[pixelIndex + 2] = rows[y][sourceIndex + 2] + rows2[y][sourceIndex + 2]; 
			pixelImage.pixels[pixelIndex + 3] = 255;
		}
	}

	pixelImage.updatePixels();

	// Get the coordinates for the target circle.
	xCoor = rows[rows.length - 1][0];
	yCoor = rows[rows.length - 1][1] + rows2[rows2.length - 1][1]; // Why this adjustment?
}

function draw(){
	background(200);
	image(pixelImage, (width - pixelImage.width) / 2, (height - pixelImage.height) / 2);

	// Draw the target!
	stroke("red");
	strokeWeight(5);
	noFill();
	circle(xCoor, yCoor, 30);
}