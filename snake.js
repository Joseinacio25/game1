class Snake {
    static snakeArray = [];
    constructor () {
        this.element = document.createElement('div');
        this.element.setAttribute('id', 'snake');
        newGame.element.appendChild(this.element);

        this.positionLeft = 0;
        this.positionTop = 0;
        this.velocity = 5;
        this.direction = null;
        this.width = this.element.getBoundingClientRect().width;
    }
    move(direction) {
      if (direction === "left") {
        this.positionLeft -= this.velocity;
        if (this.positionLeft <= 0) {
          this.positionLeft = 0;
        }
      } else if (direction === "right") {
        this.positionLeft += this.velocity;
        if (this.positionLeft >= newGame.width - this.width) {
          this.positionLeft = newGame.width - this.width;
        }
        else if (direction === "up") {
          
        }
      }
      this.element.style.left = this.positionLeft + "px";
    }
}

const newSnake = new Snake()