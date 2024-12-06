import { Button } from '../objects/button.js';

export class Scene {
    constructor(ctx) {
        this.ctx = ctx;
        this.buttons = [
            new Button(150, 300, 200, 100, "Daytime", "lightblue", "black"),
            new Button(450, 300, 200, 100, "Nighttime", "darkblue", "white")
        ];
    }

    draw() {
        // this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
        this.buttons.forEach(button => button.draw(this.ctx));
    }

    handleClick(x, y) {
        this.buttons.forEach(button => {
            if (button.isClicked(x, y)) {
                console.log(`${button.label} button was clicked!`);
                // 
            }
        });
    }
}