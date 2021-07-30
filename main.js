canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d")

canvas.width = 600
canvas.height = 600

let a = new Square(new Vector2(10, 10), 50)

function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.strokeRect(0, 0, canvas.width, canvas.height)
    a.update()
    a.draw(ctx)
    // console.log(a.origin)
}


setInterval(draw, 5)  