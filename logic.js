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
    newGame.enemies.forEach((enemy) => {
        enemy.attack();
        collision(enemy);
      });

      if (frames % 50 === 0) {
        new Enemy();
  }}
  
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
    newGame.score++;
    document.querySelector("#score").textContent = newGame.score
    newFood.removeFood();
    newFood = new Food();
    
    console.log("se la comioooo");
    }};

    function collision(enemy) {
        const snakeLeftEdge = newSnake.positionLeft;
        const snakeRightEdge = newSnake.positionLeft + newSnake.width;
        const snakeTopEdge = newSnake.positionTop;
        const snakeBottomEdge = newSnake.positionTop + newSnake.height;
      
        const enemyLeftEdge = enemy.left;
        const enemyRightEdge = enemy.left + enemy.width;
        const enemyTopEdge = enemy.top;
        const enemyBottomEdge = enemy.top + enemy.height;
      
        if (
          snakeLeftEdge < enemyRightEdge &&
          snakeRightEdge > enemyLeftEdge &&
          snakeTopEdge < enemyBottomEdge &&
          snakeBottomEdge > enemyTopEdge
        ) {
            newGame.lives--;
            newGame.updateLives();
            enemy.destroy();
            console.log("pierdes vida");
            if (newGame.lives <= 0) {
              newGame.gameOver = true;
              newGame.gameOverScreen.style.display = "flex";
            }
            
        }
    }

