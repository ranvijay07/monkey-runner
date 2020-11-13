
var monkey , monkey_running;
var banana ,bananaImage, obstacleImage;
var FoodGroup, obstacleGroup;
var ground;
var survivalTime=0;
var gameState="play";


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(600,600)
  
    ground=createSprite(400,350,2000,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x)
  
  monkey=createSprite(80,315,5,5);
  monkey.scale=0.1;
  monkey.addAnimation("monkey",monkey_running);
  
  

 
  foodGroup=new Group();
  obstacleGroup=new Group();
}


function draw() {
  background("white");
  
  if(gameState==="play"){
  
  if (ground.x<0) {
      ground.x = ground.width / 2;
    }
  
  if(keyDown("space")){
    monkey.velocityY=-15;
  }
    monkey.velocityY=monkey.velocityY+0.5;
  
   if(foodGroup.isTouching(monkey)){
     foodGroup.destroyEach();
   }
   

  monkey.collide(ground);
  
  
  
  spawnBanana();
  spawnObstacle();
  }
  
  
  drawSprites();
  
  stroke("black");
  textSize(20);
  fill("black");  
  text("survival time "+survivalTime,100,50);
  survivalTime+=Math.round(frameRate()/60);
  
  
  
  
}

function spawnBanana(){
  
  if(frameCount%80===0){
    food=createSprite(550,300,5,5);
    food.addImage("banana",bananaImage);
    food.y=Math.round(random(80,200));
    food.scale=0.1;
    food.velocityX=-3;
    food.lifeTime=800;
    foodGroup.add(food);
    
    monkey.depth=food.depth;
    monkey.depth=monkey.depth+1;
    
  }  
}

function spawnObstacle(){
  
  if(frameCount%300===0){
    obstacle=createSprite(500,330,5,5);
    obstacle.velocityX=-3;
    obstacle.scale=0.1;
    obstacle.addImage("obstacle",obstacleImage)
    obstacle.lifeTime=800;
    obstacleGroup.add(obstacle);
  }  
}



