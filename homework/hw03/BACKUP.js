function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // Once you've created your drawCreature function, 
    // invoke drawCreature 5 times with the following arguments
    // (feel free to change the sizes, positions, and colors):
    
    drawCreature(292, 300, 400, '#5e6976', '#1b324d');
    drawCreature(687, 300, 200, '#bfdc65', '#abb880');
    // drawCreature(454, 423, 141, '#aebb83', '#227876');
    // drawCreature(333, 227, 99, '#94ba77', '#3f5364');
    // drawCreature(117, 314, 91, '#648d8e', '#afc272');
    
    drawGrid(canvasWidth, canvasHeight);
}

// define your drawCreature function here:
function drawCreature(x, y, size, primaryColor='#5e6976', secondaryColor='#1b324d'){
    fill(primaryColor);
    ellipse(x,y,size,size*1.5);
    fill(secondaryColor);
    ellipse(x-size/4,y-size/7,size/4, size/8.5);
    ellipse(x+size/4,y-size/7,size/4, size/8.5);
    beginShape();
    vertex(x-size/3.5, y-size/20);//left top
    vertex(x-size/4.25, y+size/5);//bottom
    vertex(x-size/5, y-size/20);//right top
    endShape(CLOSE);
    beginShape();
    vertex(x+size/3.5, y-size/20);//left top
    vertex(x+size/4.25, y+size/5);//bottom
    vertex(x+size/5, y-size/20);//right top
    endShape(CLOSE);
    
}

