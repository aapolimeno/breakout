export class Bar {
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width; 
        this.height = height; 
        this.color = color; 
        this.speed = 18;
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    moveLeft() {
        if (this.x > 0) {
        this.x -= this.speed;
        }
    }

    moveRight(canvasWidth) {
        if (this.x + this.width < canvasWidth) {
        this.x += this.speed;
        }
    }

}