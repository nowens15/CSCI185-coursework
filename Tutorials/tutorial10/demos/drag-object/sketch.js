const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    circle(data.x, data.y, data.d);
}

const data = {
    x: 100,
    y: 100,
    d: 100,
    color: 'white'
}

const data1 = {
    x: 200,
    y: 200,
    d: 200,
    color: 'white'
}

let activeShape = data;

function mouseDragged() {
   { activeShape.x = mouseX;
    activeShape.y = mouseY;
    // let d = dist(data.x, data.y, mouseX, mouseY);
    // if (d < data.d/2 || data.color == 'red') {
    //     data.color = 'red';
    //     data.x = mouseX;
    //     data.y = mouseY;
    } 
}

function mouseClicked() {
    let distance = (data.x, data.y, mouseX, mouseY);
    if (distance < data.d/2) {
    activeShape = data;
} else {
    activeShape = data1;
}

function mouseReleased() {
    data.color = 'white';
}

// function mouseClicked() {
//     //how do i move the first circle (data) to where
//     // I just clicked the mouse?
//     data.x = mouseX;
//     data.y = mouseY;
// }

function draw() {
    clear();
    fill(data.color);
    circle(data.x, data.y, data.d);
    circle(data1.x, data1.y, data1.d);

    // message
    fill('black');
    textAlign(CENTER);
    textSize(16);
    text("Drag the circle.", canvasWidth/2, canvasHeight/2);
}