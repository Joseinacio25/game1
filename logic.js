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
    crashFood();
  }
  
  requestAnimationFrame(gameLoop);

  function crashFood() {
    const snakeLeftEdge = newSnake.positionLeft;
    const snakeRightEdge = newSnake.positionLeft + newSnake.width;
    const snakeTopEdge = newSnake.positionTop;
    const snakeBottomEdge = newSnake.positionTop + newSnake.height;
  
    const foodLeftEdge = newFood.positionLeft;
    const foodRightEdge = newFood.positionLeft + newFood.width;
    const foodTopEdge = newFood.positionTop;
    const foodBottomEdge = newFood.positionTop + newFood.height;
  
    if (
      snakeLeftEdge < foodRightEdge &&
      snakeRightEdge > foodLeftEdge &&
      snakeTopEdge < foodBottomEdge &&
      snakeBottomEdge > foodTopEdge
    ) { 
    newFood.growSnake();
    newFood.removeFood();
    newFood = new Food();
    
    console.log("se la comioooo");
    
    
    }};
