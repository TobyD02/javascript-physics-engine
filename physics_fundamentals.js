class Vector2 {
    constructor (x, y){
        this.x = x;
        this.y = y;
    }

    add(v){
        return (new Vector2(this.x + v.x, this.y + v.y))
    }

    subtract(v){
        return (new Vector2(this.x - v.x, this.y - v.y))
    }

    sizeof(){
        return (Math.sqrt(Math.pow(this.x, 2), Math.pow(this.y, 2)))
    }

    midpoint(v){
        return (new Vector2((this.x + v.x) / 2), (this.y + v.y) / 2)
    }

}