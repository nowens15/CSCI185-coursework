function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // Once you've created your drawCreature function, 
    // invoke drawCreature 5 times with the following arguments
    // (feel free to change the sizes, positions, and colors):
    
    drawCreature(292, 400, 400, 'white', 'black');
    drawCreature(687, 300, 200, 'white', 'green', 'hotpink');
    drawCreature(700, 600, 141, '#aebb83', '#227876');
    drawCreature(900, 400, 99, '#94ba77', '#3f5364');
    drawCreature(900, 700, 91, '#648d8e', '#afc272');
    
    drawGrid(canvasWidth, canvasHeight);
}

// define your drawCreature function here:
function drawCreature(x, y, size, primaryColor='#5e6976', secondaryColor='#1b324d', tertiaryColor='lavender'){
    fill(primaryColor);
    strokeWeight(3);
    ellipse(x,y,size,size*1.5);
    fill(secondaryColor);
    ellipse(x-size/4,y-size/7,size/4, size/8.5);
    ellipse(x+size/4,y-size/7,size/4, size/8.5);
   //left bottom triangle
    fill(tertiaryColor);
    beginShape();
    vertex(x-size/3.5, y-size/20);//left top
    vertex(x-size/4.25, y+size/5);//bottom
    vertex(x-size/5, y-size/20);//right top
    endShape(CLOSE);
    //right bottom triangle
    beginShape();
    vertex(x+size/3.5, y-size/20);//left top
    vertex(x+size/4.25, y+size/5);//bottom
    vertex(x+size/5, y-size/20);//right top
    endShape(CLOSE);
    //left top triangle
    beginShape();
    vertex(x-size/3.5, y-size/4);//left top
    vertex(x-size/4.25, y-size/2);//bottom
    vertex(x-size/5, y-size/4);//right top
    endShape(CLOSE);   
    //right top triangle
    beginShape();
    vertex(x+size/3.5, y-size/4);//left top
    vertex(x+size/4.25, y-size/2);//bottom
    vertex(x+size/5, y-size/4);//right top
    endShape(CLOSE);   
    //mouth
    fill(secondaryColor);
    ellipse(x,y+size/2.5,size/2.5, size/9.5);
}

