class Game {
    constructor() {
      this.lives = 5;
      this.score = 0;
      this.enemies = [];
      this.gameOver = false
      this.element = document.querySelector("#game-area");
      this.width = this.element.getBoundingClientRect().width;
      this.height = this.element.getBoundingClientRect().height;
      this.livesElement = document.querySelector("#lives");
      this.gameOverScreen = document.querySelector("#game-over");
      this.updateLives();
     
    }
    updateLives() {
      this.livesElement.innerText = "❤️".repeat(this.lives);
    }

  }

  const newGame = new Game();