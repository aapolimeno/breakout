import { Button } from '../objects/button.js';


export class Scene1 {
    constructor(ctx) {
        this.ctx = ctx;
        this.buttons = [
            new Button(150, 300, 200, 100, "Daytime", "#FEE3E5", "black"),
            new Button(450, 300, 200, 100, "Nighttime", "#79020B", "white")
        ];
    }

    draw() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)

        // Draw the game name text
        this.drawText();

        // Draw the buttons
        this.buttons.forEach(button => button.draw(this.ctx));
    }


    drawText() {
        const titleY = 90; 
        const subtitleY = titleY*1.9;

        // Title: Set text styles 
        this.ctx.font = "70px 'Sixtyfour Convergence', sans-serif";
        this.ctx.textAlign = "center";  
        this.ctx.textBaseline = "top"; 

        // Draw the game name text
        this.ctx.fillText("Breakout", this.ctx.canvas.width / 2, titleY);


        // Subtitle: Set text styles
        this.ctx.font = "35px 'Sixtyfour Convergence', sans-serif";
        this.ctx.textAlign = "center";  
        this.ctx.textBaseline = "top"; 

        this.ctx.fillText("city", this.ctx.canvas.width / 1.45, subtitleY);

    }


    handleClick(x, y) {
        this.buttons.forEach(button => {
            if (button.isClicked(x, y)) {
                if (button.label === "Daytime") {
                    this.ctx.fillStyle = "#ABDBFF";
                    this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
                }
                
                if (button.label === "Nighttime") {
                    this.ctx.fillStyle = "#001525";
                    this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
                }
                
            }
        });
    }
}

