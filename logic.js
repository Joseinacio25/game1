document.addEventListener ("keydown", (e) => {
switch (e.key) {
    case "ArrowLeft":
        newSnake.direction = "left"
        break;
    case "ArrowRight":
        newSnake.direction = "right"
        break;
    case "ArrowUp":
        newSnake.direction = "Up"
        break;
    case "ArrowDown":
        newSnake.direction = "Down"
        break;
        default:
        break;
}

});

let frames = 0;

function gameLoop() {
    requestAnimationFrame(gameLoop);
    frames++;
    newSnake.move(newSnake.direction);
  }
  
  requestAnimationFrame(gameLoop);