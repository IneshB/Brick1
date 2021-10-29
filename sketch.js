var brick1, brick2, brick3, brick4, brick5, brick6, brick7, brick8, brick9, brick10, brick11, brick12, brick13, brick14, brick15, brick16, brick17, brick18, brick19, brick20, brick21, brick22, brick23, brick24, brick25;
var player;
var play = 1;
var end = 2;
var gameState = play;
var edges;
var score = 0;
var bricksGroup


function setup() {
createCanvas(600, 600)
edges = createEdgeSprites();

player = createSprite(300, 500, 10, 10);


brick1 = createSprite(240, 150, 30, 5);
brick2 = createSprite(360, 150, 30, 5);
brick3 = createSprite(300, 190, 30, 5);
brick4 = createSprite(300, 110, 30, 5);
brick5 = createSprite(300, 150, 30, 5);


brick6 = createSprite(110, 150, 30, 5);
brick7 = createSprite(170, 150, 30, 5);
brick8 = createSprite(50, 150, 30, 5);
brick9 = createSprite(110, 110, 30, 5);
brick10 = createSprite(110, 190, 30, 5);


brick11 = createSprite(490, 150, 30, 5);
brick12 = createSprite(550, 150, 30, 5);
brick13 = createSprite(430, 150, 30, 5);
brick14 = createSprite(490, 110, 30, 5);
brick15 = createSprite(490, 190, 30, 5);


brick16 = createSprite(205, 190, 30, 5);
brick17 = createSprite(205, 230, 30, 5);
brick18 = createSprite(205, 270, 30, 5);
brick19 = createSprite(145, 230, 30, 5);
brick20 = createSprite(265, 230, 30, 5);


brick21 = createSprite(395, 190, 30, 5);
brick22 = createSprite(395, 230, 30, 5);
brick23 = createSprite(395, 270, 30, 5);
brick24 = createSprite(335, 230, 30, 5);
brick25 = createSprite(455, 230, 30, 5);

bricksGroup = new Group;
}

function draw() {
background("lightblue");


player.bounceOff(edges);
//player.bounceOff(brick1);
/*player.bounceOff(brick2);
player.bounceOff(brick3);
player.bounceOff(brick4);
player.bounceOff(brick5);
player.bounceOff(brick6);
player.bounceOff(brick7);
player.bounceOff(brick8);
player.bounceOff(brick9);
player.bounceOff(brick10);
player.bounceOff(brick11);
player.bounceOff(brick12);
player.bounceOff(brick13);
player.bounceOff(brick14);
player.bounceOff(brick15);
player.bounceOff(brick16);
player.bounceOff(brick17);
player.bounceOff(brick18);
player.bounceOff(brick19);
player.bounceOff(brick20);
player.bounceOff(brick21);
player.bounceOff(brick22);
player.bounceOff(brick23);
player.bounceOff(brick24);
player.bounceOff(brick25);*/



if(gameState === play){


if(keyDown(LEFT_ARROW)){
    player.velocityX = -3
}
if(keyDown(DOWN_ARROW)){    
    player.velocityY = 3
}
if(keyDown(UP_ARROW)){
    player.velocityY = -3
}
if(keyDown(RIGHT_ARROW)){
    player.velocityX = 3
}

if(brick1.isTouching(player)){
    brick1.destroy()
    score = score+2
}

if(brick2.isTouching(player)){
    brick2.destroy()
    score = score+2
}

if(brick3.isTouching(player)){
    brick3.destroy()
    score = score+2
}

if(brick4.isTouching(player)){
    brick4.destroy()
    score = score+2
}

if(brick5.isTouching(player)){
    brick5.destroy()
    score = score+2
}

if(brick6.isTouching(player)){
    brick6.destroy()
    score = score+2
}

if(brick7.isTouching(player)){
    brick7.destroy()
    score = score+2
}

if(brick8.isTouching(player)){
    brick8.destroy()
    score = score+2
}

if(brick9.isTouching(player)){
    brick9.destroy()
    score = score+2
}

if(brick10.isTouching(player)){
    brick10.destroy()
    score = score+2
}

if(brick11.isTouching(player)){
    brick11.destroy()
    score = score+2
}

if(brick12.isTouching(player)){
    brick12.destroy()
    score = score+2
}

if(brick13.isTouching(player)){
    brick13.destroy()
    score = score+2
}

if(brick5.isTouching(player)){
    brick5.destroy()
    score = score+2
}

if(brick14.isTouching(player)){
    brick14.destroy()
    score = score+2
}

if(brick15.isTouching(player)){
    brick15.destroy()
    score = score+2
}

if(brick16.isTouching(player)){
    brick16.destroy()
    score = score+2
}

if(brick17.isTouching(player)){
    brick17.destroy()
    score = score+2
}

if(brick18.isTouching(player)){
    brick18.destroy()
    score = score+2
}

if(brick19.isTouching(player)){
    brick19.destroy()
    score = score+2
}

if(brick20.isTouching(player)){
    brick20.destroy()
    score = score+2
}

if(brick21.isTouching(player)){
    brick21.destroy()
    score = score+2
}

if(brick22.isTouching(player)){
    brick22.destroy()
    score = score+2
}

if(brick23.isTouching(player)){
    brick23.destroy()
    score = score+2
}

if(brick24.isTouching(player)){
    brick24.destroy()
    score = score+2
}

if(brick25.isTouching(player)){
    brick25.destroy()
    score = score+2
}

if(score === 50){
    gameState = end;
}

}

else if(gameState === end){
    textSize(15);
    text ("Press 'Space' to Restart", 150, 300);
    player.velocityX = 0;
    player.velocityY = 0;

    if(keyDown(SPACE)){
        gameState = play;
    }
}

textSize(20);
text ("Score"+score, 50, 50);

drawSprites();

}   

