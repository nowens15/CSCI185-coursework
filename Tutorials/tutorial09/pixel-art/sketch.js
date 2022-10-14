const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

const heart = [
    [0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 2, 2, 3, 1, 1, 1, 1, 1, 1, 1, 2, 2, 3, 1, 1, 1],
    [1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1],
    [1, 1, 1, 2, 2, 2, 1, 2, 1, 1, 1, 2, 1, 2, 2, 2, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0]
];

const frank = [
    [0, 0, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 2, 2, 2, 2, 2, 0, 0],
    [0, 0, 2, 2, 2, 2, 2, 0, 0],
    [0, 0, 2, 1, 2, 1, 2, 0, 0],
    [0, 0, 2, 2, 2, 2, 2, 0, 0],
    [0, 2, 3, 3, 3, 3, 3, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 0, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 2, 2, 0, 2, 2, 0, 0]
];
    
function setup() {
    createCanvas(canvasWidth, canvasHeight);
    drawGrid(canvasWidth, canvasHeight);
    drawPixelArt(heart, 100, 100, 10);
    drawPixelArt(frank, 500, 100, 10);
    drawPixelArt(heart, 400, 400, 10);

    // let x = 150;
    // let y = 150;
    // let pixel = 25;
    // let i = 0;

    // // first 6 rows of frank
    // drawRow(frank[0], 150, 150, 25);
    // drawRow(frank[1], 150, 175, 25);
    // drawRow(frank[2], 150, 200, 25);
    // drawRow(frank[3], 150, 225, 25);
    // drawRow(frank[4], 150, 250, 25);
    // drawRow(frank[5], 150, 275, 25);

    // // first 6 rows of the heart
    // drawRow(heart[0], 450, 350, 15);
    // drawRow(heart[1], 450, 365, 15);
    // drawRow(heart[2], 450, 380, 15);
    // drawRow(heart[3], 450, 395, 15);
    // drawRow(heart[4], 450, 410, 15);
    // drawRow(heart[5], 450, 425, 15);
   
}

function drawPixelArt(grid, x, y, pixel) {
    let i = 0;
    while ( i < grid.length) {
        drawRow (grid [i], x, y, pixel);
        i++;
        y += pixel;
    }
}

function drawRow (row, topX, topY, pixelWidth) {
    //row = [0,1,1,2,1,0]
    // 0 transparent
    // 1 yellow
    // 2 grey
    // 3 lavender
    let i = 0;
    while (i < row.length) {
        if (row[i] == 0) {
            noFill();
        } else if (row [i] == 1) {
            fill('yellow');
        } else if (row[i] == 2) {
            fill('grey');
        } else {
            fill('lavender');
        }
    
        square(topX, topY, pixelWidth)
        topX += pixelWidth;
        i++;
    }

    

}