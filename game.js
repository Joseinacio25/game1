class Game {
    constructor() {
      this.lives = 5;
      this.score = 0;
      this.enemies = [];
      this.element = document.querySelector("#game-area");
      this.width = this.element.getBoundingClientRect().width;
      this.height = this.element.getBoundingClientRect().height;
     
    }
    updateLives() {
      this.livesElement.innerText = "❤️".repeat(this.lives);
    }
  }

  const newGame = new Game();