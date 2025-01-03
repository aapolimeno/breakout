export class Ball {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.speed = 1; // Constant speed of the ball
        this.vx = this.speed; // Initial velocity in x direction
        this.vy = this.speed; // Initial velocity in y direction
        this.isMoving = false; // Flag to check if the ball is moving
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }

    update(canvasWidth, canvasHeight, bar) {
        if (!this.isMoving) return;

        // Update ball position
        this.x += this.vx;
        this.y += this.vy;

        // Check for collision with canvas edges
        if (this.x + this.radius > canvasWidth || this.x - this.radius < 0) {
            this.vx = -this.vx; // Reverse x direction
        }
        if (this.y - this.radius < 0) {
            this.vy = -this.vy; // Reverse y direction
        }

        // Check for collision with the bar
        if (this.y + this.radius > bar.y && this.x > bar.x && this.x < bar.x + bar.width) {
            this.vy = -this.vy; // Reverse y direction
        }

        // Check for collision with the bottom of the canvas
        if (this.y + this.radius > canvasHeight) {
            this.isMoving = false; // Stop the ball
        }

        // Normalize the velocity to maintain constant speed
        this.normalizeVelocity();
    }

    normalizeVelocity() {
        const magnitude = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        this.vx = (this.vx / magnitude) * this.speed;
        this.vy = (this.vy / magnitude) * this.speed;
    }

    start() {
        this.isMoving = true;
    }
}