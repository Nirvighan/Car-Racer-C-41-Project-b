//create all the variables
var bgImg;

var car , carImg;

var obs1Img,obs2Img,obs3Img;

var score = 0;

var lives = 100;

var temp = 0;

function preload()
{

  //load all the images
  bgImg = loadImage("bg.png");
  carImg = loadImage("car52.jpg");
  obs1Img = loadImage("obstacles.jpg");
  obs2Img = loadImage("obstacles.jpg");
  obs3Img = loadImage("obstacles.jpg");

}


function setup() 
{

  //create the canvas
  createCanvas(1450,650);

  //createSprite(400, 200, 50, 50);

  //craete the object for background and add image to it also give it velocity
  bg = createSprite(720,320,50,50);
  bg.addImage("bg" , bgImg);
  bg.velocityY = 5;
  bg.scale = 3;
  
  //create the player and add image to it
  car = createSprite(715,600,50,50);
  car.addImage("car" , carImg);
  car.scale = 0.2;


  //create both the road corners
  side1 = createSprite(450,320,10,650);
  side1.shapeColor = "black";

  side2 = createSprite(1000,320,10,650);
  side2.shapeColor = "black";
  


  //create the obstacles group
  ObstaclesGruop = createGroup();


  //call all the functions
  obstacles1();
  obstacles2();
  obstacles3();
}



function draw() 
{
  //clear the background
  background(255);

  
    //make the background look like infinite
    if (bg.y > 400) 
      {
         bg.y = 320;
         console.log("reset");
     }

     //make the car move with arrow keys
     if(keyDown(LEFT_ARROW))
     {
       car.velocityX = -5;

     }

     if(keyDown(RIGHT_ARROW))
     {
       car.velocityX = 5;

     }

     if(keyDown(UP_ARROW))
     {
       car.velocityX = 0;

     }


    //make the car collide with road corners
     
    car.collide(side1);
    car.collide(side2);

    
    

     createEdgeSprites();

     
      
     
    //  obstacles1();
    //  obstacles2();

    //console.log(ObstaclesGruop[0].y);

    
    //make the obstacles reset
    if(ObstaclesGruop[0].y > 650) 
    {
      ObstaclesGruop[0].y = -50;
      score = score + 10;
    }

    if(ObstaclesGruop[1].y > 650) 
    {
      ObstaclesGruop[1].y = -300;
      score = score + 10;
    }

    if(ObstaclesGruop[2].y > 650) 
    {
      ObstaclesGruop[2].y = -500;
      score = score + 10;
    }


    //if the car collide with any obstacle so cut its some life and score
    if(ObstaclesGruop[0].isTouching(car))
    {
     lives = lives - 0.5;
     score = score - 0.5;
     

    }

    if(ObstaclesGruop[1].isTouching(car))
    {
     lives = lives - 0.5;
     score = score - 0.5;
     

    }

    if(ObstaclesGruop[2].isTouching(car))
    {
     lives = lives - 0.5;
     score = score - 0.5;
     

    }
  

    

    
  drawSprites();


  //make the game end
  if(lives === 0)
    {
     

     temp = 1;
     

    }

    if(temp === 1)
    {
   
      textSize(30);
      fill("red");
     text("GAME OVER" , 220,320);

     text("You scored " + score , 180,280);
     bg.velocityY = 0;
     ObstaclesGruop[0].velocityY = 0;
     ObstaclesGruop[1].velocityY = 0;
     ObstaclesGruop[2].velocityY = 0;
     score = score;
     lives = lives;

     ObstaclesGruop[0].isTouching(car) = null;
     ObstaclesGruop[1].isTouching(car) = null;
     ObstaclesGruop[2].isTouching(car) = null;

     
    }


 

    //make the game adaptive
    if(score > 100)
    {

      bg.velocityY = 6;
      ObstaclesGruop[0].velocityY = 6;
      ObstaclesGruop[1].velocityY = 6;
      ObstaclesGruop[2].velocityY = 6;

    }
  

    if(score > 300)
    {

      bg.velocityY = 8;
      ObstaclesGruop[0].velocityY = 8;
      ObstaclesGruop[1].velocityY = 8;
      ObstaclesGruop[2].velocityY = 8;

    }

    if(score > 700)
    {

      bg.velocityY = 10;
      ObstaclesGruop[0].velocityY = 10;
      ObstaclesGruop[1].velocityY = 10;
      ObstaclesGruop[2].velocityY = 10;

    }

    if(score > 1200)
    {

      bg.velocityY = 12;
      ObstaclesGruop[0].velocityY = 12;
      ObstaclesGruop[1].velocityY = 12;
      ObstaclesGruop[2].velocityY = 12;

    }

    if(score > 2000)
    {

      bg.velocityY = 15;
      ObstaclesGruop[0].velocityY = 15;
      ObstaclesGruop[1].velocityY = 15;
      ObstaclesGruop[2].velocityY = 15;

    }

    if(score > 5000)
    {

      bg.velocityY = 18;
      ObstaclesGruop[0].velocityY = 18;
      ObstaclesGruop[1].velocityY = 18;
      ObstaclesGruop[2].velocityY = 18;

    }
  
//show the score and life
  textSize(30);
     fill("red");
     text("Score " + score , 200,50);
     text("Life " + lives , 200 , 100);

     
}


//create functions for all the obstacles
function obstacles1()
{

  //var rand1 = random(60,100);
  console.log("frameRate: ======= " + frameRate().toFixed(2));

  // if(frameRate % 100 === 0)
  {
     var obs1 = createSprite(550,-50,20,20);
     obs1.addImage("obs1" , obs1Img);
     obs1.velocityY = 4;
     obs1.scale = 0.1;

     ObstaclesGruop.add(obs1);
     


  }


}

function obstacles2()
{

  //var rand1 = random(60,100);

  // if(frameRate % 60 === 0)
  {
     var obs2 = createSprite(900,-300,20,20);
     obs2.addImage("obs2" , obs2Img);
     obs2.velocityY = 4;
     obs2.scale = 0.1;
     

     ObstaclesGruop.add(obs2);
     


  }


}

function obstacles3()
{

  //var rand1 = random(60,100);

  // if(frameRate % 60 === 0)
  {
     var obs3 = createSprite(715,-500,20,20);
     obs3.addImage("obs3" , obs3Img);
     obs3.velocityY = 4;
     obs3.scale = 0.1;
     

     ObstaclesGruop.add(obs3);
     


  }


}



