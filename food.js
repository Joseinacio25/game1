class Food {
    static foodArray = [];
    constructor () {
        this.element = document.createElement("div");
        this.element.setAttribute('id', 'food');
        newGame.element.appendChild(this.element);
        Food.foodArray.push(this);
    }

    hasEaten () {
        const foodIndex = Food.foodArray.indexOf(this);
        Food.foodArray.splice(foodIndex, 1);
        this.element.remove();
    }

    randomFood () {

    }
}

const newFood = new Food