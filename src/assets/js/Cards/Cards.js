class Card {
    constructor(id, name, img, git) {
        this.id = id;
        this.name = name;
        this.img = img;
        this.git = git
    }


    // <div class="project-card"></div>
    render(data) {
        this.element = document.createElement('div');
        this.element.setAttribute('data-tilt', ''); // ask how to make blank attribute
        this.element.className = 'project-card';
        this.element.style.background = 'pink';
        this.element.setAttribute('style', `background: center/cover no-repeat url(${this.img}) ;`)
        this.element.innerHTML = `
        
        <a class="github" href="${this.git}" target="_blank"> <i class="fab fa-github fa-md-2x"></i></a>
        <div class="project-div">
          <h3>
            <a href="http://www.chefmarwanslim.com/" target="_blank">${this.name}</a>
          </h3>
        </div>
        `;
        
        this.element.addEventListener("mousemove", (e) => {
            this.element.style.backgroundPositionY = -e.offsetY / 30 + "px";
            this.element.style.backgroundPositionX = -e.offsetX / 30 + "px";

        });

        return this.element;
    }

    mount(parent) {
        parent.appendChild(this.render());
    }

    update() {

    }
}