var clouds,cloudsImage;
var runner,runnerImg;

function preload(){

    cloudsImage=loadImage("clouds.png");
    
}

function setup() {
    
    clouds=createSprite(400,200);
    clouds.addImage(cloudsImage);
    clouds.velocityX = -5;
    clouds.scale=0.3;
    clouds.x = clouds.width;
}


function draw() {
    if(clouds.x < 0){
        //clouds.x = 0;
        clouds.x = clouds.width/12;
    }
 drawSprites();
}
