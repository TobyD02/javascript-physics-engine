class Vector2 {
    constructor (x, y){
        this.x = x;
        this.y = y;
    }

    add(v){
        this.x + v.x
        this.y + v.y
    }

    subtract(v){
        this.x - v.x
        this.y - v.y
    }

    distance(v){
        return (Math.sqrt(Math.pow((this.x - v.x), 2) + Math.pow((this.y - v.y), 2)))
    }

    midpoint(v){
        return (new Vector2((this.x + v.x) / 2), (this.y + v.y) / 2)
    }

    dotProduct(v){
        return (this.x * v.x + this.y * v.y)
    }

    multiplyByScalar(s){
        return (new Vector2(this.x * s, this.y * s))
    }

    invert(){
        this.x = -this.x
        this.y = -this.y
    }

}