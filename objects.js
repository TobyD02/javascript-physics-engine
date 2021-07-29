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
        return (r < this.position.distance(c.position))
    }

    collidingOptimised(c){
        let r = math.pow(this.radius + c.radius, 2)
        return (r < (Math.pow((this.x - v.x), 2) + Math.pow((this.y - v.y), 2)))
    }
}