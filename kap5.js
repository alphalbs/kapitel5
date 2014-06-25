// Initialize Phaser
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game_div', {preload: preload, create: create, update: update});
var counter_right, tries;

// Load assets
function preload() {

    game.load.image('placeholder', 'assets/placeholder_small.png');
    game.load.image('placeholder_back', 'assets/placeholder_small_back.png');

    game.load.image('background', 'assets/background.jpg');
}

// Create game screen and wait for input
function create() {
    counter_right = 0;
    tries = 0;
    var background = game.add.sprite(0, 0, 'background');

    createButtons();
    createCounter();
}

function createCounter() {
    var style_tries = { font: "65px Arial", fill: "#000000" };
    num_tries = game.add.text(50, 30, ""+tries, style_tries);
    var style_right = { font: "65px Arial", fill: "#000000" };
    num_right = game.add.text(650, 30, ""+right, style_right);
}

function update() {

}

function createButtons() {

    for (var j = 0; j < 5; j++) {
        for (var i = 0; i < 7; i++) {
            game.add.sprite(60 + i * 100, 60 + j * 100, 'placeholder');
        }
    }

    // var btn = game.add.sprite(60, 60, 'placeholder');
    // btn.inputEnabled = true;
    // btn.onInputDown.add(function() { this.loadTexture('placeholder_small_back', 0); }, this);
}
