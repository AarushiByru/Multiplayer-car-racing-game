var gameState = 0;
var database, playerCount, form, player, game;


function setup(){
  createCanvas(400,400);
  database = firebase.database();
  //console.log(database);
 

  game = new Game();
  game.getState();
  game.start();
  
}

function draw(){
  //background("black");
  
    
  
}

