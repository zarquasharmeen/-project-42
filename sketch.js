var monkey , monkey_running;
var banana ,bananaImage,bananaGroup;
var obstacle, obstacleImage, obstacleGroup;
var survivalTime=0;
var ground;
var bg ;
var bg1,score=0;


function preload(){
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  bg = loadImage("jungle.jpg");
  
  }

function setup() {
  createCanvas(800,400);
bg1=createSprite(0,0,800,400); bg1.addImage(bg); bg1.scale=1.5; bg1.x=bg1.width/2; bg1.velocityX=-4;

  
  
  
  
  monkey=createSprite(60,360);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  
  ground=createSprite(400,395,800,10);
  ground.velocityX=-3;
  ground.x=ground.width/2;
  ground.visible=false;
  
  
  bananaGroup=createGroup();
  obstacleGroup=createGroup();
  
  
  
  }

function draw() {

  
  if(bg1.x<100){
    bg1.x=bg1.width/2;
    
  }
  if (ground.x < 0){
  ground.x = ground.width/2;
  }
  
 if(bananaGroup.isTouching(monkey)){
   bananaGroup.destroyEach();
   score=score+2;
 } 
 
  
  
  
  
  if(keyDown("space")&& monkey.y>=300) {
  monkey.velocityY=-20;
  }
  monkey.velocityY=monkey.velocityY+0.8;
  
  monkey.collide(ground);
  
  food.depth=monkey.depth;
  monkey.depth=monkey.depth+1;
  
  stroke("black");
  textSize(20);
  fill("blue");
  survivalTime=Math.round(frameCount/33);
  text("Survival Time: "+survivalTime,120,30);
  
 
  
  food();
  obstacles();
  if(obstacleGroup.isTouching(monkey)){
    bg1.velocityX=0;
    obstacleGroup.destroyEach();
    bananaGroup.destroyEach();
    textSize(30);
    text("gameOver",300,200);
    
  }
   
  
  
  
  
  
  obstacles.visible=true;
  drawSprites();
text("score="+score,500,50); 


}

function food(){
  if (frameCount % 80 === 0){
  banana=createSprite(400,200);
  banana.y=Math.round(random(120,200));
  banana.addImage(bananaImage);
  banana.scale=0.1;
  banana.velocityX=-5;
  banana.lifetime=150;
  bananaGroup.add(banana);
}
}

function obstacles(){
  if (frameCount % 200 === 0){
  obstacle=createSprite(400,370);
  obstacle.addImage(obstacleImage);
  obstacle.scale=0.1;
  obstacle.velocityX=-10;
  obstacle.lifetime=150;
  obstacleGroup.add(obstacle);
}
}
