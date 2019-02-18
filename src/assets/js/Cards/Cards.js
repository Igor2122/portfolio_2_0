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
        // this.element.setAttribute('data-tilt', ''); // ask how to make blank attribute
        this.element.className = 'project-card';
        // this.element.style.background = 'pink';
        // this.element.setAttribute('style', `background: center/cover no-repeat url(${this.img}) ;`)
        this.element.innerHTML = `
        <img src="./img/project/${this.img}" alt="besspoke" srcset="">
          <div class="project-info">
            <h4>${this.name} <span></span></h4>
            <hr>
            <p>This was One of my first Projects</p>
            <div class="social-media">
              <div class="github">
                <a href="https://github.com/Igor2122" target="_blank"> <i class="fab fa-github fa-md-2x"></i></a>
              </div>
              <div class="instagram">
                <a href=""><i class="fab fa-instagram fa-md-2x"></i></a> 
              </div>
            </div>
          </div>
          <div class="short-description">
              <h4>Portfolio Project</h4>
          </div>
        `;
        
        this.element.addEventListener("mousemove", (e) => {
            // this.element.style.backgroundPositionY = -e.offsetY / 30 + "px";
            // this.element.style.backgroundPositionX = -e.offsetX / 30 + "px";

        });

        return this.element;
    }

    mount(parent) {
        parent.appendChild(this.render());
    }

    update() {

    }
}