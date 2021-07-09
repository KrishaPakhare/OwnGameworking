class Game {
    constructor(){
        this.level1Button = createSprite(width/2 + 300,height/2+200);
        this.level1Button.scale = 0.5;
        this.level2Button = createSprite(width/2+300,height/2+100);
        this.level2Button.visible = false;
        this.john  = createSprite(width/2-300, height/2+200);
        this.john.addImage(boyImg);
        this.john.scale = 0.5;
        this.emma = createSprite(width/2 , height/2 + 200);
        this.emma.addImage(girlImg);
        this.level1Button.addImage(level1ButtonImg);
        this.level2Button.addImage(level2ButtonImg);
        this.characterPicked = false;
        this.character = "girl";
        this.tick = createSprite(width/2,height/2+30,10,10);
        this.tick.addImage(tickImg)
        this.tick.scale = 0.2;
        this.player = createSprite(100 , height/2 );
        this.player.visible = false;
        this.recyclableItems = [];
        this.nonRecyclableItems = []

    }
start(){
    if(gameState === 0){
    //background (bgImg)
    image(bgImg,150,-50,width-500,height)
    textFont("Algerian")
    textSize(55)
    fill("blue")
    text("WELCOME TO SCAVENGER - HUNT ",width/2-450 , height/2-280)
    textFont("Bahnschrift SemiBold")
    textSize(24)
    fill("black")
    text(" A girl/boy named emma/john were studying about recycling in their chapter of science \n So they started thinking about this and  wanted to try to apply this in their real life \n They tried to do so but didn't received any much response.\n So they wrote a tagline for their work 'DON'T BE A PUCK ! RECYCLE UR JUNK !!'\n They want your support to make the world Better \n Will you join them ?",width/2-525 , height/2-150)
    if(mousePressedOver(this.john)){
        this.characterPicked = true ; 
        this.character = "boy";
        this.tick.x = width/2 - 320
    
    }
    else if (mousePressedOver(this.emma)){
        this.characterPicked = true ;
        this.character = "girl";
        this.tick.x = width/2 ; 

    }
    if(mousePressedOver(this.level1Button)){
        gameState = 1;
        this.createRecyclableItems();
        this.john.visible = false ;
        this.emma.visible = false;
        this.level1Button.visible = false;
        this.tick.visible = false;
        if(this.character=== "girl"){
            this.player.addImage(girlImg)
        }
        else{
            this.player.addImage(boyImg)
            this.player.scale= 0.5;
        }
        this.player.visible = true ; 
    }
}
}  
play(){
   background("#C9E4C5");
   fill("#C1AC95")
   noStroke();
   rect(0,0,width,50)
   fill("#4C4C6D")
   textSize(35)
   textFont("Consolas")
   text("Collect the recyclable items",width/2-600, 35)
   textSize(35)
   text("Timeleft :",width/2,35)
   text("Items collected :",width/2+200 ,35)


}  
end(){

}
createRecyclableItems (){
    var item1 = createSprite(200,200,100,100);
}    
}