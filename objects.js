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