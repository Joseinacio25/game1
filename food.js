class Food {
    static foodArray = [];
    constructor () {
        this.element = document.createElement("div");
        this.element.setAttribute('id', 'food');
        newGame.element.appendChild(this.element);
    }
}

const newFood = new Food