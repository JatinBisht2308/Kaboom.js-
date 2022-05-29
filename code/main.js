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


// lets define some game variables
const SPEED = 620

// add the programmer to the game
const player = add([
    // List of components, each offers a set of functionalities
     sprite("KGF-Programmer"),
     pos(50, 30),
     area(),
     scale(1) //resizes the sprite
])

// moving the programmer
onKeyDown("left", () => {
  // move(x-axis,y-axis)
  player.move(-SPEED,0)
})
onKeyDown("right", () => {
  player.move(+SPEED,0)
})
onKeyDown("up", () => {
  player.move(0,-SPEED)
})
onKeyDown("down", () => {
  player.move(0,+SPEED)
})