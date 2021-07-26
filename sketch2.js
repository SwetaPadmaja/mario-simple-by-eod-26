function preload(){
   
       towerimg1 = loadImage("towers/1.png");
       towerimg2 = loadImage("towers/2.png");
       towerimg3 = loadImage("towers/3.png");
       towerimg4 = loadImage("towers/4.png");
       towerimg5 = loadImage("towers/5.png");
       towerimg6 = loadImage("towers/6.png");
       towerimg7 = loadImage("towers/7.png");
   
   }

   function setup() { 
    createCanvas(1200, 400);
    ground = createSprite(600,390,1200,10);
    mario = createSprite(50,200,10,10);
     
    invisibleground = createSprite(600,375,1200,10);
    invisibleground.visible = false;
     
    towersGroup = new Group();
    
  
  
  }
  
function draw() {
    background("black");

      text(mouseX+","+mouseY, mouseX, mouseY)
      
      ground.velocityX = 0;
          //count= count +0.1;
       
      if(keyDown("SPACE")){ 
        mario.velocityY = -12;
        mario.velocityX=0.5 
      }
  
      
      mario.velocityY = mario.velocityY + 0.5;
      spawntowers();
      if(towersGroup.isTouching(mario)){
          for(var i=0;i<towersGroup.length;i++){     
              
           if(towersGroup[i].isTouching(mario)){
               // mario.collide(towersGroup[i]);
               mario.y=towersGroup[i].y;
                mario.velocityX=0;
                mario.velocityY=0;
                } 
          
          } 
        }  
    mario.collide(invisibleground);
    drawSprites();
    //console.log(mario.y);  
  }
  


  function spawntowers(){
    if(frameCount %100  === 0){
      towers = createSprite(1200,260,10,200);
     towers.setCollider("rectangle",0,0,towers.width, towers.height)
      towers.debug=true;
      var rand= Math.round(random(1,7));
      switch(rand){
      case 1: towers.addImage("towers",towerimg1);
              
              break;
       case 2: towers.addImage("towers1",towerimg2);
              
              break;    
      case 3: towers.addImage("towers2",towerimg3);
         
              break;
      case 4: towers.addImage("towers3",towerimg4);
         
              break;    
      case 5: towers.addImage("towers4",towerimg5);
         
              break;
      case 6: towers.addImage("towers5",towerimg6);
         
              break;
      case 7: towers.addImage("towers6",towerimg7);
         
              break;
      default : break;
  
      }
      
     towers.velocityX = -3;
      towers.scale = 0.5;
      console.log(towers.y);
      towers.lifetime = 240;
      //towersGroup.collide(ground)
      towersGroup.add(towers);  
      
    
    }
  }
