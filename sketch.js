var player, brick1, brick2, brick3, brick4, ball;
var gameState = 0



function setup() {
createCanvas(600, 600)

player = createSprite(300, 500, 50, 10 );
brick1 = createSprite(250, 150, 30, 5);
brick2 = createSprite(350, 150, 30, 5);
brick3 = createSprite(300, 200, 30, 5);
brick4 = createSprite(300, 100, 30, 5);
}

function draw() {
background("lightblue");
drawSprites()
}

