class Enemy {
    constructor () {
        this.element = document.createElement("div");
        this.element.setAttribute('id', 'enemy');
        newGame.element.appendChild(this.element);
        this.width = this.element.getBoundingClientRect().width;
        this.height = this.element.getBoundingClientRect().height;
        this.left = newGame.width;
        this.top = Math.floor(Math.random() * (newGame.height - this.height));
        this.velocity = 5;
        this.element.style.left = this.left + "px";
        this.element.style.top = this.top + "px";
        
        newGame.enemies.push(this);
    }

    attack() {
        this.left -= this.velocity;
    
        if (this.left <= 0 - this.width) {
          
          this.destroy();
        }
    
        this.element.style.left = this.left + "px";
        this.element.style.top = this.top + "px";
      }
    
      destroy() {
        
        this.element.remove();
    
        const index = newGame.enemies.indexOf(this);
        newGame.enemies.splice(index, 1);
      }
}