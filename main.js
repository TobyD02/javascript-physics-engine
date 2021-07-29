canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d")

canvas.width = 600
canvas.height = 600

function draw(){
    ctx.fillRect(0, 0, canvas.width, canvas.height)
}

//setInterval(draw, 5)  