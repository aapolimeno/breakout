import { Button } from '../objects/button.js';
import { Bar } from '../objects/bar.js';
import { Ball } from '../objects/ball.js';

export class Scene1 {
    constructor(ctx) {
        this.ctx = ctx;
        this.buttons = [
            new Button(200, 600, 200, 100, "Daytime", "#FEE3E5", "black"),
            new Button(450, 600, 200, 100, "Nighttime", "#79020B", "white")
            // new Button(150, 300, 200, 100, "Daytime", "#FEE3E5", "black"),
            // new Button(450, 300, 200, 100, "Nighttime", "#79020B", "white")
        ];
        this.bar = new Bar(300, 650, 150, 20, "black"); // Initial bar position and color
        this.ball = new Ball(400, 100, 10, "purple"); // Initial ball position and color
        this.currentScreen = "start"; // Track the current screen state
        this.initKeyboardListeners();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

        if (this.currentScreen === "start") {
            this.drawStartScreen();
        } else if (this.currentScreen === "daytime") {
            this.drawDaytimeScreen();
        } else if (this.currentScreen === "nighttime") {
            this.drawNighttimeScreen();
        }

        requestAnimationFrame(() => this.draw());
    }

    drawStartScreen() {
        // Draw the game name text
        this.drawText();

        // Draw the buttons
        this.buttons.forEach(button => button.draw(this.ctx));
    }

    drawDaytimeScreen() {
        // Change background color
        this.ctx.fillStyle = "#ABDBFF";
        this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

        // Draw the bar and ball
        this.bar.color = "black";
        this.bar.draw(this.ctx);
        this.ball.draw(this.ctx);
        this.ball.update(this.ctx.canvas.width, this.ctx.canvas.height, this.bar);
    }

    drawNighttimeScreen() {
        // Change background color
        this.ctx.fillStyle = "#001525";
        this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

        // Draw the bar and ball
        this.bar.color = "white";
        this.bar.draw(this.ctx);
        this.ball.draw(this.ctx);
        this.ball.update(this.ctx.canvas.width, this.ctx.canvas.height, this.bar);
    }

    drawText() {
        const titleY = 90; 
        const subtitleY = titleY * 1.9;

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
                    this.currentScreen = "daytime";
                } else if (button.label === "Nighttime") {
                    this.currentScreen = "nighttime";
                }
            }
        });
    }

    initKeyboardListeners() {
        window.addEventListener("keydown", (event) => {
            if (this.currentScreen === "daytime" || this.currentScreen === "nighttime") {
                if (event.key === "ArrowLeft") {
                    this.bar.moveLeft();
                } else if (event.key === "ArrowRight") {
                    this.bar.moveRight(this.ctx.canvas.width);
                } else if (event.key === " ") {
                    this.ball.start();
                }
                this.draw();
            }
        });
    }
}