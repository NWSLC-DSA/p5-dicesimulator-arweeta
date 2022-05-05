//values for dice rolls
const diceValue = [diceValueOne, diceValueTwo, diceValueThree, diceValueFour, diceValueFive, diceValueSix]
let diceRoll = 0;

//values for button
let button;
let buttonHasBeenPressed;
 
 function setup() {
  createCanvas(400, 400);

  button = createButton("ٌRoll the dice");
  button.position(150, 150);
  button.mousePressed(buttonPressed);
  
}

//function for clicking the button
function buttonPressed(){
  buttonHasBeenPressed = true;
  diceRoll = floor(random(1,7));
  console.log (diceRoll);
}

function draw() {
  background(220);
  
    if (buttonHasBeenPressed) {
    //console.log ("mousePress")
    if (diceRoll == 1){
    diceValue [0] (80, 155, 60);}
   else if 
     (diceRoll == 2){
    diceValue [1](80, 155, 60);}
  else if 
      (diceRoll == 3){
    diceValue [2](80, 155, 60);}
  else if 
      (diceRoll == 4){
    diceValue [3](80, 155, 60);}
  else if 
      (diceRoll == 5){
    diceValue [4](80, 155, 60);}
    else if 
      (diceRoll == 6){
    diceValue [5](80, 155, 60);}
    }

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
