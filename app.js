
import { Scene } from "./scenes/scene.js"; 
// import { Button } from "objects/button.js";


// Get the canvas element and its context 
const canvas = document.getElementById("breakoutCanvas"); 
const ctx = canvas.getContext("2d")

const scene = new Scene(ctx); 

canvas.addEventListener("click", (event) => {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    scene.handleClick(x, y);
})

scene.draw();



