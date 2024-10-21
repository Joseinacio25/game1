class Snake {
    constructor () {
        this.element = document.createElement('div');
        this.element.setAttribute('id', 'snake');
        newGame.element.appendChild(this.element);

        this.positionLeft = 0;
        this.positionBottom = 0;
        this.velocity = 5;
        this.direction = null;
    }
}

const newSnake = new Snake()