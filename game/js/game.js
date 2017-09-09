var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// Background image
var bgImage = new Image();
bgImage.src = "img/background.png";

// Hero Image
var heroImage = new Image();
heroImage.src = "img/hero.png";

// Game objects
speed = 10; // movement in pixels per second
x = 0;
y = 0;

// Handle keyboard controls
var keysDown = {};

addEventListener("keydown", function(e) {
    keysDown[e.keyCode] = true;
    console.log(keysDown) // See what's going on
}, false);

addEventListener("keyup", function(e) {
    delete keysDown[e.keyCode];
}, false);

// The main game loop
function main() {
    if (38 in keysDown) y -= speed; // UP
    if (40 in keysDown) y += speed; // DOWN
    if (37 in keysDown) x -= speed; // LEFT
    if (39 in keysDown) x += speed; // RIGHT

    ctx.drawImage(bgImage, 0, 0);
    ctx.drawImage(heroImage, x, y);

    // recursion
    requestAnimationFrame(main);
};

// Let's play the game!
main();
