const SCREEN_WIDTH = 480;
const SCREEN_HEIGHT = 320;
const DEFAULT_SPEED = 1;

var game = new Phaser.Game(SCREEN_WIDTH, 
						   SCREEN_HEIGHT, 
						   Phaser.AUTO, 
						   null, 
						   {preload: preload, create: create, update: update});

var ball;

function preload() {
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    game.stage.backgroundColor = '#eee';

    // load the ball assets
    game.load.image('ball', 'static/img/ball.png');
}

function create() {
    ball = game.add.sprite(50, 50, 'ball');
}

function update() {
	ball.x += DEFAULT_SPEED;
	ball.y += DEFAULT_SPEED;
}
