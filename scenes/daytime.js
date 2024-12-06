export class Daytime{

    constructor(ctx) {
        this.ctx = ctx;
    }


    draw() {
        // Clear canvas
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)

        // Draw test text
        drawText();
    }


    drawText() {

        // Title: Set text styles 
        this.ctx.font = "70px 'Sixtyfour Convergence', sans-serif";
        this.ctx.textAlign = "center";  
        this.ctx.textBaseline = "top"; 

        // Draw the game name text
        this.ctx.fillText("Breakout", this.ctx.canvas.width / 2, titleY);
    }



    
}



