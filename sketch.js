var img;
var WIDTH;
var HEIGHT;
var pixelSize = 10;  // 方块大小
var totalPixels;
var drawnPixels = 0;
var pixelsToDraw;

function preload() {
  img = loadImage("assets/Claude_Monet,_Saint-Georges_majeur_au_crépuscule.jpg");
}

function setup() {
  WIDTH = img.width;
  HEIGHT = img.height;
  createCanvas(WIDTH, HEIGHT);
  imageMode(CENTER);
  noStroke();
  background(255);
  img.loadPixels();
  
  pixelsToDraw = new Array();
  for (let y = 0; y < HEIGHT; y += pixelSize) {
    for (let x = 0; x < WIDTH; x += pixelSize) {
      pixelsToDraw.push({x: x, y: y});
    }
  }
  shuffle(pixelsToDraw, true);
  
  totalPixels = pixelsToDraw.length;
  frameRate(1000);
}

function draw() {
  for (var i = 0; i < 100; i++) {
    if (drawnPixels >= totalPixels) {
      noLoop();  // 停止绘制
      break;
    }
    var pixel = pixelsToDraw[drawnPixels];
    var pix = img.get(pixel.x, pixel.y);
    fill(pix);
    rect(pixel.x, pixel.y, pixelSize, pixelSize);
    drawnPixels++;
  }
}

// Fisher-Yates Shuffle Algorithm
function shuffle(array, shouldShuffle) {
  if (!shouldShuffle) return array;
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}




