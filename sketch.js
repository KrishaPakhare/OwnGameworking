var gameState = 0;
var game 
var level1ButtonImg , level2ButtonImg
var girlImg , boyImg ;
var bgImg
var tickImg  

function preload()
{
	level1ButtonImg = loadImage("images/level1.png");
	level2ButtonImg = loadImage("images/level2.png");
	girlImg = loadImage("images/emma.png");
	boyImg = loadImage("images/john .png");
	bgImg = loadImage("images/Background1stpg.jpg");
    tickImg = loadImage("images/tick.png")
	
	
}

function setup() {
	createCanvas(windowWidth , windowHeight);
game = new Game();

	
  
}


function draw() {
	background("white")
 if(gameState === 0){
	 game.start();
 }
 if(gameState === 1){
	 game.play();
 }
 if(gameState === 2){
	 game.end();
 }
 drawSprites()
}



