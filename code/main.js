import kaboom from "kaboom"

// intialize context
kaboom({
  font: "sink",
  background: [0, 153, 255]
})

// load the sprites
loadSprite("Bug", "sprites/Bug.png");
loadSprite("KGF-Programmer", "sprites/KGF-Programmer.png");
loadSprite("Jatin", "sprites/Jatin.png");
loadSprite("Coffee", "sprites/Coffee.png");

// load the music
loadSound("Coffee-sipping", "sounds/Coffee-sipping.mp3");
loadSound("score", "sounds/score.mp3");
loadSound("Player-saying-yes", "sounds/Player-saying-yes.wav");
loadSound("Intro background", "sounds/Intro background.mp3");
loadSound("Final-win", "sounds/Final-win.wav");
loadSound("Drinking coffee", "sounds/Drinking coffee.wav");


