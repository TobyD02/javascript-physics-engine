
// Create canvas
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 1000;
canvas.height = 500;


// Declare objects
x = new Object(10, 10, 50, true);


function draw(){
    // Clear canvas before drawing
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw elements

    x.update();

    // Outline of canvas
    ctx.lineWidth = 5;
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
}


setInterval(draw, 5);