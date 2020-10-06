var gameState = "end";
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score, ground;
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("monkey", monkey_running);
  monkey.scale = 0.1;
  monkey.velocityY = 5;

  ground = createSprite(400,350,1300,10);
  ground.velocityX = -4;
 // ground.x = ground.width/2;
  bananaGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
  background(255);
  if (ground.x < 0){
    ground.x = ground.width/2;
 }
  
  if(keyDown("space")){
     monkey.velocityY = -10;
     }
  
  if (obstacleGroup.isTouching(monkey)){
   obstacleGroup.setVelocityXEach(0); 
   bananaGroup.setVelocityXEach(0);
    obstacleGroup.setLifetimeEach(-4);
   bananaGroup.setLifetimeEach(-3);
  }
  
//   if (gameState === "end") {
//        // monsterGroup.destroyEach();
//        // fruitGroup.destroyEach();
//        bananaGroup.setVelocityXEach(0);
//        obstacleGroup.setVelocityXEach(0);
//        // restartSprite.visible = true;
//     }
  
  stroke("black");
  textSize(20);
  fill("black")
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time: "+ survivalTime,100,50);
  monkey.velocityY = monkey.velocityY + 0.8;  
  
  monkey.collide(ground);

  monkey.collide(obstacleGroup);
  
  drawSprites();
  bananas (); 
  rocks();
}



function rocks() {
 if (World.frameCount%200===0){
  obstacle = createSprite(200,200,20,20);
  obstacle.addImage("obstacle", obstacleImage);
  obstacle.scale = 0.15;
  obstacle.y = 325;
  obstacle.x = 500;
  obstacle.setLifetime = 50;
  obstacle.velocityX = -6;
  obstacleGroup.add(obstacle);
  
 }
  
  
  
}
function bananas() { 
  if (World.frameCount%80===0)
  { banana = createSprite(200,200,20,20);   banana.addImage("banana", bananaImage); 
   banana.scale = 0.1; 
   banana.y = Math.round(random(10,200));
   //banana.x = 500;
   banana.setLifetime = 50; 
   banana.velocityX = -6;      
   bananaGroup.add(banana); }
  
  }



  