let x = 100;
let y = 100;

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;

const frogs = [];

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    let frogx = 100;
    for (let i = 0; i < 8; i++) {
        frogs.push(
            { x: frogx, y: 500, size: 75, offset: Math.random()*3 }
        );
        frogx += 200;
    }
    frogx = 100;
    for (let i = 0; i < 8; i++) {
        frogs.push(
            { x: frogx, y: 700, size: 75, offset: Math.random()*3 }
        );
        frogx += 200;
    }
    frogx = 100;
    for (let i = 0; i < 8; i++) {
        frogs.push(
            { x: frogx, y: 900, size: 75, offset: Math.random()*3 }
        );
        frogx += 200;
    }
    console.log(frogs);
}

let counter = 0;

function draw() {

    clear();

    for (let i = 0; i < frogs.length; i++) {
        drawFrog(frogs[i].x, frogs[i].y, frogs[i].size, 'green', 'white', 'black');
        // console.log (frogs[i]);
        frogs[i].y += (Math.cos(counter/13+frogs[i].offset)*5);
    }
    ++counter;

    drawNoface(x, y, 100, 'white', 'black');
    // drawGrid(canvasWidth, canvasHeight);
}

// define your drawNoface function here:
function drawNoface(x, y, size, primaryColor = '#5e6976', secondaryColor = '#1b324d', tertiaryColor = 'lavender', maskColor='white', bodyColor='black') {
    fill(primaryColor);
    strokeWeight(3);
        
    //body
    fill(bodyColor);
    rect(x-50, y-15,size*1, size*2.45);

    //mask
    fill(maskColor);
    ellipse(x, y, size, size * 1.5);
    fill(secondaryColor);

    //eyes
    ellipse(x - size / 4, y - size / 7, size / 4, size / 8.5);
    ellipse(x + size / 4, y - size / 7, size / 4, size / 8.5);

    //left bottom triangle
    fill(tertiaryColor);
    beginShape();
    vertex(x - size / 3.5, y - size / 20);//left top
    vertex(x - size / 4.25, y + size / 5);//bottom
    vertex(x - size / 5, y - size / 20);//right top
    endShape(CLOSE);
    //right bottom triangle
    beginShape();
    vertex(x + size / 3.5, y - size / 20);//left top
    vertex(x + size / 4.25, y + size / 5);//bottom
    vertex(x + size / 5, y - size / 20);//right top
    endShape(CLOSE);
    //left top triangle
    beginShape();
    vertex(x - size / 3.5, y - size / 4);//left top
    vertex(x - size / 4.25, y - size / 2);//bottom
    vertex(x - size / 5, y - size / 4);//right top
    endShape(CLOSE);
    //right top triangle
    beginShape();
    vertex(x + size / 3.5, y - size / 4);//left top
    vertex(x + size / 4.25, y - size / 2);//bottom
    vertex(x + size / 5, y - size / 4);//right top
    endShape(CLOSE);
    //mouth
    fill(secondaryColor);
    ellipse(x, y + size / 2.5, size / 2.5, size / 9.5);

}

//define drawFrog function here:
function drawFrog(x, y, size, primaryColor = 'green', scleraColor = 'white', pupilColor = 'black', mouthColor = 'black') {
    fill(primaryColor);
    strokeWeight(0);

    //head
    ellipse(x, y + 2, size, size / 2);

    //left eyelid
    circle(x - size / 4, y - size / 7, size / 3.5);

    //right eyelid
    circle(x + size / 4, y - size / 7, size / 3.5);
    fill(scleraColor);

    //left sclera
    circle(x - size / 4, y - size / 7, size / 5.5);

    //right sclera
    circle(x + size / 4, y - size / 7, size / 5.5);
    fill(pupilColor);

    //left pupil
    circle(x - size / 4, y - size / 7, size / 15);

    //right pupil
    circle(x + size / 4, y - size / 7, size / 15);

    //mouth
    fill(mouthColor);
    ellipse(x, y + size / 10, size / 2.5, size / 9.5);
}

function moveController(ev) {
    console.log(ev.code);
    if (ev.code == 'ArrowUp') {
        console.log('up arrow!');
        console.log(y);
        y -= 3;
    } else if (ev.code == 'ArrowDown') {
        console.log('down arrow!');
        y += 3;
    } else if (ev.code == 'ArrowLeft') {
        console.log('left arrow!');
        x -= 3;
    } else if (ev.code == 'ArrowRight') {
        console.log('right arrow!');
        x += 3;
    }

}
// Add event listener on keydown
document.addEventListener('keydown', moveController);