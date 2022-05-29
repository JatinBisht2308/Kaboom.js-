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
loadSound("gameover", "sounds/gameover.wav");
loadSound("Killing bug", "sounds/Killing bug.mp3");

// lets define some game variables
let SPEED = 620
let BSPEED = 2
let CSPEED = 2
let SCORE = 0
let score;

// 
// Lets define a function to diaplay our score
function displayScore()
  {
    destroy(score)
    score = add([
    text("Score: 0"),
    pos(width()-200, 24),
    scale(3),
    { value: 0},
    ])
  }

// add the programmer to the game
const player = add([
    // List of components, each offers a set of functionalities
     sprite("KGF-Programmer"),
     pos(50, 30),
     area(),
     scale(0.7) //resizes the sprite
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

// Lets add 5 bugs on loop AND A COFEE

setInterval(()=> {
  for(let i=0;i<4;i++)
    {
      // displayScore();
      let x = rand(0,width())
      let y = height()

      let  c = add([
    // List of components, each offers a set of functionalities
     sprite("Bug"),
     pos(x, y),
     area(),
     scale(0.3), //resizes the sprite
        "Bug",
    ])
    c.onUpdate(() =>{
      c.moveTo(c.pos.x, c.pos.y -BSPEED)
        })
      if(BSPEED<16)
      {
        BSPEED = BSPEED+0.1;
      }
    }
    let x = rand(10,width())

      let y = height()
// lets add a cofee
      let  d = add([
    // List of components, each offers a set of functionalities
     sprite("Coffee"),
     pos(x, y),
     area(),
     scale(0.8), //resizes the sprite
        "Coffee",
    ])
    d.onUpdate(() =>{
      d.moveTo(d.pos.x, d.pos.y - BSPEED)
        })
},2500)

// when player collide with bug
player.onCollide("Bug", () => {
  // backgroundMusic.volume(0.2)
  play("Killing bug")
  play("gameover")
  destroy(player)
  addKaboom(player.pos)
  // scoreText = add([
  //     text("Game Over"),
  //     scale(3),
  //     pos(10, 21),
  //     color(10, 10, 255)
  // ])
})

// when player collide with coffee 
player.onCollide("Coffee", (cofee) => {
   play("Coffee-sipping")
  play("Player-saying-yes")
  destroy(cofee)
  SCORE++;
  SPEED+= 10;
  score.text = "Score:" + SCORE;
})

// display the score
displayScore();