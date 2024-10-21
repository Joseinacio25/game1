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
}

const newSnake = new Snake()