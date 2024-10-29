class Food {
  static foodArray = [];
    constructor () {
        this.element = document.createElement("div");
        this.element.setAttribute('id', 'food');
        newGame.element.appendChild(this.element);
        this.positionLeft = 0;
        this.positionTop = 0;
        this.width = this.element.getBoundingClientRect().width;
        this.height = this.element.getBoundingClientRect().height;
        Food.foodArray.push(this);
        this.randomFood();
    }

    randomFood () {
      this.positionLeft = Math.floor(Math.random() * (newGame.width - this.width));
      this.positionTop = Math.floor(Math.random() * (newGame.height - this.height));

      this.element.style.top = this.positionTop + "px"
      this.element.style.left = this.positionLeft + "px"
    }

    removeFood () {
    // this.element.style.position = "relative";
    //this.element.style.top = -10000 + "px"
    this.element.style.display = "none";
    const foodIndex = Food.foodArray.indexOf(this);

    Food.foodArray.splice(foodIndex, 1);
    }

   
}

let newFood = new Food