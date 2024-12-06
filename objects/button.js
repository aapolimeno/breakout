export class Button {
    constructor(x, y, width, height, label, fillColor, textColor) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.label = label;
        this.fillColor = fillColor;
        this.textColor = textColor;
    }

    draw(ctx) {
        // Draw the button background 
        ctx.fillStyle = this.fillColor;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        
        // Set text styles
        ctx.fillStyle = this.textColor;
        
        ctx.font = "24px serif"; // Adjust font size if needed
        ctx.textAlign = "center"; // Center text horizontally
        ctx.textBaseline = "middle"; // Center text vertically

        
        ctx.fillText(
            this.label, 
            this.x + this.width / 2, 
            this.y + this.height / 2);
    }

    isClicked(x, y) {
        return x >= this.x && x <= this.x + this.width && y >= this.y && y <= this.y + this.height;
    }
}