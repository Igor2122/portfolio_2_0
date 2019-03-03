const card = new Card();

class UI {
    constructor(card) {
        this.card = card;


        this.stickyMenu();
        this.renderCardsMenu();
        this.renderCardtoScreen('commercial');
    }

    stickyMenu() {
        const scrollEvents = (e) => {

            const homeDiv = document.querySelector('.home');
            const homeDivClinetHeight = homeDiv.clientHeight;

            let offsetY = null;
            window.addEventListener('scroll', () => {
                offsetY = window.pageYOffset;
                //  console.log(offsetY);
                const navigation = document.querySelector('.navigation');
                if (offsetY > (homeDivClinetHeight - 50)) {
                    navigation.setAttribute('style', 'position: fixed; background: rgba(125,130,142, .9)');
                } else if (offsetY < homeDivClinetHeight) {
                    navigation.style.position = 'inherit';
                }
            });


        }

        document.addEventListener('DOMContentLoaded', scrollEvents);
    }


    renderCardsMenu() {
        const projMenuSection = document.querySelector('.projects-menu');
        this.menu = document.createElement('ul');
        const menuItems = ['commercial', 'fun'];
        for (let menuItem of menuItems) {
            this.li = document.createElement('li');
            this.li.className = 'project_menu';
            this.li.textContent = menuItem;

            this.menu.appendChild(this.li);

            this.li.addEventListener('click', e => {
                const projectContainer = document.querySelector('.projects-container');
                projectContainer.innerHTML = '';
                let clikedLi = e.target.textContent;
                this.renderCardtoScreen(clikedLi);
            })
        }

        projMenuSection.appendChild(this.menu);
    }

    renderCardtoScreen(type) {
        console.log(type);
        const cardsParent = document.querySelector('.projects-container');
        for (let card of cardsData) {
            if (card.category === type) {
                let cardComp = null;
                cardComp = new Card(card.id, card.name, card.descrp, card.img, card.git, card.webLink);
                cardComp.mount(cardsParent);
            }
        }
    }

}