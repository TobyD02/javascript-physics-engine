class Object {
    constructor(x, y, size, physics, type){

        // Set parameters to field variables
        this.x = x;
        this.y = y;
        this.size = size;
        this.physics = physics;
        this.type = type;

        // Set physics variables
        this.gravity = 0.05;
        this.velX = 0;
        this.velY = 0;
        this.accX = 0;
        this.accY = 0;

        // Set other variables
        this.colour = "black";

    }

    update(colliders){

        /*
        Handle physics
        - Check for collisions
        - Move accordingly
         */

        // Apply gravity
        this.accY += this.gravity;

        // Accelerate
        this.velX += this.accX;
        this.velY += this.accY;

        // Handle Collisions
        for (let collider in colliders){
            // Look through array of collidables and check if collides
            if (collide(collider)){
                // Do something
            }
        }

        // Move
        this.x += this.velX;
        this.y += this.velY;

        // Limit acceleration and velocity
        if (this.accX > 5){
            this.accX = 5;
        }
        if (this.accY > 5){
            this.accY = 5;
        }

        if (this.velX > 10){
            this.velX = 10;
        }
        if (this.velY > 5){
            this.velY = 5;
        }



        // Draw object to screen
        draw()
    }

    collide(col){
        // Handled by child
    }

}

class Square extends Object{
    constructor() {
        super();
    }

    collide(col){

        if (col.type === "square"){

            if (this.x < col.x + this.width && col.x + this.width > col.x &&
                this.y < col.y + this.height && col.y + this.height > col.y) {

                return true;
            }

        }

        if(col.type === "circle"){

            // Find area contained in square
            // Check that this doesn't overlap with circle



        }

    }

    draw(){
        ctx.fillStyle = this.colour;
        ctx.fillRect(this.x, this.y, this.size, this.size);
    }

}
class Circle extends Object{
    constructor() {
        super();
    }

    draw(){

    }
}