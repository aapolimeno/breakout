
import { Scene1 } from "./scenes/scene1.js"; 

// Get the canvas element and its context 
const canvas = document.getElementById("breakoutCanvas"); 
const ctx = canvas.getContext("2d")

const scene1 = new Scene1(ctx); 

canvas.addEventListener("click", (event) => {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    scene1.handleClick(x, y);
})

scene1.draw();



