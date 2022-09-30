function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);
    background("grey");

drawSmiley(10, 70, 500);
drawSmiley(25, 100, 900);
drawSmiley(10, 70, 500);
drawSmiley(10, 70, 500);
drawSmiley(10, 70, 500);

    drawGrid(canvasWidth, canvasHeight)
}



function drawSmiley(x, y, diameter) {
    fill('yellow');
    circle(x, 7, diameter);
}
