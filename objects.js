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

class Circle {
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
}   