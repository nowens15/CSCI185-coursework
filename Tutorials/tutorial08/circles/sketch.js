function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
    noFill();


    let x = canvasWidth/2;
    let y = canvasHeight/2;
    let size = canvasWidth;
    let fillColor = 'blue';
    while(size >= 25) {
        if (fillColor == 'yellow') {
            fillColor = 'lavendar';
        } else {
            fillColor = 'yellow';
        }
        fill(fillColor);
        circle(x,y,size);
        size -= 25;
    }

    // fill('red');
    // circle(y + 100, y, 50);
    // fill('orange');
    // circle(y + 200, y, 50);
    // fill('red');
    // circle(y + 300, y, 50);
    // fill('orange');
    // circle(y + 400, y, 50);
    // fill('red');
    // circle(y + 500, y, 50);
    // fill('orange');
    // circle(y + 600, y, 50);
    // y += 50;
 
    drawGrid(canvasWidth, canvasHeight);
}
