// Start by declaring basic variables
const canvas = document.querySelector('canvas')
const generateButton = document.querySelector('.generate-tree-button')
canvas.width = window.innerWidth; //canvas width sets to window width
canvas.height = window.innerHeight; //same with height

// Call get context method on canvas 
// Pass it to the attribute
// This will create cavas rendering context to the object which contains all the canvas methods we need
// Saving this object in var ctx
const ctx = canvas.getContext('2d');


// Main function cadrawTree
// Will take paprameters that will define configuration settings for tree


// StartX StartY  - starts where tree will grow
// len            - length of the first line
// angle 
// branchWidth    - how thick branches are
// color1         - main body of tree
// color2         - leaves

function drawTree(startX, startY, len, angle, branchWidth, color1, color2){
    ctx.beginPath();
    ctx.save(); // - Saves the current state of canvas
    ctx.strokeStyle = color1; 
    ctx.fillStyle = color2;
    ctx.lineWidth = (branchWidth);
    ctx.translate(startX, startY); // - Moves canvas along x and y axis
    ctx.rotate(angle * Math.PI/180); // - Rotate an angle, forumula to convert deg => radient?
    ctx.moveTo(0,0); //  - Move point of canvas to ?? the begin set path by points from x and y coords
    ctx.lineTo(0, -len); // - 2 values x & y, x=0 y=len(len of 1 tree segment) -len = tree go upwards
    ctx.stroke(); // Draw line

    if(len < 10){
        ctx.restore();
        return;
    }

    drawTree(0, -len, len * 0.75, angle + 3, branchWidth); // make branches go dif direction
    drawTree(0, -len, len * 0.75, angle - 76, branchWidth);

    ctx.restore();
};

drawTree(canvas.width/2, canvas.height -80, 120, 0, 2, 'pink', 'blue');