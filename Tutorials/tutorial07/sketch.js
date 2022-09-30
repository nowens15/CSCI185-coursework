function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // Exercise 1:
    drawCircle(100, 100, 80, 'hotpink');
    drawCircle(200, 100, 40, 'blue');
    drawCircle(300, 100, 80, 'teal');
    drawCircle(400, 100, 40, 'hotpink');

    // Exercise 2: 
    drawOval(200,200,62.5, 100, 'hotpink');
    drawOval(100,200,100, 62.5, 'teal');
    drawOval(300,200,100, 62.5, 'blue');
    drawOval(400,200,62.5, 100, 'teal');
    

    // Exercise 3:
    drawBullseye(100, 300, 100);
    drawBullseye(200, 300, 50);
    drawBullseye(300, 300, 100);
    drawBullseye(400, 300, 50);

    // Exercise 4:
    drawFace(100, 400, 50);
    drawFace(200, 400, 100);
    drawFace(300, 400, 50);
    drawFace(400, 400, 100);

    drawGrid(canvasWidth, canvasHeight);
}


// drawCircle(300, 400, 40, 'yellow');
function drawCircle(centerX, centerY, size, fillColor) {
    fill(fillColor);
    circle(centerX, centerY, size);
}

// modify this function so that it accepts and honors
// the following parameters: centerX, centerY, sizeX, sizeY, and fillColor
function drawOval(centerX, centerY, sizeX, sizeY, fillColor) {
    fill(fillColor);
    ellipse(centerX, centerY, sizeX, sizeY, fillColor);
}


// modify this function so that it accepts and honors
// the following 3 parameters: centerX, centerY, and size
function drawBullseye(centerX, centerY, size, fillColor1='lavender', fillColor2='purple') {
    fill(fillColor1);
    circle(centerX, centerY, size);
    fill(fillColor2);
    circle(centerX, centerY, size * .75);
    fill(fillColor1);
    circle(centerX, centerY, size * .50);
    fill(fillColor2);
    circle(centerX, centerY, size * .25);
}

// modify this function so that it accepts and honors
// the following 3 parameters: centerX, centerY, and size
function drawFace(centerX, centerY, size, faceColor = 'yellow') {
    strokeWeight(2.5);
    fill(faceColor);
    circle(centerX, centerY, size); // 100, 400, 50
    fill('black');
    let sf = size/6;
    circle(centerX-sf, centerY-sf, sf); // left eye
    circle(centerX+sf, centerY-sf, sf); // right eye

    // // make a mouth
    // strokeWeight(3);
    // line(
    //     centerX-sf * 2,
    //     centerY+sf,
    //     centerX+sf * 2,
    //     centerY+sf,
    // ); // x1, y1, x2, y2

    noFill();
    stroke('black');
    strokeWeight(3);
    curve(
        centerX-sf * 2, centerY- 1.25*size,
        centerX-sf * 2, centerY+sf*0.8,
        centerX+sf * 2, centerY+sf*0.8,
        centerX+sf * 2, centerY- 1.25*size,
    )

    // noFill();
    // arc(centerX, centerY size/2, size/2, 0.5, -10,OPEN);
}
