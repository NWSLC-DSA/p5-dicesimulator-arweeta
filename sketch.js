function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  diceValueOne(40, 20, 20);

}

//This is a user defined function for drawing a dice with the value one.
function diceValueOne(size, xPoint, yPoint){
  strokeWeight(size * 0.01);
  square(xPoint, yPoint, size);
  strokeWeight(size * 0.15);
  point((size/2) + xPoint,(size/2) + yPoint);
}

function diceValueTwo(size, xPoint, yPoint){
  strokeWeight(size * 0.01);
  square(xPoint, yPoint, size);
  strokeWeight(size * 0.15);
  point((size * 0.25) + xPoint,(size * 0.25) + yPoint);
  point((size * 0.75) + xPoint,(size * 0.75) + yPoint);
}

function diceValueThree(size, xPoint, yPoint){
  strokeWeight(size * 0.01);
  square(xPoint, yPoint, size);
  strokeWeight(size * 0.15);
  point((size * 0.25) + xPoint,(size * 0.25) + yPoint);
  point((size/2) + xPoint,(size/2) + yPoint);
  point((size * 0.75) + xPoint,(size * 0.75) + yPoint);
}

function diceValueFour(size, xPoint, yPoint){
  strokeWeight(size * 0.01);
  square(xPoint, yPoint, size);
  strokeWeight(size * 0.15);
  point((size * 0.25) + xPoint,(size * 0.25) + yPoint);
  point((size * 0.25) + xPoint,(size * 0.75) + yPoint);
  point((size * 0.75) + xPoint,(size * 0.25) + yPoint);
  point((size * 0.75) + xPoint,(size * 0.75) + yPoint);
}

function diceValueFive(size, xPoint, yPoint){
  strokeWeight(size * 0.01);
  square(xPoint, yPoint, size);
  strokeWeight(size * 0.15);
  point((size * 0.25) + xPoint,(size * 0.25) + yPoint);
  point((size * 0.25) + xPoint,(size * 0.75) + yPoint);
  point((size * 0.75) + xPoint,(size * 0.25) + yPoint);
  point((size * 0.75) + xPoint,(size * 0.75) + yPoint);
  point((size/2) + xPoint,(size/2) + yPoint);
}

function diceValueSix(size, xPoint, yPoint){
  strokeWeight(size * 0.01);
  square(xPoint, yPoint, size);
  strokeWeight(size * 0.15);
  point((size * 0.25) + xPoint,(size * 0.25) + yPoint);
  point((size * 0.25) + xPoint,(size * 0.5) + yPoint);
  point((size * 0.25) + xPoint,(size * 0.75) + yPoint);
  point((size * 0.75) + xPoint,(size * 0.25) + yPoint);
  point((size * 0.75) + xPoint,(size * 0.75) + yPoint);
  point((size * 0.75) + xPoint,(size * 0.5) + yPoint);
}
