canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d")

canvas.width = 600
canvas.height = 600

function draw(){
    ctx.fillRect(0, 0, canvas.width, canvas.height)
}

x = new Vector2(3, 4)
y = new Vector2(1, 1)
console.log(x.sizeof())
console.log(x.add(y))


//setInterval(draw, 5)