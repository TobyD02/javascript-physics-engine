//Axis Aligned Bounding Box

class AABB{
    constructor(min, max){
        this.min = min
        this.max = max
    }

    colliding(v){
        if (this.max.x < v.min.x || this.min.x > v.max.x) return false
        if (this.max.y < v.min.y || this.min.y > v.max.y) return false

        return true
    }
}

// Circle

class Circle{
    constructor(radius, position){
        this.radius = radius
        this.pos = position
    }

    collidingUnoptimised(c){
        let r = this.radius + c.radius
        console.log(this.pos.distance(c.pos), r)
        return (r > this.pos.distance(c.pos))
    }

    collidingOptimised(c){
        let r = this.radius + c.radius
        r = r * r
        return (r < (Math.pow((this.pos.x + c.pos.x), 2 ) + Math.pow((this.pos.y + c.pos.y), 2)))
    }

    getNormal(c){
        return (c.pos.subtract(this.pos))
    }

    setVelocity(v){
        this.velocity = velocity
    }

    draw(ctx){

    }

    update(){}
}

// Square

class Square{
    constructor(origin, size){
        this.size = size
        this.origin = origin
        this.coords = [
            origin,
            new Vector2(origin.x + this.size, origin.y),
            new Vector2(origin.x + this.size, origin.y + this.size),
            new Vector2(origin.x, origin.y + this.size)
        ]

        this.centre = new Vector2(this.origin.x + size / 2, this.origin.y + size / 2)

        this.maxSpeed = 5
        this.acceleration = new Vector2(0, 0)
        this.velocity = new Vector2(0, 0)

        this.friction = 0.01


    }

    draw(ctx){
        ctx.beginPath()
        ctx.moveTo(this.coords[0].x, this.coords[0].y)
        ctx.lineTo(this.coords[1].x, this.coords[1].y)
        ctx.lineTo(this.coords[2].x, this.coords[2].y)
        ctx.lineTo(this.coords[3].x, this.coords[3].y)
        ctx.lineTo(this.coords[0].x, this.coords[0].y)
        ctx.stroke()
        ctx.closePath()
    }

    update(){

        // Movement
        let distanceToEnd = this.velocity.magnitude()
        if (distanceToEnd < this.maxSpeed) this.velocity = this.velocity.add(this.acceleration)

        this.coords.forEach((pos) => {
            if (pos.x + this.velocity.x > canvas.width || pos.x + this.velocity.x < 0) {
                this.velocity.x = -this.velocity.x
                this.acceleration.x = -this.acceleration.x
            }

            if (pos.y + this.velocity.y > canvas.height || pos.y + this.velocity.y < 0){
                this.velocity.y = -this.velocity.y
                this.acceleration.y = -this.acceleration.y
            }
        })

        this.origin = this.origin.add(this.velocity)

        this.coords = [
            this.origin,
            new Vector2(this.origin.x + this.size, this.origin.y),
            new Vector2(this.origin.x + this.size, this.origin.y + this.size),
            new Vector2(this.origin.x, this.origin.y + this.size)
        ]

        this.acceleration = this.acceleration.subtract(this.acceleration.multiplyByScalar(this.friction))

        this.velocity = this.velocity.multiplyByScalar(this.friction)
        if (this.velocity.magnitude() < 0.1) this.velocity = new Vector2(0, 0)
        if (this.acceleration.magnitude() < 0.1) this.acceleration = new Vector2(0, 0)
    }

    rotate(angle){

        let s = Math.sin(angle);
        let c = Math.cos(angle);

        for (let i = 0; i < this.coords.length; i++){

            let p = this.coords[i]

            // translate point back to origin:
            p.x -= this.centre.x;
            p.y -= this.centre.y;

            // rotate point
            let xnew = p.x * c - p.y * s;
            let ynew = p.x * s + p.y * c;

            // translate point back:
            p.x = xnew + this.centre.x;
            p.y = ynew + this.centre.y;
            
            this.coords[i] = p
        }
    }
}